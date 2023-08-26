import { ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, StarIcon } from "@heroicons/react/24/solid";
import {
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Typography
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { convertDateBars } from "../../../common/general";
import { GnButton } from "../../common/button/GnButton";
import { ChipIncidentStatus } from "../gnIncidents/ChipIncidentStatus";

const getQuestionsAndAnswers = (questions = []) => {
    return (
        <div>
            {questions.sort((a, b) => a.ordem - b.ordem)
                .map(q => {
                    return (
                        <div className="flex gap-2 mt-3 mx-5 ml-10">
                            &#x2022;<Typography variant="h6">{q.descricao} <Typography>{q?.respostas.map(r => r.descricao).join(", ")}</Typography></Typography>
                        </div>
                    );
                })}
        </div>
    );
}

export function IncidentDetails(props) {
    const { open, handleOpen, incident, setWarningOpen } = props;

    const { t } = useTranslation();

    return (
        <>
            <Dialog
                open={open}
                handler={() => { }}
                size="xl"
                className="min-h-[60vh] max-h-[95vh] overflow-auto"
            >
                <DialogHeader className="flex justify-between pl-7">
                    <Typography variant="h2" color="blue-gray" className="font-mouse sm:text-4xl text-2xl">
                        Detalhes do incidente
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
                <hr />
                <DialogBody className="py-0 px-10">
                    <div className="my-3 mx-2">
                        <Typography variant="h4" color="blue-gray" className="flex gap-4 py-2 pr-2">
                            <ClipboardDocumentListIcon className="sm:w-6 w-5 inline" />
                            Informações do Incidente
                        </Typography>

                        <span className="grid grid-cols-6 gap-y-4 my-4 ml-10">
                            <span className="col-span-4">
                                <Typography variant="h6">Assunto</Typography>
                                <Typography>{incident?.assunto}</Typography>
                            </span>
                            <span className="col-span-1">
                                <Typography variant="h6">Data de criação</Typography>
                                <Typography>{convertDateBars(new Date(incident?.dataIncidente))}</Typography>
                            </span>

                            <span className="col-span-1">
                                <Typography variant="h6">Status</Typography>
                                <ChipIncidentStatus status={incident?.status?.idStatus} />
                            </span>

                            <span className="col-span-6">
                                <Typography variant="h6">Temas</Typography>
                                <Typography className="-ml-2 text-ellipsis overflow-hidden">
                                    {incident?.tipos?.map((t) => (
                                        <><StarIcon className="h-6 w-6 inline mr-1 ml-2 mb-1"></StarIcon>
                                            {t?.tipo}</>
                                    ))}
                                </Typography>
                            </span>
                        </span>
                    </div>
                    <hr />
                    <div className="my-3 mx-2">
                        <Typography variant="h4" color="blue-gray" className="flex gap-4 py-2 pr-2">
                            <ChatBubbleLeftRightIcon className="sm:w-6 w-5 inline" />
                            Triagem
                        </Typography>

                        {getQuestionsAndAnswers(incident?.perguntas)}
                    </div>
                </DialogBody>
                <div className="flex justify-end mr-3 -mt-6 mb-3">
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
                </div>
            </Dialog >
        </>
    );
}