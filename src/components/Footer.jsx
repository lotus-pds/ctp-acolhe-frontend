import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
Link

export function Footer(){

    const {t} = useTranslation()
    const {theme} = useTheme()

    if(theme === "light")
    {
        return (
            <footer
                className="
                    w-full
                    absolute
                    bottom-0 left-0
                    flex items-center justify-around
                    bg-gradient-to-r from-red-100  to-red-300
                    font-medium
                    p-2
                "
            >
                <img src="https://media.discordapp.net/attachments/1077345452694970438/1099690236906319983/Component_11.png"
                className="w-[120px]" alt="" />
                <span>CTP Acolhe - {t("rights")}</span>
                <span>{t("created")} <Link to={"https://lotus-blog-pds.blogspot.com"} className="font-bold" target="_blank">Lotus</Link> | {t("policies")}</span>
            </footer>
        );
    }
    return (
        <footer
            className="
                w-full
                absolute
                bottom-0 left-o
                flex items-center justify-around
                bg-gradient-to-r from-red-200  to-red-400
                font-medium
                p-2
            "
        >
            <img src="https://media.discordapp.net/attachments/1077345452694970438/1099690236080050268/Component_23_2.png"
            className="w-[120px]" alt="" />
            <span>CTP Acolhe - {t("rights")}</span>
            <span>{t("created")} <Link to={"https://lotus-blog-pds.blogspot.com"} className="font-bold" target="_blank">Lotus</Link> | {t("policies")}</span>
        </footer>
    );
}