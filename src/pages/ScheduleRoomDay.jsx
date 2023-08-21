import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertDateBars, convertDateHyphen } from "../common/general";
import { HeaderTae } from "../components/HeaderTae";
import { GnButton } from "../components/common/button/GnButton";
import { WarningPopup } from "../components/common/popup/WarningPopup";
import { SchedulingPopup } from "../components/customized/scheduling/SchedulingPopup";
import { SchedulingTable } from "../components/customized/scheduling/SchedulingTable";
import { deleteScheduling, getSchedulings, postScheduling, putScheduling } from "../services/scheduling";

export function ScheduleRoomDay(props) {
    const { date } = useParams();
    const localDate = new Date(date.replace(/-/g, '\/'));

    const [schedulings, setSchedulings] = useState([]);
    const [scheduling, setScheduling] = useState({});
    const [popup, setPopup] = useState({ open: false, operation: "" });
    const [warningOpen, setWarningOpen] = useState(false);

    const localGetSchedulings = async () => {
        let response = await getSchedulings({
            dataAtendimentoInicial: convertDateHyphen(localDate),
            dataAtendimentoFinal: convertDateHyphen(localDate)
        });

        setSchedulings(response.data);
    }

    const localPostSchedulings = async (body) => {
        await postScheduling(body);
        await localGetSchedulings();
    }

    const localPutSchedulings = async (id, body) => {
        await putScheduling(id, body);
        await localGetSchedulings();
    }

    const localDeleteSchedulings = async (id) => {
        await deleteScheduling(id);
        await localGetSchedulings();
    }

    useEffect(() => {
        localGetSchedulings();
    }, []);

    return (
        <>
            <HeaderTae />
            <GnButton
                color="GREEN"
                className="p-2 m-3 mb-10"
                onClick={() => {
                    setPopup({ open: true, operation: "CREATE" });
                }}
            >
                <PlusIcon className="w-5 h-5" />
            </GnButton>

            <SchedulingTable
                dateScheduling={convertDateBars(localDate)}
                schedulings={schedulings}
                setScheduling={setScheduling}
            />

            <SchedulingPopup
                open={popup.open}
                operation={popup.operation}
                scheduling={scheduling}
                handleOpen={() => {
                    setPopup({ open: false, operation: "" });
                    setScheduling({});
                }}
                localPostSchedulings={localPostSchedulings}
                localPutSchedulings={localPutSchedulings}
            />

            <WarningPopup
                open={warningOpen}

                handleOpen={() => {
                    setWarningOpen(!warningOpen);
                    setScheduling({});
                }}

                onConfirm={() => {
                    localDeleteSchedulings(scheduling?.idAgendamento);
                    setWarningOpen(!open);
                }}
            />
        </>
    );
}