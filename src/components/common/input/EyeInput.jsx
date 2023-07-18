import { Button } from "@material-tailwind/react";
import { CommonInput } from "./CommonInput";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function EyeInput(props) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <CommonInput
            {...props}
            type={showPassword ? "text" : "password"}
            icon={
                <Button size="sm" variant="text" className="ml-[-12px] absolute rounded hover:bg-gray-200 dark:hover:bg-gray-900 active:bg-gray-200"
                    onClick={() => setShowPassword(!showPassword)}

                >
                    {showPassword ?
                        <EyeIcon
                            strokeWidth={2}
                            className="text-gray-800 dark:text-gray-200 w-5 h-5"
                        /> :
                        <EyeSlashIcon
                            strokeWidth={2}
                            className="text-gray-800 dark:text-gray-200 w-5 h-5"
                        />
                    }
                </Button>
            }
        />
    )
}