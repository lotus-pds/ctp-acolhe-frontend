import { IncidentTypeCheckbox } from "./IncidentTypeCheckbox";
import { ChatInput } from "./ChatInput";
import { Message } from "./Message";
import { useEffect, useState } from "react";
import { getQuestions, getIncidentTypes } from "../../../services/incident";
import { getUser } from "../../../services/user";

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

let attendantNumber = Math.floor(Math.random() * 4);
let attendant = attendants[attendantNumber];

export function Chat() {
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
                onConfirm={subject => setIncident({...incident, assunto: subject})}
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
        ]);
    }, [incident?.tipos]);

    return (
        <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-full max-h-[550px] m-auto overflow-y-scroll">
            {...messages}
        </div>
    )
}