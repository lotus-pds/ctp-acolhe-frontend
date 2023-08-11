import { ChatBubbleLeftRightIcon, ChevronLeftIcon, StarIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { convertDateBars } from "../common/general";
import { HeaderTae } from "../components/HeaderTae";
import { GnButton } from "../components/common/button/GnButton";
import { ChipIncidentStatus } from "../components/cutomized/gnIncidents/ChipIncidentStatus";
import { completeIncident, getIncident, processIncident } from "../services/incident";

const getIncidentTypes = (incidentTypes = []) => {
    let types = incidentTypes.map(t => t.tipo);
    return types.join(", ");
}

const getQuestionsAndAnswers = (questions = []) => {
    return (
        <div>
            {questions.sort((a, b) => a.ordem - b.ordem)
                .map(q => {
                    return (
                        <div className="flex gap-2 my-5 mx-5">
                            <ChatBubbleLeftRightIcon className="h-6 w-6 inline ml-2 mb-1"></ChatBubbleLeftRightIcon><Typography variant="h6">{q.descricao}</Typography>
                            <Typography>{q?.respostas.map(r => r.descricao).join(", ")}</Typography>
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
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center">
            <HeaderTae />

            <Card className="h-full w-[90%] mt-8 mb-6">
                <CardHeader floated={false} shadow={false} >
                    <div className="flex gap-5 mb-4">
                        <ChevronLeftIcon
                            className="h-10 w-8 inline cursor-pointer" onClick={() => navigate('/adm/incident')}
                        />
                        <Typography variant="h2" color="blue-gray" className="font-mouse sm:text-4xl text-2xl">
                            Detalhes do incidente
                        </Typography>
                    </div>
                    <hr />
                    <div className="my-5 mx-5">
                        <Typography variant="h5" color="blue-gray">
                            Informações gerais do aluno(a)
                        </Typography>

                        <span className="grid grid-cols-12 gap-y-2 my-4">
                            <span className="col-span-5">
                                <Typography variant="h6">Nome</Typography>
                                <Typography>{incident?.usuarioCopia?.nome}</Typography>
                            </span>

                            <span className="col-span-3">
                                <Typography variant="h6">Prontuário</Typography>
                                <Typography>{incident?.usuarioCopia?.prontuario}</Typography>
                            </span>

                            <span className="col-span-4">
                                <Typography variant="h6">E-mail</Typography>
                                <Typography>{incident?.usuarioCopia?.email}</Typography>
                            </span>

                            <span className="col-span-2">
                                <Typography variant="h6">Telefone</Typography>
                                <Typography>{incident?.usuarioCopia?.telefone}</Typography>
                            </span>

                            <span className="col-span-6">
                                <Typography variant="h6">Curso</Typography>
                                <Typography>{incident?.usuarioCopia?.nomeCurso} - {incident?.usuarioCopia?.tipoCurso}</Typography>
                            </span>

                            <span className="col-span-2">
                                <Typography variant="h6">Turma</Typography>
                                <Typography>{incident?.usuarioCopia?.turma}</Typography>
                            </span>

                            <span className="col-span-2">
                                <Typography variant="h6">Período</Typography>
                                <Typography>{incident?.usuarioCopia?.periodo}</Typography>
                            </span>
                        </span>
                    </div>
                    <hr />
                    <div className="my-5 mx-5">
                        <Typography variant="h5" color="blue-gray">
                            Informações do incidente
                        </Typography>

                        <span className="grid grid-cols-12 gap-y-2 my-4">
                            <span className="col-span-5">
                                <Typography variant="h6">Assunto</Typography>
                                <Typography>{incident?.assunto}</Typography>
                            </span>

                            <span className="col-span-2">
                                <Typography variant="h6">Data de criação</Typography>
                                <Typography>{convertDateBars(new Date(incident?.dataIncidente))}</Typography>
                            </span>

                            <span className="col-span-3">
                                <Typography variant="h6">Status</Typography>
                                <ChipIncidentStatus status={incident?.status?.idStatus} />
                            </span>

                            <span className="col-span-12">
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
                    <div className="my-5 mx-5">
                        <Typography variant="h5" color="blue-gray">
                            Triagem
                        </Typography>

                        {getQuestionsAndAnswers(incident?.perguntas)}
                    </div>
                    <div className="flex justify-end my-6 mx-5">
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