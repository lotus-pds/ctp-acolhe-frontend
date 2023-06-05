import {
    Typography,
    Tooltip,
    Button,
    Input
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { HeaderUser } from "../components/HeaderUser";
import { PencilIcon, UserIcon, CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, KeyIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getUser, putUser } from "../services/user";
import { validateClass, validateCourse, validateEmail, validateName, validatePassword, validatePhoneNumber, validateRegistration } from "../utils";

export function Profile() {

    const { t } = useTranslation();

    const [user, setUser] = useState({});

    const [sections, setSections] = useState({
        personalInfo: false,
        security: false,
        danger: false
    });

    useEffect(() => {
        const localGetUser = async () => {
            let response = await getUser();
            setUser(response.data);
        }
        localGetUser();
    }, []);

    const isFieldValid = {
        name: validateName(String(user.nome).trim()),
        email: validateEmail(String(user.email).trim()),
        registration: validateRegistration(String(user.prontuario).trim()),
        phoneNumber: validatePhoneNumber(String(user.telefone).trim()),
        class: validateClass(String(user.turma).trim()),
        period: true,
        course: validateCourse(String(user.curso).trim())
    };

    const updateUser = async () => {
        await putUser({ ...user });
        let response = await getUser();
        setUser(response.data);
    }

    return (
        <div className="flex flex-col items-center">
            <HeaderUser />
            <Typography
                variant="h2"
                className="p-6 font-mouse font-normal"
            >
                {t("tooltipHeader.profile")}
            </Typography>
            <div className="w-[90%] grid grid-cols-[20%,78%] gap-8 mt-2">
                <div className="bg-gray-100 dark:bg-gray-800 w-full h-[35%] float flex flex-col items-center p-6 rounded-xl drop-shadow-md ">
                    <div className="h-24 w-24 bg-gray-200 dark:bg-gray-900 rounded-full bg-[url('https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480')] bg-center bg-cover">
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
                                    {sections.personalInfo === false
                                        ? <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                            disabled={!Object.values(sections).every(value => value === false)}
                                            onClick={() => { setSections({ ...sections, personalInfo: !sections.personalInfo }) }}>
                                            <PencilIcon className="w-5"></PencilIcon>
                                        </Button>
                                        : <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                            disabled={!Object.values(isFieldValid).every(value => value === true)}
                                            onClick={async () => {
                                                await updateUser();
                                                setSections({ ...sections, personalInfo: !sections.personalInfo });
                                            }}>
                                            <CheckIcon className="w-5"></CheckIcon>
                                        </Button>}
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" className='font-normal flex gap-4'>
                                    <UserCircleIcon className="w-6" />
                                    Informações Pessoais
                                </Typography>
                                <div className="grid grid-cols-2 gap-8 ">
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled={!sections.personalInfo} label="Nome Completo" value={user.nome}
                                        onChange={(e) => setUser({ ...user, nome: e.target.value })} error={!isFieldValid.name} success={isFieldValid.name}
                                    />
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled={!sections.personalInfo} label="Telefone" value={user.telefone}
                                        onChange={(e) => setUser({ ...user, telefone: e.target.value })} error={!isFieldValid.phoneNumber} success={isFieldValid.phoneNumber}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" className='font-normal flex gap-4'>
                                    <AcademicCapIcon className="w-6" />
                                    Informações Institucionais
                                </Typography>
                                <div className="grid grid-cols-2 gap-8 ">
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled label="E-mail Institucional" value={user.email}
                                    />
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled={!sections.personalInfo} label="Turma" value={user.turma}
                                        onChange={(e) => setUser({ ...user, turma: e.target.value })} error={!isFieldValid.class} success={isFieldValid.class}
                                    />
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled={!sections.personalInfo} label="Período" value={user.periodo}
                                        onChange={(e) => setUser({ ...user, periodo: e.target.value })} error={!isFieldValid.period} success={isFieldValid.period}
                                    />
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled={!sections.personalInfo} label="Curso" value={user.curso}
                                        onChange={(e) => setUser({ ...user, curso: e.target.value })} error={!isFieldValid.course} success={isFieldValid.course}
                                    />
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/
                                        disabled={!sections.personalInfo} label="Prontuário" value={user.prontuario}
                                        onChange={(e) => setUser({ ...user, prontuario: e.target.value })} error={!isFieldValid.registration} success={isFieldValid.registration}
                                    />
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
                                    {sections.security === false
                                        ? <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                            onClick={() => { setSections({ ...sections, security: !sections.security }) }}
                                            disabled={!Object.values(sections).every(value => value === false)}>
                                            <PencilIcon className="w-5"></PencilIcon>
                                        </Button>
                                        : <Button className="bg-blue-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                            onClick={() => { setSections({ ...sections, security: !sections.security }) }}>
                                            <CheckIcon className="w-5"></CheckIcon>
                                        </Button>}
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" className='font-normal flex gap-4'>
                                    <KeyIcon className="w-6" />
                                    Alterar a minha senha
                                </Typography>
                                <div className="grid grid-cols-2 gap-8 ">
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/ disabled={!sections.security} label="Senha Antiga"></Input>
                                    <Input size="lg" /*className="text-gray-900 dark:text-gray-200"*/ disabled={!sections.security} label="Nova Senha"></Input>
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
                                    {sections.danger === false
                                        ? <Button color="red" className="bg-red-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                            onClick={() => { setSections({ ...sections, danger: !sections.danger }) }}
                                            disabled={!Object.values(sections).every(value => value === false)}>
                                            <ExclamationTriangleIcon className="w-5"></ExclamationTriangleIcon>
                                        </Button>
                                        : <Button color="red" className="bg-red-700 w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                            onClick={() => { setSections({ ...sections, danger: !sections.danger }) }}>
                                            <CheckIcon className="w-5"></CheckIcon>
                                        </Button>}
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography variant="h4" color="red" className='font-normal flex gap-4'>
                                    <ExclamationTriangleIcon className="w-6" />
                                    Desativar a Conta
                                </Typography>

                                <Typography variant="small" color="red" className='font-normal italic flex gap-4'>
                                    Quero desativar minha conta e estou ciente de que precisarei confirmar meus dados caso queira ativá-la novamente.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}