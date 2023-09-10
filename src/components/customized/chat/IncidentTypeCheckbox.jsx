import {
    Checkbox,
    Card,
    Typography,
    Avatar
} from "@material-tailwind/react";
import { GnButton } from "../../common/button/GnButton";
import { useState } from "react";

export function IncidentTypeCheckbox(props) {
    const { list = [], avatar, onConfirm, minQty = 0 } = props;

    const [checkedList, setCheckedList] = useState([]);
    const [visible, setVisible] = useState(true);

    return (
        visible
            ? <div className="flex flex-col sm:flex-row gap-4 sm:mr-[236px] h-[550px] items-start">
                <Avatar src={avatar}></Avatar>

                <div className="flex flex-col gap-2 relative justify-center">
                    <div className="bg-white dark:bg-gray-900 shadow-lg max-w-[340px] ml-2 rounded-t-[2.5rem] rounded-br-[2.5rem] flex flex-col items-center justify-start pl-5 pt-3 pb-3 pr-4 relative m-auto">
                        <Card className="shadow-none">
                            {list.map(element => {
                                return (
                                    <div className="flex flex-row items-start gap-2">
                                        <Checkbox
                                            id={element?.id}
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            checked={checkedList.filter(i => i?.idTipoIncidente == element?.idTipoIncidente).length != 0}
                                            onChange={(e) => {
                                                if (e.target.checked == true) {
                                                    setCheckedList([...checkedList, { idTipoIncidente: element?.idTipoIncidente, tipo: element?.tipo }]);
                                                } else {
                                                    setCheckedList([...checkedList].filter(i => i?.idTipoIncidente != element?.idTipoIncidente))
                                                }
                                            }}
                                        />
                                        <Typography color="blue-gray" className="font-medium">
                                            {element?.tipo}
                                        </Typography>
                                    </div>
                                );
                            })}
                            <GnButton
                                color="BLUE"
                                className="mt-5"
                                onClick={() => {
                                    onConfirm(checkedList);
                                    setVisible(!visible);
                                }}
                                disabled={checkedList.length < minQty}
                            >
                                OK
                            </GnButton>
                        </Card >
                    </div>
                </div>
            </div>
            : <></>
    );
}