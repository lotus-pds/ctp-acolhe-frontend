import {
    Button
} from "@material-tailwind/react";

const getColor = color => {
    switch (color) {
        case 'RED':
            return 'red';
        case 'BLUE':
            return 'blue';
        case 'GREEN':
            return 'green';
        case 'PURPLE':
            return 'purple';
        case 'GRAY':
            return 'gray';
        case 'YELLOW':
            return 'yellow'
        case 'NONE':
            return undefined;
        default:
            return color;
    }
}

const getClassName = color => {
    switch (color) {
        case 'RED':
            return ' bg-gradient-to-r from-red-200 to-red-300';
        case 'BLUE':
            return ' bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-400 dark:to-blue-700';
        case 'GREEN':
            return ' bg-gradient-to-r from-green-200 to-green-300';
        case 'PURPLE':
            return ' bg-gradient-to-r from-purple-100 to-purple-300 dark:from-purple-400 dark:to-purple-500';
        case 'GRAY':
            return ' bg-gradient-to-r from-gray-500  to-gray-700 dark:from-gray-200 dark:to-gray-400 dark:text-gray-900';
        case 'YELLOW':
            return ' bg-gradient-to-r from-yellow-100 to-yellow-200 text-white'
        case 'NONE':
            return ' bg-transparent shadow-transparent hover:shadow-transparent';
    }
}

export function GnButton(props) {
    const { id, color, size, variant, disabled, onClick, className, children } = props;

    return (
        <Button
            id={id}
            color={getColor(color)}
            size={size}
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            className={(className || '') + (getClassName(color) || '')}
            children={children}
        />
    )
}