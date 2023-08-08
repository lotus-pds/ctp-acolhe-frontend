import { Avatar } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { CommonInput } from "../../common/input/CommonInput";
import { GnButton } from "../../common/button/GnButton";
import { useState } from "react";

export function ChatInput(props) {
    const { onConfirm, avatar = "", maxLength = 0 } = props;

    const [content, setContent] = useState("");
    const [visible, setVisible] = useState(true);

    const { t } = useTranslation();

    return (
        visible
        ? <div className="flex flex-col sm:items-start items-end justify-center sm:flex-row gap-4 sm:ml-[236px]">
            <div className="flex flex-col gap-2 relative ">
                <div className="bg-gray shadow-xl max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-row items-center justify-center pl-4 pt-3 pb-3 pr-5 relative m-auto">
                    <CommonInput
                        label={t("subject")}
                        className="w-full"
                        value={content}
                        onChange={e => {
                            console.log(e.target.value.length);
                            if(e.target.value.length <= maxLength) {
                                setContent(e.target.value);
                            }
                        }}
                    />
                    <GnButton
                        color="BLUE"
                        size="sm"
                        className="ml-[7px]"
                        onClick={() => {
                            onConfirm(content);
                            setVisible(!visible);
                        }}
                    >
                        OK
                    </GnButton>
                </div>
            </div>
            <Avatar src={avatar} />
        </div>
        : <></>
    );
}