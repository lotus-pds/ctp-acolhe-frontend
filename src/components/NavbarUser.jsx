import { Navbar, Tooltip, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NavbarUser(props) {
    const { path } = props;

    const { t } = useTranslation();

    const navLinkClassName = "p-1.5 rounded ";

    return (
        <div className="flex items-center justify-center">
            <Navbar className="bg-gray-100 dark:bg-gray-800 border-none sm:w-[350px] w-[255px] h-[45px] sm:h-[50px] flex items-center justify-between sm:relative fixed
            bottom-0 left-8 right-8 m-auto sm:m-0 mb-3 ml-2 mr-2">
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
                    <NavLink to={"/posts"} className={navLinkClassName + (path == "/posts" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264821485649/Component_58.png" alt="" className="sm:w-7 w-6" />
                    </NavLink>
                </Tooltip>

                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipHeader.myCalendar")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/calendario"} className={navLinkClassName + (path == "/calendario" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264565612575/Component_10.png" alt=""
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
                            {t("tooltipHeader.createIncident")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/incidente/criacao"} className={"p-0.5 rounded " + (path == "/incidente/criacao" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264129425530/Component_11_1.png" alt="" className="sm:w-10 w-8" />
                    </NavLink>
                </Tooltip>
                
                <Tooltip content={
                    <div className="w-70">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-80"
                        >
                            {t("tooltipHeader.myIncident")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/incidente"} className={navLinkClassName + (path == "/incidente" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264322359406/Component_9.png"
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
                            {t("tooltipHeader.profile")}<br />
                        </Typography>
                    </div>
                }>
                    <NavLink to={"/perfil"} className={navLinkClassName + (path == "/perfil" ? "bg-gray-200" : "")}>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930263869358222/Component_12_1.png" alt="" className="sm:w-7 w-6" />
                    </NavLink>
                </Tooltip>
            </Navbar>
        </div>
    )
}