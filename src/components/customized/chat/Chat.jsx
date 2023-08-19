import { IncidentTypeCheckbox } from "./IncidentTypeCheckbox";
import { ChatTextArea } from "./ChatTextArea";
import { ChatInput } from "./ChatInput";
import { Message } from "./Message";
import { useEffect, useRef, useState } from "react";
import { getQuestions, getIncidentTypes, postMyIncident } from "../../../services/incident";
import { getUser } from "../../../services/user";
import { ChatAlternatives } from "./ChatAlternatives";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const attendants = [
    {
        name: "Laura",
        urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948021994094703/Mask_group_16.png"
    },
    {
        name: "Clarice",
        urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948022661001339/Mask_group_14.png"
    },
    {
        name: "Roberta",
        urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948022338048150/Mask_group_15.png"
    },
    {
        name: "Míriam",
        urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948021595656273/Mask_group_17.png"
    },
    {
        name: "Antônio",
        urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948023017504931/Mask_group_13.png"
    }
];

let attendantNumber = Math.floor(Math.random() * 5);
let attendant = attendants[attendantNumber];

const AnswerModel = props => {
    const { avatar, setIncident, incident, question } = props;

    switch (question?.tipoResposta) {
        case "ALTERNATIVA":
            return (
                <ChatAlternatives
                    avatar={avatar}
                    alternatives={question?.respostas}
                    onChoice={answer => setIncident({
                        ...incident,
                        perguntas: [
                            ...incident?.perguntas,
                            {
                                idPergunta: question?.idPergunta,
                                ordem: question?.ordem,
                                tipoResposta: question?.tipoResposta,
                                respostas: [{
                                    idResposta: answer?.idResposta,
                                    descricao: answer?.descricao,
                                }]
                            }
                        ]
                    })}
                />
            );
        case "DISSERTATIVA":
            return (
                <ChatTextArea
                    avatar={avatar}
                    maxLength={255}
                    onConfirm={answer => setIncident({
                        ...incident,
                        perguntas: [
                            ...incident?.perguntas,
                            {
                                idPergunta: question?.idPergunta,
                                ordem: question?.ordem,
                                tipoResposta: question?.tipoResposta,
                                respostas: [{
                                    textoResposta: answer
                                }]
                            }
                        ]
                    })}
                />
            );
    }
}

