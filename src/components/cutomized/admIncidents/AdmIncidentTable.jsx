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
import { CardIncident } from "../../common/cardIncident/CardIncident";

const TABLE_HEAD = ["Aluno", "Prontuário", "Assunto", "Data", "Status", ""];

export function AdmIncidentTable(props) {
    const { incidents = [], totalAmount, search, incidentTypes, filters, setFilters } = props;

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
    
    console.log(totalAmount)

    return (
        <>
            <Card className="h-full w-[90%] mt-8 mb-6">
                <CardBody floated={false} >
                    <div className="mb-4">
                        <Typography variant="h2" color="blue-gray" className="font-mouse sm:text-4xl text-2xl">
                            Lista de incidentes
                        </Typography>
                        <Typography color="gray" className="mt-2 mb-8 font-normal sm:text-md text-md">
                            Estes são os incidentes dos alunos.
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
                </CardBody>
            </Card>
            <Card className="h-full w-[90%] mb-8">
                <CardBody className="px-0">
                    <Typography variant="h4" color="blue-gray" className="ml-5 mb-5">
                        {totalAmount} incidente(s) encontrado(s)
                    </Typography>
                    {incidents.map(
                        (incident) => (
                            <CardIncident
                                incident={incident}
                                onClick={() => navigate(`/adm/incident/${incident?.idIncidente}`)}
                            />
                        )
                    )}
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
        </>
    );
}