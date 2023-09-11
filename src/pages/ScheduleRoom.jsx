import { HeaderTae } from "../components/HeaderTae";
import { useState, useEffect } from "react";
import { SchedulingCalendar } from "../components/customized/scheduling/SchedulingCalendar";
import { getSchedulings } from "../services/scheduling";
import { convertDateHyphen } from "../common/general";

export function ScheduleRoom(props) {
    const { path } = props;

    const [schedulings, setSchedulings] = useState([]);
    const [time, setTime] = useState({});

    const localGetSchedulings = async (year, month) => {
        let initialDate = new Date(year, month - 1, 15);
        let finalDate = new Date(year, month + 1, 15);

        let response = await getSchedulings({
            dataAtendimentoInicial: convertDateHyphen(initialDate),
            dataAtendimentoFinal: convertDateHyphen(finalDate)
        });

        setSchedulings(response.data);
        setTime({ year, month });
    }

    useEffect(() => {
        localGetSchedulings(new Date().getFullYear(), new Date().getMonth());
    }, []);

    return (
        <div className="flex flex-col items-center">
            <HeaderTae path={path} />
            <SchedulingCalendar
                schedulings={schedulings}
                localGetSchedulings={localGetSchedulings}
                time={time}
            />
        </div>
    );
}