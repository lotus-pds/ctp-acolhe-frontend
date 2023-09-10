import { Avatar } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { CommonInput } from "../../common/input/CommonInput";
import { GnButton } from "../../common/button/GnButton";
import { useState } from "react";

export function ChatInput(props) {
    const { onConfirm, avatar = "", maxLength = 0, minLength = 0 } = props;

    const [content, setContent] = useState("");
    const [visible, setVisible] = useState(true);

    const { t } = useTranslation();

    return (
        visible
        ? <div className="flex flex-col sm:items-start items-end justify-center sm:flex-row gap-4 sm:ml-[236px] overflow-x-none max-w-[350px]">
            <div className="flex flex-col gap-2 relative m-auto">
                <div className="bg-gray shadow-xl max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-row items-center justify-center pl-4 pt-3 pb-3 pr-5 relative m-auto overflow-x-none">
                    <CommonInput
                        label={t("subject")}
                        size="md"
                        className=" m-auto"
                        value={content}
                        onChange={e => {
                            if(e.target.value.length <= maxLength) {
                                setContent(e.target.value);
                            }
                        }}
                    />
                    <GnButton
                        color="BLUE"
                        size="sm"
                        className="ml-[7px]"
                        disabled={content.length <= minLength}
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