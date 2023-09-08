import {
    Card,
    Typography
} from "@material-tailwind/react";
import { GnButton } from "../components/common/button/GnButton";
import { GnPopup } from "../components/common/popup/GnPopup";
import { Link } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postSubscribe, postResendVerification } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration, validatePhoneNumber, validateClass } from "../common/validations";
import { useTranslation } from "react-i18next";
import { FormAccount } from "../components/FormAccount";
import { FormDetails } from "../components/FormDetails";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export function Subscribe(props) {
    const { courses } = props;

    const { t } = useTranslation();

    const [step, setStep] = useState(1);

    const enableResendEmail = () => {
        setTimer(true);
        setTimeout(() => {
            setIsResendEmailEnabled(true);
        }, 60000);
    }

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
        confirmacao: '',
        urlAvatar: 'https://cdn.discordapp.com/attachments/1077345452694970438/1133510052779667538/ctp-bot.png'
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
                        courses={courses}
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

    const [timer, setTimer] = useState(false);

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
                className="w-full h-full bg-none grid sm:grid-cols-2 grid-cols-1 items-center justify-center mb-12"
            >

                <div
                    className="h-[500px] flex items-center justify-center sm:mt-12 mb-12"
                >
                    <Card color="transparent" shadow={true}
                        className="w-[350px] max-h-[650px] bg-gray-100
                            dark:bg-gray-800
                            flex - items-center justify-evenly p-6 shadow-lg
                            dark:shadow-xl
                            sm:ml-[100px] ml-8 mr-8 sm:mt-12 mt-[180px]
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

                            <div className="flex gap-5 p-3 w-full justify-center align-center">
                                {step > 1
                                    ? <GnButton
                                        className="mt-0"
                                        color="GRAY"
                                        variant="gradient"
                                        onClick={() => setStep(step - 1)}
                                        disabled={step === 1}
                                    >
                                        {t("back")}
                                    </GnButton>
                                    : <></>
                                }
                                <GnButton
                                    className="mt-0"
                                    color="GREEN"
                                    variant="gradient"
                                    onClick={() => subscription.email.includes('@ifsp.edu.br') ? subscribe() : (step === 1 ? setStep(step + 1) : subscribe())}
                                    disabled={!Object.values(isFieldValid[step - 1]).every(value => value === true)}
                                >
                                    {subscription.email.includes('@ifsp.edu.br') ? t("subscribe") : (step === 2 ? t("subscribe") : t("next"))}
                                </GnButton>
                            </div>

                            <Typography className="mt-4 text-center font-normal text-gray-900 dark:text-gray-200">
                                {t("haveRegistration")}{" "}

                                <Link to="/acesso" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-400
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
                        className="sm:w-[530px] w-[360px] sm:mr-[100px] sm:mt-0 mt-[120px]"
                    />
                </div>
            </div>

            <GnPopup
                open={success}
                type={'SUCCESS'}
                text={t('subscriptionSuccess')}
                btn={
                    <GnButton
                        color="GREEN"
                        disabled={!isResendEmailEnabled}
                        onClick={async () => {
                            await postResendVerification(subscription.email);
                            setIsResendEmailEnabled(false);
                            enableResendEmail();
                        }}
                    >
                        <div className="flex flex-row justify-center items-center gap-5">
                            <span className="h-[1rem]">{t('resendEmail')}</span>
                            {
                                timer
                                    ? <CountdownCircleTimer
                                        isPlaying
                                        duration={60}
                                        colors={['#FFFFFF']}
                                        size={30}
                                        strokeWidth={3}
                                        onComplete={() => {
                                            setTimer(false);
                                        }}
                                    >
                                        {({ remainingTime }) => remainingTime}
                                    </CountdownCircleTimer>
                                    : <></>
                            }

                        </div>
                    </GnButton>
                }
            />
        </div>
    )
}