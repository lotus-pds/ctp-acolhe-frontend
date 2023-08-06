import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    IconButton
} from "@material-tailwind/react";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";
import { convertDateBars } from "../../../common/general";

const getIncidentTypes = (incidentTypes = []) => {
    let types = incidentTypes.map(t => t.tipo);
    return types.join(", ");
}

const getQuestionsAndAnswers = (questions = []) => {

    return (
        <div>
            {questions.map(q => {
                return (
                    <div>
                        <p>PERGUNTA</p>
                        <p>{q.descricao}</p>
                        <p>RESPOSTAS</p>
                        <p>{q?.respostas.map(r => r.descricao).join(", ")}</p>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export function IncidentDetails(props) {
    const { open, handleOpen, incident, ChipStatus, setWarningOpen } = props;

    const { t } = useTranslation();

    return (
        <>
            <Dialog open={open} handler={() => { }}>
                <DialogHeader className="flex justify-between">
                    <Typography>
                        {incident?.assunto}
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
                    </IconButton></DialogHeader>
                <DialogBody>
                    Data: {convertDateBars(new Date(incident?.dataIncidente))} | Status: <ChipStatus status={incident?.status?.idStatus} /><br />
                    Tipos: {getIncidentTypes(incident?.tipos)}<br /><br />
                    {getQuestionsAndAnswers(incident?.perguntas)}
                </DialogBody>
                {(incident?.status?.idStatus != "CAN" && incident?.status?.idStatus != "FIN")
                    ? <DialogFooter>
                        <GnButton
                            color="RED"
                            onClick={() => {
                                setWarningOpen(true);
                            }}
                        >
                            {t("cancel")}
                        </GnButton>
                    </DialogFooter>
                    : <></>
                }
            </Dialog >
        </>
    );
}