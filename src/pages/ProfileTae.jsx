import {
    Typography,
    Tooltip
} from "@material-tailwind/react";
import { GnButton } from "../components/common/button/GnButton";
import { CommonInput } from "../components/common/input/CommonInput";
import { useTranslation } from "react-i18next";
import { HeaderUser } from "../components/HeaderUser";
import { ArrowLeftOnRectangleIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PencilIcon, AcademicCapIcon, KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getUser, putUser, patchUserPassword, patchUserAvatar } from "../services/user";
import { deleteSession } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration } from "../common/validations";
import { useNavigate } from "react-router-dom";
import { removeAuthData } from "../common/general";
import { PicturePopup } from "../components/PicturePopup";

export function ProfileTae(props) {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const [password, setPassword] = useState({
        senhaAtual: '',
        senhaNova: ''
    });

    const [sections, setSections] = useState({
        personalInfo: false,
        security: false,
        danger: false
    });

    const [openPicturePopup, setOpenPicturePopup] = useState(false);
    const handleOpenPicturePopup = () => setOpenPicturePopup(!openPicturePopup);

    const localGetUser = async () => {
        let response = await getUser();
        setUser(response.data);
    }

    useEffect(() => {
        localGetUser();
    }, []);

    const isFieldValid = {
        name: validateName(String(user.nome).trim()),
        email: validateEmail(String(user.email).trim()),
        registration: validateRegistration(String(user.prontuario).trim())
    };

    const isPasswordValid = {
        currentPassword: password.senhaAtual === '' ? undefined : validatePassword(password.senhaAtual),
        newPassword: password.senhaNova === '' ? undefined : validatePassword(password.senhaNova)
    }

    const updateUser = async () => {
        let response = await putUser(user);
        setUser(response.data);
    }

    const updateAvatar = async (urlAvatar) => {
        await patchUserAvatar({ urlAvatar });
        localGetUser();
    }

    const updatePassword = async () => {
        await patchUserPassword({ ...password });
        setPassword({
            senhaAtual: '',
            senhaNova: ''
        });
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
            <div className="w-[90%] grid sm:grid-cols-[20%,78%] grid-cols-1 gap-8 mt-2">
                <div className="bg-gray-100 dark:bg-gray-800 w-full sm:h-[35%] gap-6 float flex flex-col items-center p-6 rounded-xl drop-shadow-md ">
                    <div style={{ backgroundImage: `url(${user.urlAvatar})` }} className={"h-24 w-24 bg-gray-200 dark:bg-gray-900 rounded-full bg-center bg-cover"}>
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
                            <GnButton color="BLUE" onClick={handleOpenPicturePopup} className="w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12">
                                <PencilIcon className="w-5"></PencilIcon>
                            </GnButton>
                        </Tooltip>
                        <PicturePopup
                            open={openPicturePopup}
                            handleConfirm={selected => {
                                updateAvatar(selected);
                                handleOpenPicturePopup();
                            }}
                            handleOpen={() => {
                                handleOpenPicturePopup();
                                localGetUser();
                            }}
                            preSelected={user.urlAvatar}
                        />
                    </div>

                    <div className="w-full flex flex-col items-center sm:p-0 p-2 justify-evenly h-full">
                        <div className="w-[95%] bg-gray-200 dark:bg-gray-900 h-7"></div>
                        <div className="w-[75%] ml-9 bg-gray-200 dark:bg-gray-900 h-7"></div>
                        <div className="w-[75%] ml-9 bg-gray-200 dark:bg-gray-900 h-7"></div>
                        <div className="w-[95%] bg-gray-200 dark:bg-gray-900 h-7"></div>

                        <GnButton
                            onClick={async () => {
                                await deleteSession();
                                removeAuthData();
                                navigate('/');
                            }}
                            className="bg-transparent text-red-300 dark:text-red-200 italic font-bold flex gap-2 justify-center items-center shadow-transparent hover:shadow-transparent hover:scale-110 transition"
                        >
                            <ArrowLeftOnRectangleIcon className="w-6" />
                            {t('tooltipEditProfile.logout')}
                        </GnButton>

                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 w-full max-h-[3000px] rounded-xl mb-8 drop-shadow-md">
                    <div className=" w-full  flex flex-col items-start justify-center p-12 gap-8">
                        <Typography
                            variant="h3"
                            className="font-normal sm:text-3xl text-lg flex justify-center items-center gap-4"
                        >
                            <UserIcon className="w-8"></UserIcon>
                            {t("tooltipEditProfile.titleProfile")}
                        </Typography>

                        <Typography
                            variant="paragraph"
                        >
                            {t("tooltipEditProfile.descProfileOne")}
                        </Typography>

                        <Typography
                            variant="paragraph"
                        >
                            {t("tooltipEditProfile.descProfileTwo")}
                        </Typography>

                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <Typography variant="h4" className="sm:text-2xl text-xl">
                                    {t("tooltipEditProfile.myProfile")}
                                </Typography>
                                <div className="flex justify-center items-center">
                                    <Tooltip content={
                                        <div className="w-70">
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal opacity-80"
                                            >
                                                {t('tooltipEditProfile.edit')}
                                            </Typography>
                                        </div>
                                    }>
                                        {sections.personalInfo === false
                                            ? <GnButton
                                                color="BLUE"
                                                className="w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                                disabled={!Object.values(sections).every(value => value === false)}
                                                onClick={() => { setSections({ ...sections, personalInfo: !sections.personalInfo }) }}
                                            >
                                                <PencilIcon className="w-5"></PencilIcon>
                                            </GnButton>
                                            : <GnButton
                                                color="BLUE"
                                                className=" w-1 h-12 rounded-full text-center grid items-center justify-center mt-12 ml-12"
                                                disabled={!Object.values(isFieldValid).every(value => value === true)}
                                                onClick={async () => {
                                                    await updateUser();
                                                    setSections({ ...sections, personalInfo: !sections.personalInfo });
                                                }}
                                            >
                                                <CheckIcon className="w-5"></CheckIcon>
                                            </GnButton>}
                                    </Tooltip>
                                    {sections.personalInfo === true ?
                                        <Tooltip content={
                                            <div className="w-70">
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal opacity-80"
                                                >
                                                    {t('tooltipEditProfile.cancel')}
                                                </Typography>
                                            </div>
                                        }>
                                            <GnButton
                                                color="RED"
                                                className=" w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                                onClick={() => {
                                                    setSections({ ...sections, personalInfo: false });
                                                    localGetUser();
                                                }}
                                            >
                                                <XMarkIcon className="w-8"></XMarkIcon>
                                            </GnButton>
                                        </Tooltip> : undefined
                                    }

                                </div>

                            </div>

                            <div className="flex flex-col sm:p-6 sm:gap-6 p-2 gap-2">
                                <Typography variant="h4" className='font-normal sm:text-2xl text-xl flex gap-4 p-2'>
                                    <UserIcon className="sm:w-6 w-5" />
                                    {t("tooltipEditProfile.somethingInformations")}
                                </Typography>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 ">
                                    <CommonInput
                                        size="lg"
                                        disabled={!sections.personalInfo}
                                        label={t("name")}
                                        value={user.nome}
                                        onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                        error={!isFieldValid.name}
                                        success={isFieldValid.name}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:p-6 sm:gap-6 p-2 gap-2">
                                <Typography variant="h4" className='font-normal sm:text-2xl text-xl flex gap-4'>
                                    <AcademicCapIcon className="w-6" />
                                    {t("tooltipEditProfile.institutionalInformations")}
                                </Typography>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 ">
                                    <CommonInput
                                        size="lg"
                                        disabled
                                        label={t("email")}
                                        value={user.email}
                                    />
                                    <CommonInput
                                        size="lg"
                                        disabled
                                        label={t("registration")}
                                        value={user.prontuario}
                                        onChange={(e) => setUser({ ...user, prontuario: e.target.value })}
                                        error={!isFieldValid.registration}
                                        success={isFieldValid.registration}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center justify-between">

                                <Typography variant="h4" className='font-normal sm:text-2xl text-xl flex gap-4'>
                                    {t("tooltipEditProfile.security")}
                                </Typography>
                                <div className="flex justify-center items-center">
                                    <Tooltip content={
                                        <div className="w-70">
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal opacity-80"
                                            >
                                                {t('tooltipEditProfile.edit')}
                                            </Typography>
                                        </div>
                                    }>
                                        {sections.security === false
                                            ? <GnButton
                                                color="BLUE"
                                                className=" w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                                onClick={() => { setSections({ ...sections, security: !sections.security }) }}
                                                disabled={!Object.values(sections).every(value => value === false)}
                                            >
                                                <PencilIcon className="w-5"></PencilIcon>
                                            </GnButton>
                                            : <GnButton
                                                color="BLUE"
                                                className=" w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                                onClick={async () => {
                                                    await updatePassword();
                                                    setSections({ ...sections, security: !sections.security });
                                                }}
                                                disabled={!Object.values(isPasswordValid).every(value => value === true)}
                                            >
                                                <CheckIcon className="w-5"></CheckIcon>
                                            </GnButton>}
                                    </Tooltip>
                                    {sections.security === true ?
                                        <Tooltip content={
                                            <div className="w-70">
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-normal opacity-80"
                                                >
                                                    {t('tooltipEditProfile.cancel')}
                                                </Typography>
                                            </div>
                                        }>
                                            <GnButton
                                                color="RED"
                                                className="w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                                onClick={() => {
                                                    setSections({ ...sections, security: !sections.security });
                                                    setPassword({
                                                        senhaAtual: '',
                                                        senhaNova: ''
                                                    });
                                                }}
                                            >
                                                <XMarkIcon className="w-8"></XMarkIcon>
                                            </GnButton>

                                        </Tooltip> : undefined
                                    }
                                </div>

                            </div>

                            <div className="flex flex-col sm:p-6 sm:gap-6 p-2 gap-2">
                                <Typography variant="h4" className='font-normal sm:text-2xl text-xl flex gap-4'>
                                    <KeyIcon className="w-6" />
                                    {t("tooltipEditProfile.changePassword")}
                                </Typography>

                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 ">
                                    <CommonInput
                                        value={password.senhaAtual}
                                        onChange={e => setPassword({ ...password, senhaAtual: e.target.value })}
                                        error={isPasswordValid.currentPassword === false ? true : false}
                                        success={isPasswordValid.currentPassword}
                                        size="lg"
                                        disabled={!sections.security}
                                        label={t("currentPassword")}
                                        type='password'
                                    />
                                    <CommonInput
                                        value={password.senhaNova}
                                        onChange={e => setPassword({ ...password, senhaNova: e.target.value })}
                                        error={isPasswordValid.newPassword === false ? true : false}
                                        success={isPasswordValid.newPassword}
                                        size="lg"
                                        disabled={!sections.security}
                                        label={t("newPassword")}
                                        type='password'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <div className="w-full">
                            <div className="flex items-center justify-between">

                                <Typography variant="h4" className='font-normal sm:text-2xl text-xl flex gap-4'>
                                    {t("tooltipEditProfile.dangerous")}
                                </Typography>
                                <Tooltip content={
                                    <div className="w-70">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal opacity-80"
                                        >
                                            {t('tooltipEditProfile.dangerousEdit')}
                                        </Typography>
                                    </div>
                                }>
                                    {sections.danger === false
                                        ? <GnButton
                                            color="RED"
                                            className="w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                            onClick={() => { setSections({ ...sections, danger: !sections.danger }) }}
                                            disabled={!Object.values(sections).every(value => value === false)}
                                        >
                                            <ExclamationTriangleIcon className="w-5"></ExclamationTriangleIcon>
                                        </GnButton>
                                        : <GnButton
                                            color="RED"
                                            className="w-1 h-12 rounded-full text-center grid items-center justify-center sm:mt-12 sm:ml-12"
                                            onClick={() => { setSections({ ...sections, danger: !sections.danger }) }}>
                                            <CheckIcon className="w-5"></CheckIcon>
                                        </GnButton>}
                                </Tooltip>
                            </div>

                            <div className="flex flex-col p-6 gap-6">
                                <Typography
                                    variant="h4"
                                    color="red"
                                    className='font-normal sm:text-2xl text-xl flex gap-4'
                                >
                                    <ExclamationTriangleIcon className="w-6" />
                                    {t("tooltipEditProfile.dagerousTitle")}
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="red"
                                    className='font-normal italic flex gap-4'
                                >
                                    {t("tooltipEditProfile.dangerousDesc")}
                                </Typography>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}