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
        <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-full max-h-[500px] m-auto">

            <div className="flex gap-4"> 
                <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480"></Avatar>

                <div className="flex flex-col gap-2 relative justify-center">
                    <div className="bg-blue-900 max-w-[340px] ml-2 rounded-t-[2.5rem] rounded-br-[2.5rem] flex flex-col items-center justify-center pl-5 pt-3 pb-3 pr-4 relative m-auto">
                        <Typography variant="paragraph" className="text-gray-200 flex items-center justify-start w-full max-w-[340px]  font-medium">
                            Olá, SeuNome! Eu sou o Minikaio e vou te auxiliar na criação do seu tipo de incidente. 
                        </Typography>
                        <Typography variant="small" className="text-gray-300 mt-3 flex items-center justify-start w-full max-w-[340px] font-bold ">
                            06/06/2023 00:00 AM
                        </Typography>
                    </div>
                
                    <div className="max-w-[300px] m-auto">
                    <Menu placement="bottom"
                    >
                        <MenuHandler className="bg-blue-900">
                            <GnButton>Assuntos de Interesse</GnButton>
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

                    <div className="bg-blue-900 max-w-[340px] ml-2 rounded-t-[2.5rem] rounded-br-[2.5rem] flex flex-col items-center justify-center pl-5 pt-3 pb-3 pr-4 relative m-auto">
                        <Typography variant="paragraph" className="text-gray-200 flex items-center justify-center w-full max-w-[340px] font-bold">
                            . . .
                        </Typography>
    
                    </div>
                </div>
            </div>

            <div className="flex gap-4"> 
                <div className="flex flex-col gap-2 relative">
                    <div className="bg-blue-400 max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-col items-center justify-center pl-4 pt-3 pb-3 pr-5 relative m-auto">
                        <Typography variant="paragraph" className="text-black flex items-center justify-end w-full max-w-[340px]  font-medium">
                            Olá, SeuNome! Eu sou o Minikaio e vou te auxiliar na criação do seu tipo de incidente. 
                        </Typography>
                        <Typography variant="small" className="text-black mt-3 flex items-center justify-end w-full max-w-[340px] font-bold ">
                            06/06/2023 00:00 AM
                        </Typography>
                    </div>

                    <div className="bg-blue-400 max-w-[340px] mr-2 rounded-t-[2.5rem] rounded-bl-[2.5rem] flex flex-col items-center justify-center pl-5 pt-3 pb-3 pr-4 relative m-auto">
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