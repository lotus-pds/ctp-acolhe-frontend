import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";

export const ErrorPopup = (props) => {
    const {error, setError} = props;
    return (
        <Dialog
            open={error.visible}
            size="sm"
            className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dar:text-gray-200"
        >
            <DialogHeader>
                <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-red-200  to-red-300
                    font-mouse text-3xl
                "> 
                    Erro
                </h4>
            </DialogHeader>
            <DialogBody>
                {error.message}
            </DialogBody>
            <DialogFooter>
            <Button
                className="bg-gradient-to-r from-red-200  to-red-300"
                color="red"
                onClick={() => {setError({visible: false, message: ''})}}
            >
                <span>OK</span>
            </Button>
            </DialogFooter>
        </Dialog>
    );
}