import { useEffect, useState } from "react";
import { HeaderTae } from "../components/HeaderTae";
import { getUsers } from "../services/user";
import { Typography } from "antd";
import { Card, CardBody } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { ManageUsersTable } from "../components/customized/manageUsers/ManageUsersTable";
import { CommonInput } from "../components/common/input/CommonInput";
import { GnButton } from "../components/common/button/GnButton";

export function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({});

    const localGetUsers = async () => {
        let response = await getUsers(filters);
        setUsers(response.data);
    }

    useEffect(() => {
        localGetUsers();
    }, []);

    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center">
            <HeaderTae />
            <Card className="h-full w-[90%] mt-8 mb-6 dark:bg-gray-800">
                <CardBody floated={false} >
                    <div className="mb-4">
                        <Typography variant="h2" color="blue-gray" className="dark:text-gray-200 font-normal font-mouse sm:text-4xl text-2xl">
                            {t("tooltipTae.manageUsers")}
                        </Typography>
                        <Typography color="gray" className="mt-2 mb-8 dark:text-gray-200 font-normal sm:text-md text-md">
                            {t("manageUsers")}
                        </Typography>
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <CommonInput
                            label={t("name")}
                            value={filters.nome}
                            onChange={e => {
                                if (e.target.value.length <= 100) {
                                    setFilters({ ...filters, nome: e.target.value });
                                }
                            }}
                        />
                        <CommonInput
                            label={t("email")}
                            value={filters.email}
                            onChange={e => {
                                if (e.target.value.length <= 64) {
                                    setFilters({ ...filters, email: e.target.value });
                                }
                            }}
                        />
                        <CommonInput
                            label={t("registration")}
                            value={filters.prontuario}
                            onChange={e => {
                                if (e.target.value.length <= 10) {
                                    setFilters({ ...filters, prontuario: e.target.value });
                                }
                            }}
                        />
                        <GnButton
                            color="BLUE"
                            className="w-[25%]"
                            onClick={localGetUsers}
                        >
                            {t("search")}
                        </GnButton>
                    </div>
                </CardBody>
            </Card>
            <ManageUsersTable
                users={users.map(user => ({
                    id: user.idUsuario,
                    name: user.nome,
                    email: user.email,
                    registration: user.prontuario,
                    roles: user.perfis.map(p => p.idPerfil)
                }))}
                localGetUsers={localGetUsers}
            />
        </div>
    )
}