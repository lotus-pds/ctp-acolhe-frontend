import { Typography, Avatar } from "@material-tailwind/react";
import { convertDateBars, getTime } from "../../../common/general";

export function Message(props) {
    const { text, date, avatar, person = "ALUNO" } = props;

    let newDate = convertDateBars(date) + " " + getTime(date);

    if (person == "CTP") {
        return (
            <div className="flex flex-col sm:flex-row gap-4 sm:mr-[236px] sm:mt-12 h-[550px]">
                <Avatar src={avatar} />

                <div className="flex flex-col justify-center">
                    <div className="bg-white dark:bg-gray-900 shadow-lg max-w-[340px] ml-2 rounded-t-[2.5rem] rounded-br-[2.5rem] flex flex-col items-center justify-start pl-5 pt-3 pb-3 pr-4 relative m-auto">
                        <Typography variant="paragraph" className="dark:text-gray-200 flex items-center justify-start w-full max-w-[340px]  font-medium">
                            {text}
                        </Typography>
                        <Typography variant="small" className="dark:text-gray-300 mt-3 flex items-center justify-start w-full max-w-[340px] font-bold ">
                            {newDate}
                        </Typography>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col sm:items-start items-end justify-center sm:flex-row gap-4 sm:ml-[236px]">
                <div className="flex flex-col gap-2 relative ">
                    <div className="bg-blue-400 shadow-xl max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-col items-center justify-center pl-4 pt-3 pb-3 pr-5 relative m-auto">
                        <Typography variant="paragraph" className="text-black flex items-center justify-end w-full max-w-[340px]  font-medium">
                            {text}
                        </Typography>
                        <Typography variant="small" className="text-black mt-3 flex items-center justify-end w-full max-w-[340px] font-bold ">
                            {newDate}
                        </Typography>
                    </div>
                </div>
                <Avatar src={avatar} />
            </div>
        );
    }
}