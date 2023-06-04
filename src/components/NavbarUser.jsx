import { Navbar, Tooltip, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NavbarUser(){

    const {t} = useTranslation()

    return(
        <div>
            <Navbar className="bg-gray-100 dark:bg-gray-800 border-none w-[350px] h-[50px] flex items-center justify-between">
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
                        <NavLink 
                        to={"/posts"}>
                            <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264821485649/Component_58.png" alt="" />
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
                        <NavLink to={"/my-calendar"}
                            className=""
                            
                        >   
                           <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264565612575/Component_10.png" alt="" /> 
                            
                        </NavLink>
                    </Tooltip><Tooltip content={
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
                        <NavLink to={"/create-incident"}>
                            <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264129425530/Component_11_1.png" alt="" />
                        </NavLink>
                    </Tooltip><Tooltip content={
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
                        <NavLink to={"/my-incident"}>
                            <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930264322359406/Component_9.png" alt="" />
                        </NavLink>
                    </Tooltip><Tooltip content={
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
                        <NavLink to={"/profile"}>
                            <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930263869358222/Component_12_1.png" alt="" />
                        </NavLink>
                    </Tooltip>
                </Navbar>
        </div>
    )
}