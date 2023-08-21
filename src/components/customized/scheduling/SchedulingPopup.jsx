import {
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Typography
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { GnButton } from "../../common/button/GnButton";
import { useEffect, useState } from "react";
import { CommonInput } from "../../common/input/CommonInput";
import { InfoInput } from "../../common/input/InfoInput";

export function SchedulingPopup(props) {
    const { open, operation = "", scheduling = {}, handleOpen, localPostSchedulings, localPutSchedulings } = props;

    const { t } = useTranslation();

    let localScheduling = scheduling;

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

    return (
        <>
            <Dialog
                open={open}
                className="max-h-[90vh] overflow-auto"
            >
                <DialogHeader className="flex justify-between">
                    <Typography>
                        {title}
                    </Typography>
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-row gap-2 w-full">
                            <CommonInput label="Nome Técnico" />
                            <InfoInput
                                label="Data"
                                info={{ title: t("tooltipName.attribute"), text: [t("tooltipName.description")] }}
                            />
                        </div>
                        <div className="flex flex-row gap-2 w-full">
                            <InfoInput
                                label="Horário Inicial"
                                info={{ title: t("tooltipName.attribute"), text: [t("tooltipName.description")] }} />
                            <InfoInput
                                label="Horário Final"
                                info={{ title: t("tooltipName.attribute"), text: [t("tooltipName.description")] }}
                            />
                        </div>
                        <div className="flex flex-row gap-2 w-full">
                            <CommonInput label="Nome Alunos" />
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <GnButton
                        color={color}
                        onClick={fn}
                    >
                        {order}
                    </GnButton>
                </DialogFooter>
            </Dialog >
        </>
    );
}