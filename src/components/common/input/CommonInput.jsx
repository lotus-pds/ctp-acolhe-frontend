import {
    Input
} from "@material-tailwind/react";

export function CommonInput(props) {
    const { label, color = 'gray', value, onChange, success, error, disabled, size, required, type, icon } = props;

    return (
        <Input
            label={label}
            color={color}
            value={value}
            onChange={onChange}
            success={success}
            error={error}
            disabled={disabled}
            className="text-gray-900 dark:text-gray-200 disabled:dark:bg-gray-900 disabled:dark:text-gray-400 flex items-center"
            size={size}
            required={required}
            type={type}
            icon={icon}
        />
    )
}