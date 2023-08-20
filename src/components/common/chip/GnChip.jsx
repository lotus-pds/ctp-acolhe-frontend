import { Chip } from "@material-tailwind/react";

export const GnChip = props => {
    const { color, value, size = "sm" } = props;
    let { className = "" } = props;

    className += " border-2 bg-transparent";

    switch (color) {
        case "GREEN":
            className += " border-green-400 text-green-400";
            break;
        case "YELLOW":
            className += " border-yellow-200 text-yellow-200";
            break;
        case "RED":
            className += " border-red-400 text-red-400 dark:border-red-300 dark:text-red-300";
            break;
        case "BLUE":
            className += " border-blue-500 text-blue-500";
            break;
        case "PURPLE":
            className += " border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-500";
            break;
    }

    return <Chip
        size={size}
        value={value}
        className={className}
    />;
}