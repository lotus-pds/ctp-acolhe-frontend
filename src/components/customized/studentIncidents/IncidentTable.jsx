import {
    Card,
    Typography,
    CardBody
} from "@material-tailwind/react";
import { Input, DatePicker, Select } from "antd";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";
import { CardIncident } from "../../common/cardIncident/CardIncident";
import dayjs from "dayjs";

export function IncidentTable(props) {
    const { incidents = [], totalAmount, toggleDetailsOpen, detailIncident, ChipStatus, search, incidentTypes, filters, setFilters } = props;

    const { t } = useTranslation();

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
        <>
            <Card shadow={false} className="h-full w-[90%] mt-8 mb-6 dark:bg-gray-800" >
                <CardBody floated={false} >
                    <div className="mb-4">
                        <Typography variant="h2" color="blue-gray" className="dark:text-gray-200 font-normal font-mouse sm:text-4xl text-2xl">
                            {t("tooltipHeader.myIncident")}
                        </Typography>
                        <Typography color="gray" className="mt-2 mb-8 dark:text-gray-200 font-normal sm:text-md text-md">
                            {t("incidentDescription")}
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
                                onChange={date => setFilters({ ...filters, dataIncidenteInicial: date.format("YYYY-MM-DD") })}
                                value={filters.dataInicio != undefined ? dayjs(filters.dataInicio) : undefined}
                                format="DD/MM/YYYY"
                                allowClear={true}
                            />
                            <DatePicker
                                placeholder={t("endDate")}
                                className="w-[25%]"
                                onChange={date => setFilters({ ...filters, dataIncidenteFinal: date.format("YYYY-MM-DD") })}
                                value={filters.dataFinal != undefined ? dayjs(filters.dataFinal) : undefined}
                                format="DD/MM/YYYY"
                                allowClear={true}
                            />
                            <GnButton
                                color="BLUE"
                                className="w-[25%] flex items-center justify-center"
                                onClick={() => search()}
                            >
                                {t("search")}
                            </GnButton>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="h-full w-[90%] mb-8 dark:bg-gray-800 ">
                <CardBody className="px-0">
                    <Typography variant="h4" color="blue-gray" className="ml-5 dark:text-gray-200 mb-5">
                        {totalAmount} {t("incidentsFound")}
                    </Typography>
                    {incidents.map(
                        (incident) => (
                            <CardIncident
                                incident={incident}
                                onClick={() => {
                                    detailIncident(incident);
                                    toggleDetailsOpen();
                                }}
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