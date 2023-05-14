import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody
} from "@material-tailwind/react";

export const Loading = (props) => {
    const { open } = props;
    return (
        <Dialog
            open={open}
            size="xs"
            className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
        >
            <DialogHeader>
                <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-purple-200  to-purple-300
                    font-mouse text-3xl
                ">
                    Carregando...
                </h4>
            </DialogHeader>
            <DialogBody>
                Eita como carrega
            </DialogBody>
        </Dialog>
    );
}