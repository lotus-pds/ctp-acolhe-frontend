import {
    Typography,
    Checkbox
} from "@material-tailwind/react";
import { CommonInput } from "./common/input/CommonInput";
import { InfoInput } from "./common/input/InfoInput";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export function FormAccount(props) {

    const { subscription, setSubscription, isFieldValid } = props;

    const { t } = useTranslation();

    return (
        <div className="mb-4 flex flex-col gap-6 w-full align-center justify-center">

            <InfoInput
                size="md"
                label={t("name")}
                required
                success={isFieldValid.name}
                value={subscription.nome}
                error={isFieldValid.name === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, nome: e.target.value });
                }}
                info={{ title: t("tooltipName.attribute"), text: [t("tooltipName.description")] }}
            />

            <InfoInput
                size="md"
                label={t("email")}
                required
                success={isFieldValid.email}
                type="email"
                value={subscription.email}
                error={isFieldValid.email === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, email: e.target.value });
                }}
                info={{
                    title: t("tooltipEmail.attribute"),
                    text: [t("tooltipEmail.description")]
                }}
            />

            <InfoInput
                size="md"
                label={t("registration")}
                required
                success={isFieldValid.registration}
                value={subscription.prontuario}
                error={isFieldValid.registration === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, prontuario: e.target.value });
                }}
                info={{
                    title: t("tooltipRegistrationNumber.attribute"),
                    text: [t("tooltipRegistrationNumber.description"), t("tooltipRegistrationNumber.descriptionTwo")]
                }}
            />

            <InfoInput
                type="password"
                size="md"
                label={t("password")}
                required
                success={isFieldValid.password}
                value={subscription.senha}
                error={isFieldValid.password === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, senha: e.target.value });
                }}
                info={{
                    title: t("tooltipPassword.attribute"),
                    text: [
                        t("tooltipPassword.description"),
                        t("tooltipPassword.descriptionTwo"),
                        t("tooltipPassword.descriptionThree"),
                        t("tooltipPassword.descriptionFour"),
                        t("tooltipPassword.descriptionFive")
                    ]
                }}
            />

            <CommonInput
                type="password"
                size="md"
                label={t("confirmPassword")}
                required
                success={isFieldValid.passwordConfirmation}
                value={subscription.confirmacao}
                error={isFieldValid.passwordConfirmation === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, confirmacao: e.target.value });
                }}
            />

            <Checkbox
                checked={subscription.termo}
                onChange={(e) => {
                    setSubscription({ ...subscription, termo: e.target.checked });
                }}
                ripple={false}
                color="green"
                className="flex align-start w-4 h-4 rounded p-1"
                required
                label={
                    <Typography className="text-sm text-gray-900 dark:text-gray-200 flex">{t("checkBox.desc")}
                        <Link to="/terms" color="green" target="blank" className="text-green-500 text-sm hover:text-green-700 transition-colors italic">
                            &nbsp;{t("checkBox.descTwo")}
                        </Link>.
                    </Typography>
                } />
        </div>
    )
}