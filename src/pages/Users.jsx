import { useEffect, useState } from "react";
import { HeaderTae } from "../components/HeaderTae";
import { getUsers } from "../services/user";
import { Select } from "antd";

export function Users() {
    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({});

    const localGetUsers = async () => {
        let response = await getUsers(filters);
        setUsers(response.data);
    }

    useEffect(() => {
        localGetUsers();
    }, []);

    return (
        <>
            <HeaderTae />
            {users.map(user => (
                <div className="mb-10 ml-2">
                    <p>{user.nome}</p>
                    <p>{user.email}</p>
                    <p>{user.prontuario}</p>
                    <Select
                        mode="multiple"
                    />
                </div>
            ))}
        </>
    )
}