import {
    Input,
    Typography,
    Tooltip,
    Checkbox
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export function FormAccount(props) {

    const { subscription, setSubscription, isFieldValid } = props;

    const { t } = useTranslation();

    return (
        <div className="mb-4 flex flex-col gap-6 w-full align-center justify-center">
            <Input size="md" label={t("name")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.name}
                value={subscription.nome} error={isFieldValid.name === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, nome: e.target.value });
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
                                {t("tooltipName.description")} <br />
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
                                {t("tooltipEmail.description")}<br />
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
                                {t("tooltipRegistrationNumber.description")} <br />
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
                type="password"
                size="md" label={t("password")} color="gray" required
                className="text-gray-900 dark:text-gray-200 flex items-center"
                success={isFieldValid.password}
                value={subscription.senha} error={isFieldValid.password === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, senha: e.target.value });
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
                                {t("tooltipPassword.description")} <br />
                                {t("tooltipPassword.descriptionTwo")} <br />
                                {t("tooltipPassword.descriptionThree")} <br />
                                {t("tooltipPassword.descriptionFour")} <br />
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

            <Input
                type="password"
                size="md" label={t("confirmPassword")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.passwordConfirmation}
                value={subscription.confirmacao} error={isFieldValid.passwordConfirmation === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, confirmacao: e.target.value});
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