import {
    Card,
    Input,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Tooltip,
    Checkbox,
    Select, 
    Option
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postSubscribe, postResendVerification } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration } from "../utils";
import { useTranslation } from "react-i18next";
import { InformationCircleIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

export function FormDetails(props) {
    const { t } = useTranslation();

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: ''
    });

    const [isFieldValid, setIsFieldValid] = useState({terms: false});

    const [success, setSuccess] = useState(false);

    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [isResendEmailEnabled, setIsResendEmailEnabled] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const enableResendEmail = () => {
        setTimeout(() => {
            setIsResendEmailEnabled(true);
        }, 60000);
    }

    const subscribe = async () => {
        let isValid = true;

        for (const key in isFieldValid) {
            isValid = isValid && isFieldValid[key];
        }
        if (
            isValid
            && subscription.nome != ''
            && subscription.email != ''
            && subscription.prontuario != ''
            && subscription.senha != ''
            && passwordConfirmation != ''
        ) {
            let newSubscription = { ...subscription };

            for (const key in newSubscription) {
                newSubscription[key] = newSubscription[key].trim();
            }

            await postSubscribe(newSubscription);
            setSuccess(true);
            enableResendEmail();
        } else {
            setIsFieldValid({
                ...isFieldValid,
                name: (subscription.nome == '' ? false : true) && isFieldValid.name,
                email: (subscription.email == '' ? false : true) && isFieldValid.email,
                registration: (subscription.email == '' ? false : true) && isFieldValid.registration,
                password: (subscription.senha == '' ? false : true) && isFieldValid.password,
                passwordConfirmation: (passwordConfirmation == '' ? false : true) && isFieldValid.passwordConfirmation
            });
        }
    }

    return(
        <div className="mb-4 flex flex-col gap-6 w-full align-center justify-center">       

            <Select
                className="rounded-full flex flex-row align-center justify-center border-none w-[92px]  text-center"
                arrow={false}  size="lg" color="lime" label="profile" variant="static"
            >   
                <Option className="flex align-center justify-center w-[65px]"><img className="w-[60px]" src="https://media.discordapp.net/attachments/1077345452694970438/1107082557515890758/Mask_group_9.png?width=480&height=480" alt="" /></Option>
                <Option className="flex align-center justify-center w-[65px]"><img className="w-[60px]" src="https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480" alt="" /></Option>
                <Option className="flex align-center justify-center w-[65px]"><img className="w-[60px]" src="https://media.discordapp.net/attachments/1077345452694970438/1107082558572867645/Mask_group_6.png?width=480&height=480" alt="" /></Option>
                <Option className="flex align-center justify-center w-[65px]"><img className="w-[60px]" src="https://media.discordapp.net/attachments/1077345452694970438/1107082557838864464/Mask_group_8.png?width=480&height=480" alt="" /></Option>
                <Option className="flex align-center justify-center w-[65px]"><img className="w-[60px]" src="https://media.discordapp.net/attachments/1077345452694970438/1107082563455037591/Mask_group_4.png?width=480&height=480" alt="" /></Option>
                <Option className="flex align-center justify-center w-[65px]"><img className="w-[60px]" src="https://media.discordapp.net/attachments/1077345452694970438/1107082559084560424/Mask_group_5.png?width=480&height=480" alt="" /></Option>
            </Select>

            <Input size="md" label={t("phone")} color="gray" required 
                type="tel"
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.name}
                value={subscription.nome} error={isFieldValid.name === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, nome: e.target.value });
                    setIsFieldValid({ ...isFieldValid, name: validateName(e.target.value) });
                }}

                icon={
                    <Tooltip content={
                        <div className="w-70">
                            <Typography color="white" className="font-medium">{t("tooltipPhone.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipPhone.description")} <br/>
                            {t("tooltipPhone.descriptionTwo")}
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer" 
                        />
                        </Tooltip>
                } 

            />
            

            
            <Input size="md" label={t("class")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.email}
                type="email" value={subscription.email} error={isFieldValid.email === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, email: e.target.value });
                    setIsFieldValid({ ...isFieldValid, email: validateEmail(e.target.value) });
                }}

                icon={
                    <Tooltip content={
                        <div className="w-70">
                            <Typography color="white" className="font-medium">{t("tooltipClass.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipClass.description")}<br/>
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer" 
                        />
                        </Tooltip>
                } 
            />
            
            <Select label={t("period")}
                color="gray"
                className="text-gray-900 dark:text-gray-200"
            >
                <Option>{t("morning")}</Option>
                <Option>{t("afternoon")}</Option>
                <Option>{t("night")}</Option>
            </Select>

            <Input size="md" label={t("course")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.email}
                type="email" value={subscription.email} error={isFieldValid.email === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, email: e.target.value });
                    setIsFieldValid({ ...isFieldValid, email: validateEmail(e.target.value) });
                }}

                icon={
                    <Tooltip content={
                        <div className="w-70">
                            <Typography color="white" className="font-medium">{t("tooltipCourse.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipCourse.description")}<br/>
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer" 
                        />
                        </Tooltip>
                } 
            />
        </div>
    )
}