export function Chat() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [incident, setIncident] = useState({
        assunto: "",
        tipos: [],
        perguntas: []
    });
    const [questions, setQuestions] = useState([]);
    const [incidentTypes, setIncidentTypes] = useState([]);
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState({});

    const localGetQuestions = async () => {
        let response = await getQuestions();
        setQuestions(response.data);
    }

    const localGetIncidentTypes = async () => {
        let response = await getIncidentTypes();
        setIncidentTypes(response.data);
    }

    const localGetUser = async () => {
        let response = await getUser();
        setUser(response.data);
    }

    const localPostMyIncident = async () => {
        await postMyIncident({...incident});
    }

    useEffect(() => {
        localGetQuestions();
        localGetIncidentTypes();
        localGetUser();
    }, []);

    useEffect(() => {
        setMessages([
            <Message
                text={`Olá! Bem-vindo(a) à Coordenadoria Técnico-Pedagógica (CTP). Sou ${attendant.name}, e estou aqui para ajudá-lo(a) a criar um incidente.`}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
                name={attendant?.name}
            />,
            <Message
                text={"Antes de mais nada, me diga em poucas palavras sobre o que você quer falar hoje."}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
                name={attendant?.name}
            />,
            <ChatInput
                avatar={user?.urlAvatar}
                maxLength={50}
                minLength={15}
                onConfirm={subject => setIncident({ ...incident, assunto: subject })}
            />
        ]);
    }, [incidentTypes]);

    useEffect(() => {
        setMessages([
            ...messages,
            <Message
                text={incident?.assunto}
                date={new Date()}
                person="Aluno"
                avatar={user?.urlAvatar}
                name={user?.nome}
            />,
            <Message
                text={"Anotado! E em quais dos seguintes tipos você acha que esse assunto mais se encaixa?"}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
                name={attendant?.name}
            />,
            <IncidentTypeCheckbox
                list={incidentTypes}
                avatar={attendant?.urlAvatar}
                onConfirm={types => setIncident({ ...incident, tipos: types })}
            />
        ]);
    }, [incident?.assunto]);

    useEffect(() => {
        setMessages([
            ...messages,
            <Message
                text={incident?.tipos.map(type => type?.tipo).join(", ")}
                date={new Date()}
                person="Aluno"
                avatar={user?.urlAvatar}
                name={user?.nome}
            />,
            <Message
                text={"Entendi. Tenho algumas outras perguntas pra você, tudo bem? Vamos lá!"}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
                name={attendant?.name}
            />,
            <Message
                text={questions[0]?.descricao}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
                name={attendant?.name}
            />,
            <AnswerModel
                avatar={user?.urlAvatar}
                question={questions[0]}
                incident={incident}
                setIncident={setIncident}
            />
        ]);
    }, [incident?.tipos]);

    useEffect(() => {
        let lastQuestion = incident?.perguntas[incident?.perguntas?.length - 1];
        let nextQuestion = questions.filter(question => question?.ordem > lastQuestion?.ordem)[0];

        if (nextQuestion != undefined) {
            setMessages([
                ...messages,
                <Message
                    text={
                        lastQuestion?.tipoResposta == "ALTERNATIVA"
                            ? lastQuestion?.respostas.map(answer => answer?.descricao).join(", ")
                            : lastQuestion?.respostas.map(answer => answer?.textoResposta).join(", ")
                    }
                    date={new Date()}
                    person="Aluno"
                    avatar={user?.urlAvatar}
                    name={user?.nome}
                />,
                <Message
                    text={nextQuestion?.descricao}
                    date={new Date()}
                    person="CTP"
                    avatar={attendant?.urlAvatar}
                    name={attendant?.name}
                />,
                <AnswerModel
                    avatar={user?.urlAvatar}
                    question={nextQuestion}
                    incident={incident}
                    setIncident={setIncident}
                />
            ]);
        } else {
            setMessages([
                ...messages,
                <Message
                    text={
                        lastQuestion?.tipoResposta == "ALTERNATIVA"
                            ? lastQuestion?.respostas.map(answer => answer?.descricao).join(", ")
                            : lastQuestion?.respostas.map(answer => answer?.textoResposta).join(", ")
                    }
                    date={new Date()}
                    person="Aluno"
                    avatar={user?.urlAvatar}
                    name={user?.nome}
                />,
                <Message
                    text={"Ufa! As perguntas, por agora, acabaram. Agradeço muito por ter tido paciência de chegar até aqui. Em breve, algum técnico da CTP entrará em contato contigo, tudo bem?"}
                    date={new Date()}
                    person="CTP"
                    avatar={attendant?.urlAvatar}
                    name={attendant?.name}
                />,
                <Message
                    text={"Ah, quase ia me esquecendo! Você pode consultar este incidente depois que ele for criado na tela de \"Meus Incidentes\". Não se preocupe, ela será automaticamente exibida assim que terminarmos por aqui."}
                    date={new Date()}
                    person="CTP"
                    avatar={attendant?.urlAvatar}
                    name={attendant?.name}
                />,
                <Message
                    text={"Por fim, para finalizar a criação do incidente, basta clicar no botão abaixo. Foi um prazer te atender, " + (user?.nome || "").split(" ")[0] + ". Até mais!"}
                    date={new Date()}
                    person="CTP"
                    avatar={attendant?.urlAvatar}
                    name={attendant?.name}
                />,
                <GnButton
                    onClick={async () => {
                        await localPostMyIncident();
                        navigate("/incidente");
                    }}
                >{t("createIncident")}</GnButton>
            ]);
        }

    }, [incident?.perguntas]);

    return (
        <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-full max-h-[550px] m-auto overflow-y-scroll">
            {...messages}
        </div>
    )
}