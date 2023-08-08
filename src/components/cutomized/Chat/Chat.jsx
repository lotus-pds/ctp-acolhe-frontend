import {
    Avatar,
    Typography
} from "@material-tailwind/react";
import { IncidentTypeCheckbox } from "./IncidentTypeCheckbox";
import { GnButton } from "../../common/button/GnButton";
import { Message } from "./Message";
import { useEffect, useState } from "react";
import { getQuestions, getIncidentTypes } from "../../../services/incident";

const attendants = [
    {
        name: "Laura",
        urlAvatar: ""
    },
    {
        name: "Clarice",
        urlAvatar: ""
    },
    {
        name: "Roberta",
        urlAvatar: ""
    },
    {
        name: "Marisa",
        urlAvatar: ""
    }
];

let attendantNumber = Math.floor(Math.random() * 4);
let attendant = attendants[attendantNumber];

export function Chat() {
    const [incident, setIncident] = useState({});
    const [questions, setQuestions] = useState([]);
    const [incidentTypes, setIncidentTypes] = useState([]);
    const [messages, setMessages] = useState([]);

    const localGetQuestions = async () => {
        let response = await getQuestions();
        setQuestions(response.data);
    }

    const localGetIncidentTypes = async () => {
        let response = await getIncidentTypes();
        setIncidentTypes(response.data);
    }

    useEffect(() => {
        localGetQuestions();
        localGetIncidentTypes();
    }, []);

    useEffect(() => {
        setMessages([
            <Message
                text={`Olá! Bem-vindo(a) à Coordenadoria Técnico-Pedagógica (CTP). Sou a ${attendant.name}, e estou aqui para ajudá-lo(a) a criar um incidente.`}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
            />,
            <Message
                text={"Antes de mais nada, sobre o que você quer falar hoje?"}
                date={new Date()}
                person="CTP"
                avatar={attendant?.urlAvatar}
            />,
            <IncidentTypeCheckbox
                list={incidentTypes.map(i => ({ id: i?.idTipoIncidente, label: i?.tipo }))}
                avatar={attendant?.urlAvatar}
                onConfirm={types => setIncident({ ...incident, tipos: types })}
            />
        ]);
    }, [incidentTypes]);

    return (
        <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-full max-h-[550px] m-auto overflow-y-scroll">
            {...messages}
        </div>
    )
}