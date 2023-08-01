import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Assunto", "Data", "Status", "Tipos", ""];

const TABLE_ROWS = [
    {
        name: "Conflito com professor",
        date: "01/06/2023",
        types: ["Conflito"],
        status: "finalizado"
    },
    {
        name: "Organizar melhor o meu tempo",
        date: "24/02/2023",
        types: ["Acolhimento psicológico voltado ao meio educacional/institucional"],
        status: "pendente"
    },
    {
        name: "Problema com o Gossip",
        date: "03/12/2022",
        types: ["Bullying", "Cyberbullying", "Conflito"],
        status: "em processo"
    },
    {
        name: "Como melhorar minhas notas",
        date: "29/11/2022",
        types: ["Organização escolar"],
        status: "finalizado"
    },
    {
        name: "Bullying",
        date: "18/10/2022",
        types: ["Bullying", "Cyberbullying", "Conflito", "Acolhimento psicológico voltado ao meio educacional/institucional"],
        status: "cancelado"
    },
];

const getIncidentTypes = incidentTypes => {
    let types;
    if(incidentTypes.join(", ").length > 50) {
        types = incidentTypes.join(", ").slice(0, 50) + "...";
    } else {
        types = incidentTypes.join(", ");
    }

    return types;
}

const ChipStatus = props => {
    const { status } = props;
    let color = "";
    let className = "text-white bg-gradient-to-r";

    switch (status) {
        case "finalizado":
            color = "green";
            className += " from-green-200 to-green-300";
            break;
        case "pendente":
            color = "yellow";
            className += " from-yellow-100 to-yellow-200";
            break;
        case "cancelado":
            color = "red";
            className += " from-red-200 to-red-300";
            break;
        default:
            color = "blue";
            className += " from-blue-100 to-blue-200 dark:from-blue-400 dark:to-blue-700'"
    }

    return (<Chip
        size="sm"
        variant="ghost"
        value={status}
        color={color}
        className={className}
    />);
}

export function IncidentTable(props) {
    return (
        <Card className="h-full w-[90%] my-8 rounded">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Meus incidentes
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Estes são seus incidentes criados.
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ name, date, types, status }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <ChipStatus
                                                    status={status}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {getIncidentTypes(types)}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text" color="purple">
                                                    <MagnifyingGlassIcon className="h-4 w-4 " />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" color="blue-gray" size="sm">
                    Anterior
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" color="blue-gray" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" color="blue-gray" size="sm">
                    Próximo
                </Button>
            </CardFooter>
        </Card>
    );
}