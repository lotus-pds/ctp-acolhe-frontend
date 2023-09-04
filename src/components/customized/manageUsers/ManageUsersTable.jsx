import { Select, Typography } from "antd";
import { Card } from "@material-tailwind/react";
import { ROLES } from "../../../common/constants";
import { GnButton } from "../../common/button/GnButton";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { patchUserRole } from "../../../services/user";
import { getStorage } from "../../../services/config";
import { useTranslation } from "react-i18next";

const roles = ROLES();

export function ManageUsersTable(props) {
    const { users, localGetUsers } = props;

    const [editUser, setEditUser] = useState({});

    const updateUserRoles = async () => {
        await patchUserRole(editUser.id, editUser.roles.map(role => ({ idPerfil: role })));
        localGetUsers();
    }

    const { t } = useTranslation()

    const TABLE_HEAD = [t("name"), t("email"), t("registration"), t("roles"), ""];

    return (
        <Card className="h-full w-[90%] mb-6 dark:bg-gray-800 rounded-lg">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
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
                    {users.map(user => {
                        const classes = "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={user.name}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {user.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {user.email}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {user.registration}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Select
                                        className="w-full"
                                        mode="multiple"
                                        onChange={e => {
                                            if(!e.includes("CTP")) {
                                                setEditUser({ ...editUser, roles: e });
                                            }
                                        }}
                                        options={roles}
                                        value={user.id != editUser.id ? user.roles : editUser.roles}
                                        allowClear={true}
                                        disabled={user.id != editUser.id}
                                    />
                                </td>
                                <td className={classes}>
                                    <div className="flex flex-row gap-4 w-[65px] justify-center m-auto">
                                        {user.id != editUser.id
                                            ? <GnButton
                                                color="BLUE"
                                                className="w-1 h-12 rounded-full text-center grid items-center justify-center"
                                                disabled={(Object.keys(editUser).length > 0) || (getStorage("rolesCtpAcolhe").includes("CTP") ? false : true)}
                                                onClick={() => {
                                                    setEditUser({ ...user });
                                                }}
                                            >
                                                <PencilIcon className="w-4"></PencilIcon>
                                            </GnButton>
                                            : <>
                                                <GnButton
                                                    color="RED"
                                                    className="w-1 h-12 rounded-full text-center grid items-center justify-center"
                                                    onClick={() => { setEditUser({}) }}
                                                >
                                                    <XMarkIcon className="w-5"></XMarkIcon>
                                                </GnButton>
                                                <GnButton
                                                    color="GREEN"
                                                    className="w-1 h-12 rounded-full text-center grid items-center justify-center"
                                                    disabled={editUser.roles.length == 0}
                                                    onClick={() => {
                                                        updateUserRoles();
                                                        setEditUser({});
                                                    }}
                                                >
                                                    <CheckIcon className="w-5"></CheckIcon>
                                                </GnButton>
                                            </>
                                        }
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}