import { useEffect, useState } from "react";
import { HeaderTae } from "../components/HeaderTae";
import { getUsers } from "../services/user";
import { Select, Typography } from "antd";
import { ROLES } from "../common/constants";
import { Card, CardBody } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { ManageUsersTable } from "../components/customized/manageUsers/ManageUsersTable";

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

    console.log(users);

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
                            Estes são os incidentes dos alunos.
                        </Typography>
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