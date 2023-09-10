import { ChatBubbleLeftRightIcon, ChevronLeftIcon, ClipboardDocumentListIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { COURSE_TYPES, PERIOD_TYPES } from "../common/constants";
import { concatStrings, convertDateBars, phoneNumberMask } from "../common/general";
import { HeaderTae } from "../components/HeaderTae";
import { GnButton } from "../components/common/button/GnButton";
import { ChipIncidentStatus } from "../components/customized/gnIncidents/ChipIncidentStatus";
import { completeIncident, getIncident, processIncident } from "../services/incident";

const getQuestionsAndAnswers = (questions = []) => {
    return (
        <div>
            {questions.sort((a, b) => a.ordem - b.ordem)
                .map(q => {
                    return (
                        <div className="flex gap-2 my-3 mx-5 ml-10">
                            &#x2022;<Typography variant="h6">{q.descricao} <Typography>{q?.respostas.map(r => r.descricao).join(", ")}</Typography></Typography>
                        </div>
                    );
                })}
        </div>
    );
}

export function AdmIncidentDetails(props) {
    const { id } = useParams();

    const [incident, setIncident] = useState({});

    const localGetIncident = async () => {
        let response = await getIncident(id);
        setIncident(response.data);
    }

    const localProcessIncident = async () => {
        let response = await processIncident(id);
        setIncident(response.data);
    }

    const localCompleteIncident = async () => {
        let response = await completeIncident(id);
        setIncident(response.data);
    }

    useEffect(() => {
        localGetIncident();
    }, []);

    const { t } = useTranslation();
    const language = localStorage.getItem("i18nextLng");
    const navigate = useNavigate();

    const periodTypes = PERIOD_TYPES();
    const courseTypes = COURSE_TYPES();

    return (
        <div className="flex flex-col items-center ">
            <HeaderTae />

            <Card className="h-full w-[90%] mt-8 mb-6 dark:bg-gray-800">
                <CardHeader floated={false} shadow={false} className="my-5 mx-10 dark:bg-gray-800 dark:text-gray-200 font-normal" >
                    <div className="flex items-center gap-5 mb-4">
                        <ChevronLeftIcon
                            className="sm:h-10 sm:w-8 h-6 inline cursor-pointer" onClick={() => navigate('/adm/incidente')}
                        />
                        <Typography variant="h2" color="blue-gray" className="dark:text-gray-200 font-normal font-mouse sm:text-4xl text-2xl">
                            {t("incidentDetails")}
                        </Typography>
                    </div>
                    <hr />
                    <div className="my-3 sm:mx-14">
                        <Typography variant="h4" color="blue-gray" className="dark:text-gray-200 font-normal sm:text-xl text-lg flex gap-4 py-2 pr-2">
                            <UserIcon className="sm:w-6 w-5 inline" />
                            {t("studentTnformation")}
                        </Typography>

                        <span className="sm:grid sm:grid-cols-12 flex flex-col gap-y-5 my-4 sm:ml-10">
                            <span className="col-span-4">
                                <Typography variant="h6">{t("name")}</Typography>
                                <Typography>{incident?.usuarioCopia?.nome}</Typography>
                            </span>

                            <span className="col-span-4">
                                <Typography variant="h6">{t("email")}</Typography>
                                <Typography>{incident?.usuarioCopia?.email}</Typography>
                            </span>

                            <span className="col-span-3">
                                <Typography variant="h6">{t("registration")}</Typography>
                                <Typography>{incident?.usuarioCopia?.prontuario}</Typography>
                            </span>

                            <span className={incident?.usuarioCopia?.nomeCurso ? "col-span-8" : "col-span-4"}>
                                <Typography variant="h6">{t("course")}</Typography>
                                <Typography>{concatStrings([incident?.usuarioCopia?.nomeCurso, courseTypes.find(t => t.value == incident?.usuarioCopia?.tipoCurso)?.label]) || t("notInformed")}</Typography>
                            </span>

                            <span className={incident?.usuarioCopia?.turma ? "col-span-1" : "col-span-4"}>
                                <Typography variant="h6">{t("class")}</Typography>
                                <Typography>{incident?.usuarioCopia?.turma || t("notInformed")}</Typography>
                            </span>

                            <span className={incident?.usuarioCopia?.periodo ? "col-span-1" : "col-span-2"}>
                                <Typography variant="h6">{t("period")}</Typography>
                                <Typography>{periodTypes.find(t => t.value == incident?.usuarioCopia?.periodo)?.label || t("notInformed")}</Typography>
                            </span>

                            <span className={incident?.usuarioCopia?.telefone ? "col-span-2" : "col-span-2"}>
                                <Typography variant="h6">{t("phone")}</Typography>
                                <Typography>{phoneNumberMask(incident?.usuarioCopia?.telefone) || t("notInformed")}</Typography>
                            </span>
                        </span>
                    </div>
                    <hr />
                    <div className="my-3 sm:mx-14">
                        <Typography variant="h4" color="blue-gray" className="dark:text-gray-200 font-normal sm:text-2xl text-xl flex gap-4 py-2 pr-2">
                            <ClipboardDocumentListIcon className="sm:w-6 w-5 inline" />
                            {t("incidentInformation")}
                        </Typography>

                        <span className="sm:grid sm:grid-cols-12 flex flex-col gap-y-5 my-4 sm:ml-10">
                            <span className="col-span-6">
                                <Typography variant="h6">{t("subject")}</Typography>
                                <Typography>{incident?.assunto}</Typography>
                            </span>

                            <span className="col-span-3">
                                <Typography variant="h6">{t("creationDate")}</Typography>
                                <Typography>{convertDateBars(new Date(incident?.dataIncidente))}</Typography>
                            </span>

                            <span className="col-span-3">
                                <Typography variant="h6">Status</Typography>
                                <ChipIncidentStatus status={incident?.status?.idStatus} />
                            </span>

                            <span className="col-span-12">
                                <Typography variant="h6">{t("topicsCovered")}</Typography>
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
                    <div className="my-3 sm:mx-14">
                        <Typography variant="h4" color="blue-gray" className="dark:text-gray-200 font-normal sm:text-2xl text-xl flex gap-4 py-2 pr-2">
                            <ChatBubbleLeftRightIcon className="sm:w-6 w-5 inline" />
                            {t("screening")}
                        </Typography>
                        <Typography variant="small" className="sm:ml-0 -ml-8">
                            {getQuestionsAndAnswers(incident?.perguntas)}
                        </Typography>
                    </div>
                    <div className="flex sm:justify-end justify-start mb-6 sm:mr-5">
                        {(incident?.status?.idStatus == "PEN")
                            ? <GnButton
                                color="BLUE"
                                onClick={() => {
                                    localProcessIncident(incident?.idIncidente);
                                }}
                            >
                                {t("initiateProcess")}
                            </GnButton>
                            : <></>
                        }
                        {(incident?.status?.idStatus == "EPR")
                            ? <GnButton
                                color="GREEN"
                                onClick={() => {
                                    localCompleteIncident(incident?.idIncidente);
                                }}
                            >
                                {t("completeProcess")}
                            </GnButton>
                            : <></>
                        }
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}