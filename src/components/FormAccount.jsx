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
    Checkbox
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postSubscribe, postResendVerification } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration } from "../utils";
import { useTranslation } from "react-i18next";
import { InformationCircleIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

export function FormAccount(props) {

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
            <Input size="md" label={t("name")} color="gray" required
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
                            <Typography color="white" className="font-medium">{t("tooltipName.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipName.description")} <br/>
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer ml-[-8px]" 
                        />
                        </Tooltip>
                } 

            />
            

            
            <Input size="md" label={t("email")} color="gray" required
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
                            <Typography color="white" className="font-medium">{t("tooltipEmail.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipEmail.description")}<br/>
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer ml-[-8px]" 
                        />
                        </Tooltip>
                } 
            />
            
            
            
            <Input size="md" label={t("registration")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.registration}
                value={subscription.prontuario} error={isFieldValid.registration === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, prontuario: e.target.value });
                    setIsFieldValid({ ...isFieldValid, registration: validateRegistration(e.target.value) });
                }}

                icon={
                    <Tooltip content={
                        <div className="w-70">
                            <Typography color="white" className="font-medium">{t("tooltipRegistrationNumber.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipRegistrationNumber.description")} <br/>
                            {t("tooltipRegistrationNumber.descriptionTwo")}
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer ml-[-8px]" 
                        />
                        </Tooltip>
                } 

            />
            

            
            <Input 
                type={values.showPassword ? "text" : "password"} 
                size="md" label={t("password")} color="gray" required
                className="text-gray-900 dark:text-gray-200 flex items-center"
                success={isFieldValid.password}
                value={subscription.senha} error={isFieldValid.password === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, senha: e.target.value });
                    setIsFieldValid({ ...isFieldValid, password: validatePassword(e.target.value), passwordConfirmation: (passwordConfirmation == e.target.value) && validatePassword(e.target.value)});
                }}
                icon={
                    <Tooltip content={
                        <div className="w-70">
                            <Typography color="white" className="font-medium">{t("tooltipPassword.attribute")}</Typography>
                            <Typography
                            variant="small"
                            color="white" 
                            className="font-normal opacity-80"
                            >
                            {t("tooltipPassword.description")} <br/>
                            {t("tooltipPassword.descriptionTwo")} <br/>
                            {t("tooltipPassword.descriptionThree")} <br/>
                            {t("tooltipPassword.descriptionFour")} <br/>
                            {t("tooltipPassword.descriptionFive")}
                            </Typography>
                        </div>
                        }>
                        <InformationCircleIcon 
                            strokeWidth={2} 
                            className="text-gray-800 dark:text-gray-200 w-5 h-5 cursor-pointer ml-[-8px]" 
                        />
                        </Tooltip>
                } 
            />
            
            <Input type={values.showConfirmPassword ? "text" : "password"} 
                size="md" label={t("confirmPassword")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.passwordConfirmation} 
                value={passwordConfirmation} error={isFieldValid.passwordConfirmation === false ? true : false}
                onChange={(e) => {
                    setIsFieldValid({...isFieldValid, passwordConfirmation: (e.target.value == subscription.senha) && isFieldValid.password});
                    setPasswordConfirmation(e.target.value);
                }}
            />

            <Checkbox
                checked={isFieldValid.terms}
                onChange={(e) => {
                    setIsFieldValid({...isFieldValid, terms: e.target.checked});
                }}
                ripple={false}
                color="green"
                className="flex align-start w-4 h-4 rounded p-1"
                required
                label={
                    <Typography className="text-sm text-gray-900 dark:text-gray-200 flex">{t("checkBox.desc")}
                        <Typography as="a" href="#" color="green" className="text-sm hover:text-green-700 transition-colors italic">
                        &nbsp;{t("checkBox.descTwo")}
                        </Typography>.
                    </Typography>
            } />
        </div>
    )
}