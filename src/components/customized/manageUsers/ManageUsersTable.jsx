import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Select, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ROLES } from "../../../common/constants";
import { convertDateBars, getTime } from "../../../common/general";
import { getStorage } from "../../../services/config";
import { patchUserRole } from "../../../services/user";
import { GnButton } from "../../common/button/GnButton";

const roles = ROLES();

export function ManageUsersTable(props) {
    const { users, localGetUsers } = props;

    const [editUser, setEditUser] = useState({});

    const updateUserRoles = async () => {
        await patchUserRole(editUser.id, editUser.roles.map(role => ({ idPerfil: role })));
        localGetUsers();
    }

    const { t } = useTranslation()

    const TABLE_HEAD = [t("name"), t("email"), t("registration"), "Data de Cadastro", t("roles"), ""];

    return (
        <table className=" mt-2 w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-y border-blue-gray-100 bg-blue-gray-50 p-4 bg-blue-gray-50/50 dark:bg-gray-900"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70 dark:text-gray-200"
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
                        <tr key={user.name} className="hover:bg-gray-150 dark:hover:bg-gray-850">
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
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {convertDateBars(new Date(user.registrationDateSystem))} {getTime(new Date(user.registrationDateSystem))}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Select
                                    className="w-full"
                                    mode="multiple"
                                    onChange={e => {
                                        if (!e.includes("CTP")) {
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
    );
}