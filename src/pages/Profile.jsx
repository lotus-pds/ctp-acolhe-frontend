import {
    Typography,
    Tooltip,
    Button,
    Input
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { HeaderUser } from "../components/HeaderUser";
import { PencilIcon, ChevronRightIcon, ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, ExclamationTriangleIcon, KeyIcon, UserCircleIcon } from "@heroicons/react/24/solid";


export function Profile(){

    const {t} = useTranslation();

    

    return(
        <div className="flex flex-col items-center">
            <HeaderUser/>
            <Typography
                variant="h2"
                className="p-6 font-mouse font-normal"
            >
                {t("tooltipHeader.profile")}
            </Typography>
            <div className="w-[90%] grid grid-cols-[20%,78%] gap-8 mt-2">
                <div className="bg-gray-100 dark:bg-gray-800 w-full h-[35%] float flex flex-col items-center p-6 rounded-xl drop-shadow-md ">
                    <div className="h-24 w-24 bg-gray-200 dark:bg-gray-900 rounded-full">
                        <Tooltip content={
                            <div className="w-70">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal opacity-80"
                                >
                                    {t('tooltipEditProfile.picture')}
                                </Typography>
                            </div>
                        }>  
                            <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12">
                                <PencilIcon className="w-5"></PencilIcon>
                            </Button>
                        </Tooltip>
                    </div>
                        
                    <div className="w-full flex flex-col items-center justify-evenly h-full">
                        <div className="w-[95%] bg-gray-200 dark:bg-gray-900 h-7"></div>
                            <div className="w-[75%] ml-9 bg-gray-200 dark:bg-gray-900 h-7"></div>
                            <div className="w-[75%] ml-9 bg-gray-200 dark:bg-gray-900 h-7"></div>
                        <div className="w-[95%] bg-gray-200 dark:bg-gray-900 h-7"></div>
                        <div className="w-[95%] bg-gray-200 dark:bg-gray-900 h-7"></div>
                    </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 w-full max-h-[3000px] rounded-xl mb-8 drop-shadow-md">
                    <div className=" w-full  flex flex-col items-start justify-center p-12 gap-8">
                        <Typography
                            variant="h3"
                            className="font-normal flex justify-center items-center gap-4"
                        >   
                            <UserIcon className="w-8"></UserIcon>
                            Informações da Conta
                        </Typography>

                        <Typography
                            variant="lead"
                        >
                            Bem-vindo à nossa página de edição de perfil de usuário! Aqui você pode personalizar e atualizar as informações do seu perfil para torná-lo único e relevante para a sua presença neste site.
                            
                           
                        </Typography>

                        <Typography
                            variant="lead"
                        >
                            Nossa página de edição de perfil é projetada para ser intuitiva e fácil de usar. Aqui estão algumas das principais características e opções disponíveis para você:
                        </Typography>

                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <Typography variant="h4">
                                    Meu Perfil
                                </Typography>
                                <Tooltip content={
                                    <div className="w-70">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal opacity-80"
                                        >
                                            {t('tooltipEditProfile.picture')}
                                        </Typography>
                                    </div>
                                }> 
                                    <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12">
                                        <PencilIcon className="w-5"></PencilIcon>
                                    </Button>
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" className='font-normal flex gap-4'>
                                    <UserCircleIcon className="w-6"/>
                                    Informações Pessoais
                                </Typography>
                                <div className="grid grid-cols-2 gap-8 ">
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Nome Completo"></Input>
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Telefone"></Input>
                                </div>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" className='font-normal flex gap-4'>
                                    <AcademicCapIcon className="w-6"/>
                                    Informações Institucionais
                                </Typography>
                                <div className="grid grid-cols-2 gap-8 ">
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="E-mail Institucional"></Input>
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Turma"></Input>
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Período"></Input>
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Curso"></Input>
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Prontuário"></Input>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <Typography variant="h4">
                                    Segurança
                                </Typography>
                                <Tooltip content={
                                    <div className="w-70">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal opacity-80"
                                        >
                                            {t('tooltipEditProfile.picture')}
                                        </Typography>
                                    </div>
                                }> 
                                    <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12">
                                        <PencilIcon className="w-5"></PencilIcon>
                                    </Button>
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" className='font-normal flex gap-4'>
                                    <KeyIcon className="w-6"/>
                                    Alterar a minha senha
                                </Typography>
                                <div className="grid grid-cols-2 gap-8 ">
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Senha Antiga"></Input>
                                    <Input size="lg" classname="dark:bg-gray-800 bg-gray-100" disabled label="Nova Senha"></Input>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <Typography variant="h4">
                                    Área Perigosa
                                </Typography>
                                <Tooltip content={
                                    <div className="w-70">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal opacity-80"
                                        >
                                            {t('tooltipEditProfile.picture')}
                                        </Typography>
                                    </div>
                                }> 
                                    <Button color="red" className="bg-red-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12">
                                        <PencilIcon className="w-5"></PencilIcon>
                                    </Button>
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" color="red" className='font-normal flex gap-4'>
                                    <ExclamationTriangleIcon className="w-6"/>
                                    Desativar a Conta
                                </Typography>
                               
                                <Typography variant="small" color="red" className='font-normal italic flex gap-4'>
                                        Quero desativar minha conta e estou ciente de que precisarei confirmar meus dados caso queira ativ-ala novamente.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}