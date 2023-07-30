import {
    Select,
    Option
} from "@material-tailwind/react";

export function SelectOptions(props) {
    const { label, color = 'gray', value, onChange, success, error, disabled, options = [] } = props;

    let children = options.map(option => <Option value={option.value}>{option.label}</Option>);

    return (
        <Select
            label={label}
            color={color}
            value={value}
            onChange={onChange}
            success={success}
            error={error}
            disabled={disabled}
            className="text-gray-900 dark:text-gray-200 disabled:dark:bg-gray-900 disabled:dark:text-gray-400"
            children={children}
        />
    )
}