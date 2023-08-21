import { useNavigate, useParams } from "react-router-dom";
import { GnButton } from "../components/common/button/GnButton";
import { convertDateBars, convertDateHyphen, getTimeH } from "../common/general";
import { useState, useEffect } from "react";
import { getSchedulings, postScheduling, putScheduling, deleteScheduling } from "../services/scheduling";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@material-tailwind/react";
import { WarningPopup } from "../components/common/popup/WarningPopup";
import { SchedulingPopup } from "../components/customized/scheduling/SchedulingPopup";

export function ScheduleRoomDay(props) {
    const { date } = useParams();
    const localDate = new Date(date.replace(/-/g, '\/'));

    const navigate = useNavigate();

    const [schedulings, setSchedulings] = useState([]);
    const [scheduling, setScheduling] = useState({});
    const [popup, setPopup] = useState({ open: false, operation: "" });
    const [warningOpen, setWarningOpen] = useState(false);

    const localGetSchedulings = async () => {
        let response = await getSchedulings({
            dataAtendimentoInicial: convertDateHyphen(localDate),
            dataAtendimentoFinal: convertDateHyphen(localDate)
        });

        setSchedulings(response.data);
    }

    const localPostSchedulings = async (body) => {
        await postScheduling(body);
        await localGetSchedulings();
    }

    const localPutSchedulings = async (id, body) => {
        await putScheduling(id, body);
        await localGetSchedulings();
    }

    const localDeleteSchedulings = async (id) => {
        await deleteScheduling(id);
        await localGetSchedulings();
    }

    useEffect(() => {
        localGetSchedulings();
    }, []);

    return (
        <>
            <GnButton onClick={() => navigate('/adm/agendamento')} className="m-3">{"< Voltar"}</GnButton>
            <h1 className="m-3">{convertDateBars(localDate)}</h1>
            <GnButton
                color="GREEN"
                className="p-2 m-3 mb-10"
                onClick={() => {
                    setPopup({ open: true, operation: "CREATE" });
                }}
            >
                <PlusIcon className="w-5 h-5" />
            </GnButton>

            {schedulings.map(scheduling => (
                <>
                    <p className="m-3">Horário: {getTimeH(new Date(scheduling.dataAtendimentoInicial)) + "-" + getTimeH(new Date(scheduling.dataAtendimentoFinal))}</p>
                    <p className="m-3">Técnico: {scheduling.nomeTecnico}</p>
                    <p className="m-3">Alunos: {scheduling.nomeAlunos}</p>
                    <p className="m-3">Criado por: <Avatar src={scheduling.criadoPor?.urlAvatar} className="w-7 h-7 mx-3" />{scheduling.criadoPor?.nome}</p>

                    <GnButton
                        color="BLUE"
                        className="p-2 m-3 mb-10"
                        onClick={() => {
                            setScheduling({ ...scheduling });
                            setPopup({ open: true, operation: "UPDATE" });
                        }}
                    >
                        <PencilIcon className="w-5 h-5" />
                    </GnButton>

                    <GnButton
                        color="RED"
                        className="p-2 m-3 mb-10"
                        onClick={() => {
                            setScheduling({ ...scheduling });
                            setWarningOpen(!warningOpen);
                        }}
                    >
                        <TrashIcon className="w-5 h-5" />
                    </GnButton>
                </>
            ))}

            <SchedulingPopup
                open={popup.open}
                operation={popup.operation}
                scheduling={scheduling}
                handleOpen={() => { 
                    setPopup({ open: false, operation: "" });
                    setScheduling({});
                }}
                localPostSchedulings={localPostSchedulings}
                localPutSchedulings={localPutSchedulings}
            />

            <WarningPopup
                open={warningOpen}

                handleOpen={() => {
                    setWarningOpen(!warningOpen);
                    setScheduling({});
                }}

                onConfirm={() => {
                    localDeleteSchedulings(scheduling?.idAgendamento);
                    setWarningOpen(!open);
                }}
            />
        </>
    );
}