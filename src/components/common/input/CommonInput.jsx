import {
    Input
} from "@material-tailwind/react";
import { useTheme } from "../../../hooks/useTheme";

export function CommonInput(props) {
    
    const {theme} = useTheme()

    const { label, color, value, onChange, success, error, disabled, size, required, type, icon, className } = props;
   
    return (
        <Input
            label={label}
            color={color || theme === "dark" ? "white" : "gray"}
            value={value}
            onChange={onChange}
            success={success}
            error={error}
            disabled={disabled}
            className={"text-gray-900 dark:text-gray-200 disabled:dark:bg-gray-900 disabled:dark:text-gray-400 flex items-center " + (className || '')}
            size={size}
            required={required}
            type={type}
            icon={icon}
        />
    )
}