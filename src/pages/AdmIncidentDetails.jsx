import { GnButton } from "../components/common/button/GnButton";
import { useTranslation } from "react-i18next";
import { convertDateBars } from "../common/general";
import { useEffect, useState } from "react";
import { getIncident, processIncident, completeIncident } from "../services/incident";
import { ChipIncidentStatus } from "../components/cutomized/gnIncidents/ChipIncidentStatus";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Avatar } from "@material-tailwind/react";

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

export function AdmIncidentDetails(props) {
    const { id } = useParams();

    const [incident, setIncident] = useState({});

    console.log(incident);

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
        <>

            <GnButton
                color="PURPLE"
                onClick={() => navigate('/adm/incident')}
            >
                {"< Voltar"}
            </GnButton><br />

            <Typography>
                ALUNO
            </Typography>

            <Typography>
                <Avatar
                    src={incident?.usuarioCopia?.urlAvatar}
                    size="md"
                />
            </Typography>

            <Typography>
                Nome: {incident?.usuarioCopia?.nome}
            </Typography>

            <Typography>
                Prontuário: {incident?.usuarioCopia?.prontuario}
            </Typography>

            <Typography>
                Email: {incident?.usuarioCopia?.email}
            </Typography>

            <Typography>
                Telefone: {incident?.usuarioCopia?.telefone}
            </Typography>

            <Typography>
                Curso: {incident?.usuarioCopia?.nomeCurso} ({incident?.usuarioCopia?.tipoCurso})
            </Typography>

            <Typography>
                Turma: {incident?.usuarioCopia?.turma}
            </Typography>

            <Typography>
                Período: {incident?.usuarioCopia?.periodo}
            </Typography>

            <br />

            <Typography>
                INCIDENTE
            </Typography>

            <Typography>
                Assunto: {incident?.assunto}
            </Typography>

            <Typography>
                Data: {convertDateBars(new Date(incident?.dataIncidente))}
            </Typography>

            <Typography>
                Status: <ChipIncidentStatus status={incident?.status?.idStatus} />
            </Typography>

            <Typography>
                Tipos: {getIncidentTypes(incident?.tipos)}
            </Typography>

            <br />

            {getQuestionsAndAnswers(incident?.perguntas)}

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
        </>
    );
}