import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
Link

export function Footer(){

    const {t} = useTranslation()

    return (
        <footer
            className="
                w-full
                absolute
                bottom-0 left-o
                flex items-center justify-around
                bg-gradient-to-r from-purple-100  to-purple-300
                font-medium
                p-2
            "
        >
            <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572129437913189/ctp-footer.png"
            className="w-[120px]" alt="" />
            <span>CTP Acolhe - {t("rights")}</span>
            <span>{t("created")} <Link to={"https://lotus-blog-pds.blogspot.com"} className="font-bold" target="_blank">Lotus</Link> | {t("policies")}</span>
        </footer>
    );
}