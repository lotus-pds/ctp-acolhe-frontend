import { Avatar,  
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Checkbox,
} from "@material-tailwind/react";
import { GnButton } from "./common/button/GnButton";



export function Chat() {    
        
    return(
        <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-full max-h-[550px] m-auto overflow-y-scroll">

            <div className="flex flex-col sm:flex-row gap-4 sm:mr-[236px] mt-[260px] sm:mt-12 h-[550px]"> 
                <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480"></Avatar>

                <div className="flex flex-col gap-2 relative justify-center">
                    <div className="bg-white dark:bg-gray-900 shadow-lg max-w-[340px] ml-2 rounded-t-[2.5rem] rounded-br-[2.5rem] flex flex-col items-center justify-start pl-5 pt-3 pb-3 pr-4 relative m-auto">
                        <Typography variant="paragraph" className="dark:text-gray-200 flex items-center justify-start w-full max-w-[340px]  font-medium">
                            Olá, SeuNome! Eu sou o Minikaio e vou te auxiliar na criação do seu tipo de incidente. 
                        </Typography>
                        <Typography variant="small" className="dark:text-gray-300 mt-3 flex items-center justify-start w-full max-w-[340px] font-bold ">
                            06/06/2023 00:00 AM
                        </Typography>
                    </div>
                
                    <div className="max-w-[300px] m-auto">
                    <Menu placement="bottom"
                        dismiss={{
                            itemPress: false,
                        }}
                    >
                        <MenuHandler className="bg-white dark:text-white dark:bg-gray-900 text-gray-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6 )] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6 )]">
                            <GnButton className="dark:text-white dark:bg-gray-900 text-gray-900 shadow-none hover:shadow-none">Assuntos de Interesse</GnButton>
                        </MenuHandler>
                        <MenuList className="dark:bg-gray-900">
                            <MenuItem className="p-0">
                            <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded"
                            >
                                <Checkbox
                                ripple={false}
                                id="item-1"
                                containerProps={{ className: "p-0" }}
                                className="hover:before:content-none"
                                />
                                Atendimento de Conflito Educacional
                            </label>
                            </MenuItem>
                            <MenuItem className="p-0">
                            <label
                                htmlFor="item-2"
                                className="flex cursor-pointer items-center gap-2 p-2 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded"
                            >
                                <Checkbox
                                ripple={false}
                                id="item-2"
                                containerProps={{ className: "p-0" }}
                                className="hover:before:content-none"
                                />
                                Atendimento de Organização Estudantil
                            </label>
                            </MenuItem>
                            <MenuItem className="p-0">
                            <label
                                htmlFor="item-3"
                                className="flex cursor-pointer items-center gap-2 p-2 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded"
                            >
                                <Checkbox
                                ripple={false}
                                id="item-3"
                                containerProps={{ className: "p-0" }}
                                className="hover:before:content-none"
                                />
                                Atendimento de Ajuda psicológica
                            </label>
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    </div>

                    <div className="bg-white dark:bg-gray-900  max-w-[340px] ml-2 rounded-t-[2.5rem] rounded-br-[2.5rem] flex flex-col items-center justify-center pl-5 pt-3 pb-3 pr-4 relative m-auto shadow-md">
                        <Typography variant="paragraph" className="dark:text-white flex items-center justify-center w-full max-w-[340px] font-bold">
                            . . .
                        </Typography>
    
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:items-start items-end justify-center sm:flex-row gap-4 sm:ml-[236px]"> 
            

                <div className="flex flex-col gap-2 relative ">
                    <div className="bg-blue-400 shadow-xl max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-col items-center justify-center pl-4 pt-3 pb-3 pr-5 relative m-auto">
                        <Typography variant="paragraph" className="text-black flex items-center justify-end w-full max-w-[340px]  font-medium">
                            Olá, SeuNome! Eu sou o Minikaio e vou te auxiliar na criação do seu tipo de incidente. 
                        </Typography>
                        <Typography variant="small" className="text-black mt-3 flex items-center justify-end w-full max-w-[340px] font-bold ">
                            06/06/2023 00:00 AM
                        </Typography>
                    </div>

                    <div className="bg-blue-400 shadow-xl max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-col items-center justify-center pl-5 pt-3 pb-3 pr-4 relative m-auto">
                        <Typography variant="paragraph" className="text-black w-full max-w-[340px] font-bold">
                            . . .
                        </Typography>
    
                    </div>

                    
                </div>

                <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480"></Avatar>
            </div>
            

        </div>
    )
}