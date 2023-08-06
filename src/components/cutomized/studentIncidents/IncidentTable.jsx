import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { Input, DatePicker, Select } from "antd";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";
import { convertDateBars, convertDateHyphen } from "../../../common/general";
import { useState } from "react";

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
    let types = incidentTypes.map(t => t.tipo);
    if (types.join(", ").length > 50) {
        types = types.join(", ").slice(0, 50) + "...";
    } else {
        types = types.join(", ");
    }

    return types;
}

export function IncidentTable(props) {
    const { incidents = [], toggleDetailsOpen, detailIncident, ChipStatus, search, incidentTypes } = props;

    const { t } = useTranslation();

    const [filters, setFilters] = useState({});

    const searchIncidents = filters => {
        let innerFilters = filters;

        console.log(innerFilters);

        if (innerFilters.dataIncidenteInicial != undefined) {
            innerFilters.dataIncidenteInicial = convertDateHyphen(innerFilters.dataIncidenteInicial);
        }

        if (innerFilters.dataIncidenteFinal != undefined) {
            innerFilters.dataIncidenteFinal = convertDateHyphen(innerFilters.dataIncidenteFinal);
        }

        search(innerFilters);
    }

    console.log(filters);

    return (
        <Card className="h-full w-[90%] my-8 rounded">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4">

                    <Typography variant="h5" color="blue-gray">
                        Meus incidentes
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Estes são seus incidentes criados.
                    </Typography>
                    <div className="flex justify-center flex-row w-full gap-2 mt-2" >
                        <Select
                            placeholder={t("types")}
                            className="w-full"
                            size="large"
                            mode="multiple"
                            onChange={(value, option) => setFilters({ ...filters, idTipoIncidente: value })}
                            options={incidentTypes.map(t => ({ label: t.tipo, value: t.idTipoIncidente }))}
                            value={filters.idTipoIncidente}
                            allowClear={true}
                        />
                    </div>
                    <div className="flex justify-center flex-row w-full gap-2 mt-2" >
                        <Input
                            placeholder={t("subject")}
                            className="w-[25%]"
                            onChange={e => setFilters({ ...filters, assunto: e.target.value })}
                            allowClear={true}
                            value={filters.assunto}
                        />
                        <DatePicker
                            placeholder={t("startDate")}
                            className="w-[25%]"
                            onChange={(date, string) => setFilters({ ...filters, dataIncidenteInicial: date })}
                            value={filters.dataInicio}
                            format="DD/MM/YYYY"
                            allowClear={true}
                        />
                        <DatePicker
                            placeholder={t("endDate")}
                            className="w-[25%]"
                            onChange={(date, string) => setFilters({ ...filters, dataIncidenteFinal: date })}
                            value={filters.dataFinal}
                            format="DD/MM/YYYY"
                            allowClear={true}
                        />
                        <GnButton
                            color="BLUE"
                            className="w-[25%]"
                            onClick={() => searchIncidents(filters)}
                        >
                            {t("search")}
                        </GnButton>
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
                        {incidents.map(
                            (i, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={i?.idIncidente}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {i?.assunto}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {convertDateBars(new Date(i?.dataIncidente))}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <ChipStatus
                                                    status={i?.status?.idStatus}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {getIncidentTypes(i?.tipos)}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton
                                                    variant="text"
                                                    color="purple"
                                                    onClick={() => {
                                                        detailIncident(i);
                                                        toggleDetailsOpen();
                                                    }}
                                                >
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
            {/* INSERIR QUANDO TIVER PAGINAÇÃO: */}
            {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
            </CardFooter> */}
        </Card >
    );
}