import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar
} from "@material-tailwind/react";
import { GnButton } from "./common/button/GnButton";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
    const { src, onClick, alt, selected } = props;

    const isSelected = selected == src;

    return (
        <Avatar
            src={src}
            onClick={onClick}
            alt={alt}
            size='xxl'
            className={'cursor-pointer hover:drop-shadow-[0_0px_5px_rgba(0,0,0,0.4)]' + (isSelected ? ' drop-shadow-[0_0px_8px_rgba(33,215,137,0.6)]' : '')}
        />
    );
}

export function PicturePopup(props) {
    const { open, handleConfirm, handleOpen, preSelected } = props;

    const [selected, setSelected] = useState(preSelected);

    useEffect(() => {
        setSelected(preSelected);
    }, [preSelected]);

    const { t } = useTranslation();

    return (
        <Dialog open={open} className="dark:bg-gray-800">
            <DialogHeader className="font-mouse font-normal text-3xl flex items-center justify-center dark:text-gray-200">{t("selectAvatar")}</DialogHeader>
            <DialogBody className="grid grid-cols-4 justify-around gap-2 items-center justify-items-center">
                <Profile
                    src='https://cdn.discordapp.com/attachments/1077345452694970438/1133510052779667538/ctp-bot.png'
                    onClick={() => setSelected('https://cdn.discordapp.com/attachments/1077345452694970438/1133510052779667538/ctp-bot.png')}
                    alt='Avatar1'
                    selected={selected}
                />

                <Profile
                    src='https://cdn.discordapp.com/attachments/1077345452694970438/1150516052439093370/Mask_group_21.png'
                    onClick={() => setSelected('https://cdn.discordapp.com/attachments/1077345452694970438/1150516052439093370/Mask_group_21.png')}
                    alt='Avatar2'
                    selected={selected}
                />

                <Profile
                    src='https://media.discordapp.net/attachments/1077345452694970438/1107082557515890758/Mask_group_9.png'
                    onClick={() => setSelected('https://media.discordapp.net/attachments/1077345452694970438/1107082557515890758/Mask_group_9.png')}
                    alt='Avatar3'
                    selected={selected}
                />

                <Profile
                    src='https://media.discordapp.net/attachments/1077345452694970438/1107082557838864464/Mask_group_8.png'
                    onClick={() => setSelected('https://media.discordapp.net/attachments/1077345452694970438/1107082557838864464/Mask_group_8.png')}
                    alt='Avatar4'
                    selected={selected}
                />

                <Profile
                    src='https://media.discordapp.net/attachments/1077345452694970438/1107082563455037591/Mask_group_4.png'
                    onClick={() => setSelected('https://media.discordapp.net/attachments/1077345452694970438/1107082563455037591/Mask_group_4.png')}
                    alt='Avatar5'
                    selected={selected}
                />

                <Profile
                    src='https://media.discordapp.net/attachments/1077345452694970438/1107082559084560424/Mask_group_5.png'
                    onClick={() => setSelected('https://media.discordapp.net/attachments/1077345452694970438/1107082559084560424/Mask_group_5.png')}
                    alt='Avatar6'
                    selected={selected}
                />

                <Profile
                    src='https://media.discordapp.net/attachments/1077345452694970438/1107082558572867645/Mask_group_6.png'
                    onClick={() => setSelected('https://media.discordapp.net/attachments/1077345452694970438/1107082558572867645/Mask_group_6.png')}
                    alt='Avatar7'
                    selected={selected}
                />

                <Profile
                    src='https://cdn.discordapp.com/attachments/1077345452694970438/1134147993990348820/Mask_group_11.png'
                    onClick={() => setSelected('https://cdn.discordapp.com/attachments/1077345452694970438/1134147993990348820/Mask_group_11.png')}
                    alt='Avatar8'
                    selected={selected}
                />
            </DialogBody>
            <DialogFooter>
                <GnButton
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    {t("cancel")}
                </GnButton>
                <GnButton color="GREEN" onClick={() => handleConfirm(selected)}>
                    {t("confirm")}
                </GnButton>
            </DialogFooter>
        </Dialog>
    );
}