import {
    Typography
} from "@material-tailwind/react";
import { Modal, DatePicker, Input } from "antd";
import { useTranslation } from "react-i18next";
import { GnButton } from "../../common/button/GnButton";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';
import localePt from 'antd/es/date-picker/locale/pt_BR';
import localeEn from 'antd/es/date-picker/locale/en_US';

export function SchedulingPopup(props) {
    const { date, open, operation = "", scheduling = {}, handleOpen, localPostSchedulings, localPutSchedulings } = props;

    const { t } = useTranslation();

    const [localScheduling, setLocalScheduling] = useState({ ...scheduling });

    useEffect(() => {
        if (Object.keys(scheduling).length != 0) {
            setLocalScheduling({ ...scheduling });
        } else {
            setLocalScheduling({
                dataAtendimentoInicial: dayjs(date).startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
                dataAtendimentoFinal: dayjs(date).startOf("day").format("YYYY-MM-DDTHH:mm:ss")
            });
        }
    }, [scheduling]);

    let title = "";
    let color = "";
    let order = "";
    let fn = () => { };

    switch (operation) {
        case "CREATE":
            title = "Criar agendamento";
            color = "GREEN";
            order = t("create");
            fn = () => {
                localPostSchedulings(localScheduling);
                handleOpen();
            };
            break;
        case "UPDATE":
            title = "Atualizar agendamento";
            color = "BLUE";
            order = t("update");
            fn = () => {
                localPutSchedulings(localScheduling.idAgendamento, localScheduling);
                handleOpen();
            };
            break;
    }

    const language = localStorage.getItem("i18nextLng");

    return (
        <>
            <Modal
                open={open}
                onCancel={handleOpen}
                className="max-h-[90vh] overflow-auto"
                footer={[]}
            >
                <Typography>
                    {title}
                </Typography>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row gap-2 w-full">
                        <Input
                            placeholder="Nome Técnico"
                            className={operation == "UPDATE" ? "w-[50%]" : ""}
                            size="large"
                            value={localScheduling?.nomeTecnico}
                            onChange={e => setLocalScheduling({ ...localScheduling, nomeTecnico: e.target.value })}
                        />

                        {operation == "UPDATE"
                            ? <DatePicker
                                placeholder="Data"
                                className="w-[50%]"
                                format="DD/MM/YYYY"
                                value={dayjs(localScheduling?.dataAtendimentoInicial)}
                                size="large"
                                locale={language == "pt" ? localePt : localeEn}
                                onChange={date => setLocalScheduling({
                                    ...localScheduling,
                                    dataAtendimentoInicial: date.format("YYYY-MM-DDT") + localScheduling.dataAtendimentoInicial.split("T")[1],
                                    dataAtendimentoFinal: date.format("YYYY-MM-DDT") + localScheduling.dataAtendimentoFinal.split("T")[1]
                                })}
                            />
                            : <></>
                        }
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <Input
                            placeholder="Alunos"
                            size="large"
                            value={localScheduling?.nomeAlunos}
                            onChange={e => setLocalScheduling({ ...localScheduling, nomeAlunos: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <DatePicker
                            placeholder="Horário Início"
                            className="w-[50%]"
                            picker="time"
                            format="HH:mm"
                            value={dayjs(localScheduling?.dataAtendimentoInicial)}
                            size="large"
                            locale={language == "pt" ? localePt : localeEn}
                            onChange={date => setLocalScheduling({
                                ...localScheduling,
                                dataAtendimentoInicial: localScheduling.dataAtendimentoInicial.split("T")[0] + date.format("THH:mm:ss")
                            })}
                        />
                        <DatePicker
                            placeholder="Horário Fim"
                            className="w-[50%]"
                            picker="time"
                            format="HH:mm"
                            value={dayjs(localScheduling?.dataAtendimentoFinal)}
                            size="large"
                            locale={language == "pt" ? localePt : localeEn}
                            onChange={date => setLocalScheduling({
                                ...localScheduling,
                                dataAtendimentoFinal: localScheduling.dataAtendimentoFinal.split("T")[0] + date.format("THH:mm:ss")
                            })}
                        />
                    </div>
                </div>
                <GnButton
                    color={color}
                    onClick={fn}
                >
                    {order}
                </GnButton>
            </Modal >
        </>
    );
}