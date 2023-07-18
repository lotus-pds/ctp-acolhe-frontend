import { CommonInput } from "./CommonInput";
import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function InfoInput(props) {
    const { info } = props;

    const intercalate = (array, item) => {
        const newArray = [];

        array.forEach((value, index) => {
            newArray.push(value);
            if (index < array.length) {
                newArray.push(item);
            }
        });

        return newArray;
    }

    const text = intercalate(info.text, <br/>);

    return (
        <CommonInput
            {...props}
            icon={
                <Tooltip content={
                    <div className="w-70">
                        <Typography color="white" className="font-medium">{info.title}</Typography>
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                            children={text}
                        />
                    </div>
                }>
                    <InformationCircleIcon
                        strokeWidth={2}
                        className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer ml-[-8px]"
                    />
                </Tooltip>
            }
        />
    )
}