import { Navbar, Tooltip, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NavbarTae(props) {
    const { path } = props;

    const { t } = useTranslation();

    const navLinkClassName = "p-1.5 rounded ";

    return (
        <div>
            <Navbar className="bg-gray-100 dark:bg-gray-800 border-none sm:w-[350px] w-[255px] h-[45px] sm:h-[50px] flex items-center justify-between sm:relative fixed
            bottom-0 left-7 right-7 sm:m-0 mb-3 ml-2 mr-2">
                <Tooltip
                    content={
                        <div className="w-70">
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal opacity-80"
                            >
                                {t("tooltipHeader.posts")}<br />
                            </Typography>
                        </div>
                    }
                >
                    <NavLink to={"/adm/post"} className={navLinkClassName + (path == "/adm/post" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264821485649/Component_58.png" alt=""
                            className="sm:w-7 w-6"
                        />
                    </NavLink>
                </Tooltip>

                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipTae.createPost")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/adm/post/criacao"} className={navLinkClassName + (path == "/adm/post/criacao" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930336569241770/Component_59.png" alt=""
                            className="sm:w-8 w-7"
                        />
                    </NavLink>
                </Tooltip>

                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipTae.listIncident")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/adm/incidente"} className={navLinkClassName + (path == "/adm/incidente" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930335579389993/Component_62.png" alt="" className="sm:w-10 w-8" />
                    </NavLink>
                </Tooltip>

                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipTae.scheduleRoom")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/adm/agendamento"} className={navLinkClassName + (path == "/adm/agendamento" ? "bg-gray-200" : "")}>
                        <img src="https://cdn.discordapp.com/attachments/1077345452694970438/1135645138429935777/Component_37.png"
                            className="sm:w-7 w-6"
                            alt="" />
                    </NavLink>
                </Tooltip>

                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipTae.manageUsers")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/adm/cadastro/gerenciamento"} className={navLinkClassName + (path == "/adm/cadastro/gerenciamento" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1135645221955309678/Component_40.png" alt="" className="sm:w-7 w-6" />
                    </NavLink>
                </Tooltip>

                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipHeader.profile")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/adm/perfil"} className={navLinkClassName + (path == "/adm/perfil" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930263869358222/Component_12_1.png" alt="" className="sm:w-7 w-6" />
                    </NavLink>
                </Tooltip>
            </Navbar>
        </div>
    )
}