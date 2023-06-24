import {
    Card,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postSubscribe, postResendVerification } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration, validatePhoneNumber, validateClass } from "../utils";
import { useTranslation } from "react-i18next";
import { FormAccount } from "../components/FormAccount";
import { FormDetails } from "../components/FormDetails";


export function Subscribe(props) {

    const { t } = useTranslation();

    const [step, setStep] = useState(1);

    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: '',
        telefone: '',
        turma: '',
        periodo: '',
        idCurso: '',
        termo: false,
        confirmacao: ''
    });

    const isFieldValid = [
        {
            name: subscription.nome === '' ? undefined : validateName(subscription.nome.trim()),
            email: subscription.email === '' ? undefined : validateEmail(subscription.email.trim()),
            registration: subscription.prontuario === '' ? undefined : validateRegistration(subscription.prontuario.trim()),
            password: subscription.senha === '' ? undefined : validatePassword(subscription.senha),
            passwordConfirmation: subscription.confirmacao === '' ? undefined : ((subscription.confirmacao == subscription.senha) && validatePassword(subscription.confirmacao)),
            term: subscription.termo
        },
        {
            phoneNumber: subscription.telefone === '' ? undefined : validatePhoneNumber(subscription.telefone.trim()),
            class: subscription.turma === '' ? undefined : validateClass(subscription.turma.trim()),
            period: subscription.periodo === '' ? false : true,
            idCourse: subscription.idCurso === '' ? false : true,
        }
    ];

    const getCompStep = () => {
        switch (step) {
            case 1:
                return (
                    <FormAccount
                        subscription={subscription}
                        setSubscription={setSubscription}
                        isFieldValid={isFieldValid[0]}
                    />
                );
            case 2:
                return (
                    <FormDetails
                        subscription={subscription}
                        setSubscription={setSubscription}
                        isFieldValid={isFieldValid[1]}
                    />
                );
            default:
                return (
                    <FormAccount
                        subscription={subscription}
                        setSubscription={setSubscription}
                    />
                );
        }
    }

    const [success, setSuccess] = useState(false);

    const [isResendEmailEnabled, setIsResendEmailEnabled] = useState(false);

    const enableResendEmail = () => {
        setTimeout(() => {
            setIsResendEmailEnabled(true);
        }, 60000);
    }

    const subscribe = async () => {
        let newSubscription = { ...subscription };

        for (const key in newSubscription) {
            if (key != 'password') {
                if (typeof newSubscription[key] === 'string') {
                    newSubscription[key] = newSubscription[key].trim();
                }
            }

            if (newSubscription[key] == '') {
                delete newSubscription[key];
            }
        }

        delete newSubscription.termo;
        delete newSubscription.confirmacao;

        await postSubscribe(newSubscription);
        setSuccess(true);
        enableResendEmail();
    }

    return (
        <div>
            <SecondHeader />

            <div
                className="w-full h-full bg-none grid grid-cols-2 items-center justify-center"
            >

                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={true}
                        className="w-[350px] max-h-[650px] bg-gray-100
                            dark:bg-gray-800
                            flex - items-center justify-evenly p-6 shadow-lg
                            dark:shadow-xl
                            ml-[100px]
                        "
                    >

                        <Typography variant="h4" className="
                        bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300
                        dark:from-green-300 dark:to-green-400
                        font-mouse text-3xl font-normal
                    ">
                            {t("signUp")}
                        </Typography>
                        <Typography className="mt-1 font-bold text-gray-900 dark:text-gray-200">
                            {t("signUpDesc")}
                        </Typography>
                        <form className="mt-5 mb-2 w-full  flex items-center flex-col">

                            {getCompStep()}

                            <div className="flex gap-3 p-3 w-full justify-around align-center">
                                <Button
                                    className="mt-0 bg-gradient-to-r from-gray-500  to-gray-700
                                        dark:from-gray-200 dark:to-gray-400 dark:text-gray-900"
                                    color="gray" variant="gradient"
                                    onClick={() => setStep(step - 1)}
                                    disabled={step === 1}
                                >
                                    {t("back")}
                                </Button>

                                <Button
                                    className="mt-0 bg-gradient-to-r from-green-200  to-green-300
                                        dark:from-green-300 dark:to-green-400"
                                    color="green" variant="gradient"
                                    onClick={() => subscription.email.includes('@ifsp.edu.br') ? subscribe() : (step === 1 ? setStep(step + 1) : subscribe())}
                                    disabled={!Object.values(isFieldValid[step - 1]).every(value => value === true)}
                                >
                                    {subscription.email.includes('@ifsp.edu.br') ? t("subscribe") : (step === 2 ? t("subscribe") : t("next"))}
                                </Button>
                            </div>

                            <Typography className="mt-4 text-center font-normal text-gray-900 dark:text-gray-200">
                                {t("haveRegistration")}{" "}

                                <Link to="/signin" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-400
                                dark:from-green-300 dark:to-green-400
                            ">

                                    {t("signIn")}

                                </Link>

                            </Typography>
                        </form>
                    </Card>
                </div>

                <div
                    className="flex items-center justify-center"
                >
                    <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572563443531856/subscribe-img.png?width=480&height=480" alt=""
                        className="w-[530px] mr-[100px]"
                    />
                </div>
            </div>

            <Dialog
                open={success}
                size="sm"
                className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
            >
                <DialogHeader>
                    <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300
                    font-mouse text-3xl
                ">
                        {t('success')}
                    </h4>
                </DialogHeader>
                <DialogBody className='text-center'>
                    {t('subscriptionSuccess')}
                </DialogBody>
                <DialogFooter>
                    <Button
                        className="bg-gradient-to-r from-green-200  to-green-300"
                        color="green"
                        disabled={!isResendEmailEnabled}
                        onClick={async () => {
                            await postResendVerification(subscription.email);
                            setIsResendEmailEnabled(false);
                            enableResendEmail();
                        }}
                    >
                        <span>{t('resendEmail')}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}