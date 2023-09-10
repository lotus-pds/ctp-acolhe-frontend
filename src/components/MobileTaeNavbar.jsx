import { Navbar, Tooltip, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function MobileTaeNavbar(){

    const {t} = useTranslation()

    return(
        <div className="w-full flex items-center justify-center">
            <Navbar className="bg-gray-100 dark:bg-gray-800 border-none sm:w-[350px] w-[255px] h-[45px] sm:h-[50px] flex items-center justify-between sm:relative fixed z-50
            bottom-4">
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
                        to={"/adm/post"}>
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
                        <NavLink to={"/adm/post/criacao"}
                             
                            
                        >   
                           <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930336569241770/Component_59.png" alt="" 
                           className="sm:w-8 w-7"
                           /> 
                            
                        </NavLink>
                    </Tooltip><Tooltip content={
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
                        <NavLink to={"/adm/incidente"} >
                            <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930335579389993/Component_62.png" alt="" className="sm:w-10 w-8"/>
                        </NavLink>
                    </Tooltip><Tooltip content={
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
                        <NavLink to={"/adm/agendamento"} >
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
                        <NavLink to={"/adm/cadastro/gerenciamento"} >
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
                        <NavLink to={"/adm/perfil"} >
                            <img src="https://media.discordapp.net/attachments/1077345452694970438/1114930263869358222/Component_12_1.png" alt="" className="sm:w-7 w-6" />
                        </NavLink>
                    </Tooltip>
                </Navbar>
        </div>
    )
}