import {
    Typography
} from "@material-tailwind/react";
import { DatePicker, Input, Modal } from "antd";
import localeEn from 'antd/es/date-picker/locale/en_US';
import localePt from 'antd/es/date-picker/locale/pt_BR';
import dayjs from "dayjs";
import 'dayjs/locale/en';
import 'dayjs/locale/pt-br';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { validateNames } from "../../../common/validations";
import { GnButton } from "../../common/button/GnButton";

export function SchedulingPopup(props) {
    const { date, open, operation = "", scheduling = {}, handleOpen, localPostSchedulings, localPutSchedulings } = props;

    const { t } = useTranslation();

    const [localScheduling, setLocalScheduling] = useState({ ...scheduling });

    const isFieldValid = {
        taeName: localScheduling.nomeTecnico != undefined && validateNames(localScheduling.nomeTecnico),
        studentName: localScheduling.nomeAlunos != undefined && validateNames(localScheduling.nomeAlunos)
    };

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
            title = t("createSchedule");
            color = "GREEN";
            order = t("create");
            fn = () => {
                localPostSchedulings(localScheduling);
                handleOpen();
            };
            break;
        case "UPDATE":
            title = t("modifyScheduling");
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
                <div className="mb-5">
                    <Typography className="font-bold uppercase">
                        {title}
                    </Typography>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row gap-2 w-full">
                        <Input
                            placeholder={t("scheduleCreateModal.techniciansName")}
                            className={operation == "UPDATE" ? "w-[50%]" : ""}
                            allowClear={true}
                            size="large"
                            status={!isFieldValid.taeName ? "error" : undefined}
                            value={localScheduling?.nomeTecnico}
                            onChange={e => setLocalScheduling({ ...localScheduling, nomeTecnico: e.target.value })}
                        />

                        {operation == "UPDATE"
                            ? <DatePicker
                                placeholder={t("scheduleCreateModal.date")}
                                className="w-[50%]"
                                format="DD/MM/YYYY"
                                value={dayjs(localScheduling?.dataAtendimentoInicial)}
                                size="large"
                                locale={language == "pt" ? localePt : localeEn}
                                allowClear={false}
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
                            placeholder={t("scheduleCreateModal.namesStudents")}
                            size="large"
                            status={!isFieldValid.studentName ? "error" : undefined}
                            value={localScheduling?.nomeAlunos}
                            allowClear={true}
                            onChange={e => setLocalScheduling({ ...localScheduling, nomeAlunos: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <DatePicker
                            placeholder={t("scheduleCreateModal.startTime")}
                            className="w-[50%]"
                            picker="time"
                            format="HH:mm"
                            value={dayjs(localScheduling?.dataAtendimentoInicial)}
                            size="large"
                            locale={language == "pt" ? localePt : localeEn}
                            allowClear={false}
                            onChange={date => setLocalScheduling({
                                ...localScheduling,
                                dataAtendimentoInicial: localScheduling.dataAtendimentoInicial.split("T")[0] + date.format("THH:mm:ss")
                            })}
                        />
                        <DatePicker
                            placeholder={t("scheduleCreateModal.endTime")}
                            className="w-[50%]"
                            picker="time"
                            format="HH:mm"
                            value={dayjs(localScheduling?.dataAtendimentoFinal)}
                            size="large"
                            locale={language == "pt" ? localePt : localeEn}
                            allowClear={false}
                            onChange={date => setLocalScheduling({
                                ...localScheduling,
                                dataAtendimentoFinal: localScheduling.dataAtendimentoFinal.split("T")[0] + date.format("THH:mm:ss")
                            })}
                        />
                    </div>
                </div>
                <GnButton
                    className="mt-5"
                    color={color}
                    onClick={fn}
                    disabled={!Object.values(isFieldValid).every(value => value === true)}
                >
                    {order}
                </GnButton>
            </Modal >
        </>
    );
}