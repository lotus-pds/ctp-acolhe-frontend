import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { DatePicker, Input, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GnButton } from "../../common/button/GnButton";
import { CardIncident } from "../../common/cardIncident/CardIncident";
import { INCIDENT_STATUS, PERIOD_TYPES, COURSE_TYPES } from "../../../common/constants";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';
import localePt from 'antd/es/date-picker/locale/pt_BR';
import localeEn from 'antd/es/date-picker/locale/en_US';

export function AdmIncidentTable(props) {
    const { incidents = [], totalAmount, search, incidentTypes, filters, setFilters } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const incidentStatus = INCIDENT_STATUS();
    const periodTypes = PERIOD_TYPES();
    const courseTypes = COURSE_TYPES();

    const language = localStorage.getItem("i18nextLng");

    return (
        <>
            <Card className="h-full w-[90%] mt-8 mb-6 dark:bg-gray-800">
                <CardBody floated={false} >
                    <div className="mb-4">
                        <Typography variant="h2" color="blue-gray" className="dark:text-gray-200 font-normal font-mouse sm:text-4xl text-2xl">
                            Lista de incidentes
                        </Typography>
                        <Typography color="gray" className="mt-2 mb-8 dark:text-gray-200 font-normal sm:text-md text-md">
                            Estes são os incidentes dos alunos.
                        </Typography>
                        <div className="flex justify-around flex-row w-full gap-2 mt-2" >
                            <Input
                                placeholder={t("subject")}
                                className="w-[50%]"
                                onChange={e => setFilters({ ...filters, assunto: e.target.value })}
                                allowClear={true}
                                value={filters.assunto}
                            />
                            <Input
                                placeholder={t("name")}
                                className="w-[50%]"
                                size="large"
                                onChange={e => setFilters({ ...filters, nome: e.target.value })}
                                value={filters.nome}
                                allowClear={true}
                            />
                        </div>
                        <div className="flex justify-around flex-row w-full gap-2 mt-2" >
                            <Select
                                placeholder={t("types")}
                                className="w-[100%]"
                                size="large"
                                mode="multiple"
                                onChange={(value, option) => setFilters({ ...filters, idTipoIncidente: (value.length > 0 ? value : undefined) })}
                                options={incidentTypes.map(t => ({ label: t.tipo, value: t.idTipoIncidente }))}
                                value={filters.idTipoIncidente}
                                allowClear={true}
                            />
                        </div>
                        <div className="flex justify-around flex-row w-full gap-2 mt-2" >
                            <Input
                                placeholder={t("email")}
                                className="w-[25%]"
                                size="large"
                                onChange={e => setFilters({ ...filters, email: e.target.value })}
                                value={filters.email}
                                allowClear={true}
                            />
                            <Input
                                placeholder={t("registration")}
                                className="w-[25%]"
                                size="large"
                                onChange={e => setFilters({ ...filters, prontuario: e.target.value })}
                                value={filters.prontuario}
                                allowClear={true}
                            />
                            <Input
                                placeholder={t("class")}
                                className="w-[25%]"
                                size="large"
                                onChange={e => setFilters({ ...filters, turma: e.target.value })}
                                value={filters.turma}
                                allowClear={true}
                            />
                            <Input
                                placeholder={t("course")}
                                className="w-[25%]"
                                size="large"
                                onChange={e => setFilters({ ...filters, nomeCurso: e.target.value })}
                                value={filters.nomeCurso}
                                allowClear={true}
                            />
                        </div>
                        <div className="flex justify-around flex-row w-full gap-2 mt-2" >
                            <Select
                                placeholder="Status"
                                className="w-[33.4%]"
                                size="large"
                                onChange={(value, option) => setFilters({ ...filters, idStatus: value })}
                                options={incidentStatus}
                                value={filters.idStatus}
                                allowClear={true}
                            />
                            <DatePicker
                                placeholder={t("startDate")}
                                className="w-[33.3%]"
                                onChange={date => setFilters({ ...filters, dataIncidenteInicial: date.format("YYYY-MM-DD") })}
                                value={filters.dataInicio != undefined ? dayjs(filters.dataInicio) : undefined}
                                format="DD/MM/YYYY"
                                allowClear={true}
                                locale={language == "pt" ? localePt : localeEn}
                            />
                            <DatePicker
                                placeholder={t("endDate")}
                                className="w-[33.3%]"
                                onChange={date => setFilters({ ...filters, dataIncidenteInicial: date.format("YYYY-MM-DD") })}
                                value={filters.dataFinal != undefined ? dayjs(filters.dataFinal) : undefined}
                                format="DD/MM/YYYY"
                                allowClear={true}
                                locale={language == "pt" ? localePt : localeEn}
                            />
                        </div>
                        <div className="flex justify-around flex-row w-full gap-2 mt-2" >
                            <Select
                                placeholder={t("period")}
                                className="w-[40%]"
                                size="large"
                                mode="multiple"
                                onChange={(value, option) => setFilters({ ...filters, periodo: (value.length > 0 ? value : undefined) })}
                                options={periodTypes}
                                value={filters.periodo}
                                allowClear={true}
                            />
                            <Select
                                placeholder={t("courseType")}
                                className="w-[35%]"
                                size="large"
                                onChange={(value, option) => setFilters({ ...filters, tipoCurso: value })}
                                options={courseTypes}
                                value={filters.tipoCurso}
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
            <Card className="h-full w-[90%] mb-8 dark:bg-gray-800">
                <CardBody className="px-0">
                    <Typography variant="h4" color="blue-gray" className="ml-5 dark:text-gray-200 mb-5">
                        {totalAmount} incidente(s) encontrado(s)
                    </Typography>
                    {incidents.map(
                        (incident) => (
                            <CardIncident
                                incident={incident}
                                onClick={() => navigate(`/adm/incidente/${incident?.idIncidente}`)}
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