import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";

export const ErrorPopup = (props) => {
    const {state, setState} = props;
    return (
        <Dialog
            open={state.visible}
            size="sm"
        >
            <DialogHeader>
                <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-red-100  to-red-300
                    font-mouse text-3xl
                "> 
                    Erro
                </h4>
            </DialogHeader>
            <DialogBody>
                {state.message}
            </DialogBody>
            <DialogFooter>
            <Button
                className="bg-gradient-to-r from-red-500  to-red-700"
                onClick={() => {setState({visible: false, message: ''})}}
            >
                <span>OK</span>
            </Button>
            </DialogFooter>
        </Dialog>
    );
}