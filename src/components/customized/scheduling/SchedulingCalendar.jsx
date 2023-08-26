import { Badge, Calendar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { concatStrings, convertDateHyphen, getTimeH } from '../../../common/general';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';
import localePt from 'antd/es/date-picker/locale/pt_BR';
import localeEn from 'antd/es/date-picker/locale/en_US';

export const SchedulingCalendar = (props) => {
    const { schedulings, localGetSchedulings, time } = props;

    const navigate = useNavigate();

    const monthCellRender = (value) => { };

    const dateCellRender = (value) => {
        let daySchedulings = schedulings.filter(e => e?.dataAtendimentoInicial?.slice(0, 10) == convertDateHyphen(value.toDate()));
        daySchedulings = daySchedulings.map(ds => ({
            key: ds?.idAgendamento,
            time: getTimeH(new Date(ds?.dataAtendimentoInicial)) + "-" + getTimeH(new Date(ds?.dataAtendimentoFinal)),
            taeName: ds?.nomeTecnico
        }));

        if (daySchedulings != undefined) {
            return (
                <ul className="flex flex-col gap-3 events">
                    {daySchedulings.map((scheduling) => (
                        <li key={scheduling.idAgendamento} >
                            <Badge status="success" text={`${concatStrings([scheduling.time, scheduling.taeName], ": ")}`} />
                        </li>
                    ))}
                </ul>
            );
        }
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    const language = localStorage.getItem("i18nextLng");

    return (
        <Calendar
            onPanelChange={(date, mode) => {
                if (mode == 'month') {
                    localGetSchedulings(date.year(), date.month());
                }
            }}

            onSelect={(date) => {
                if (time.month == date.month() && time.year == date.year()) {
                    navigate(`/adm/agendamento/${convertDateHyphen(date.toDate())}`)
                }
            }}

            cellRender={cellRender}
            className="w-[90%] p-[20px] mb-[20px] mt-[40px] rounded-2xl"
            locale={language == "pt" ? localePt : localeEn}
        />
    );
};