import {
    Select,
    Option
} from "@material-tailwind/react";

export function Select(props) {
    const { label, color = 'gray', value, onChange, success, disable = false, options } = props;

    let children = options.map(option => <Option value={option.value}>{option.label}</Option>)

    return (
        <Select
            label={label}
            color={color}
            value={value}
            onChange={onChange}
            success={success}
            disable={disable}
            className="text-gray-900 dark:text-gray-200"
        >
            <Option value="MATUTINO">{t("morning")}</Option>
            <Option value="VESPERTINO">{t("afternoon")}</Option>
            <Option value="NOTURNO">{t("night")}</Option>
        </Select>
    )
}