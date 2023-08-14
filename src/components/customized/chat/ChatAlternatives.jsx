import { Avatar } from "@material-tailwind/react";
import { useState } from "react";
import { GnButton } from "../../common/button/GnButton";

export function ChatAlternatives(props) {
    const { alternatives = [], avatar = "", onChoice } = props;

    const [visible, setVisible] = useState(true);

    const gnOnChoice = answer => {
        onChoice(answer);
        setVisible(!visible);
    }

    return (visible
        ? <div className="flex flex-col sm:items-start items-end justify-center sm:flex-row gap-4 sm:ml-[236px]">
            <div className="flex flex-col gap-2 relative ">
                <div className="bg-gray shadow-xl max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-row flex-wrap items-center gap-2 justify-center pl-4 pt-3 pb-3 pr-5 relative m-auto">
                    {alternatives.map(alternative => {
                        return (
                            <GnButton
                                color="BLUE"
                                size="sm"
                                onClick={() => gnOnChoice({...alternative})}
                            >
                                { alternative?.descricao }
                            </GnButton>
                        );
                    })}
                </div>
            </div>
            <Avatar src={avatar} />
        </div>
        : <></>
    );
}