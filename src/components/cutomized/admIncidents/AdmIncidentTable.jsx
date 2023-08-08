import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
    Avatar
} from "@material-tailwind/react";
import { ChipIncidentStatus } from "../gnIncidents/ChipIncidentStatus";
import { Input, DatePicker, Select } from "antd";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";
import { convertDateBars } from "../../../common/general";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Aluno", "Prontuário", "Assunto", "Data", "Status", "Tipos", ""];

const getIncidentTypes = incidentTypes => {
    let types = incidentTypes.map(t => t.tipo);
    if (types.join(", ").length > 50) {
        types = types.join(", ").slice(0, 50) + "...";
    } else {
        types = types.join(", ");
    }

    return types;
}

export function AdmIncidentTable(props) {
    const { incidents = [], search, incidentTypes, filters, setFilters } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const STATUS = [
        {
            label: t("incidentTypes.FIN"),
            value: "FIN"
        },
        {
            label: t("incidentTypes.EPR"),
            value: "EPR"
        },
        {
            label: t("incidentTypes.CAN"),
            value: "CAN"
        },
        {
            label: t("incidentTypes.PEN"),
            value: "PEN"
        }
    ];

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
                        <Input
                            placeholder={t("subject")}
                            className="w-[50%]"
                            onChange={e => setFilters({ ...filters, assunto: e.target.value })}
                            allowClear={true}
                            value={filters.assunto}
                        />
                        <Select
                            placeholder={t("types")}
                            className="w-[50%]"
                            size="large"
                            mode="multiple"
                            onChange={(value, option) => setFilters({ ...filters, idTipoIncidente: value })}
                            options={incidentTypes.map(t => ({ label: t.tipo, value: t.idTipoIncidente }))}
                            value={filters.idTipoIncidente}
                            allowClear={true}
                        />

                    </div>
                    <div className="flex justify-center flex-row w-full gap-2 mt-2" >
                        <Select
                            placeholder="Status"
                            className="w-[25%]"
                            size="large"
                            onChange={(value, option) => setFilters({ ...filters, idStatus: value })}
                            options={STATUS}
                            value={filters.status}
                            allowClear={true}
                        />

                        <DatePicker
                            placeholder={t("startDate")}
                            className="w-[25%]"
                            onChange={(date, string) => setFilters({ ...filters, dataIncidenteInicial: string })}
                            value={filters.dataInicio}
                            format="DD/MM/YYYY"
                            allowClear={true}
                        />
                        <DatePicker
                            placeholder={t("endDate")}
                            className="w-[25%]"
                            onChange={(date, string) => setFilters({ ...filters, dataIncidenteFinal: string })}
                            value={filters.dataFinal}
                            format="DD/MM/YYYY"
                            allowClear={true}
                        />
                        <GnButton
                            color="BLUE"
                            className="w-[25%]"
                            onClick={() => search()}
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
                                const isLast = index === incidents.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={i?.idIncidente}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src={i?.usuarioCopia?.urlAvatar}
                                                    size="md"
                                                />
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {i?.usuarioCopia?.nome}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {i?.usuarioCopia?.prontuario}
                                            </Typography>
                                        </td>
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
                                                <ChipIncidentStatus
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
                                                    onClick={() => navigate(`/adm/incident/${i?.idIncidente}`)}
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