import {
    Input,
    Typography,
    Tooltip,
    Select,
    Option
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function FormDetails(props) {

    const { subscription, setSubscription, isFieldValid } = props;

    const { t } = useTranslation();

    return (
        <div className="mb-4 flex flex-col gap-6 w-full align-center justify-center">

            <Select
                className="rounded-full flex flex-row align-center justify-center border-none w-[92px]  text-center"
                arrow={false} size="lg" color="lime" label="profile" variant="static"
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
                success={isFieldValid.phoneNumber}
                value={subscription.telefone} error={isFieldValid.phoneNumber === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, telefone: e.target.value });
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
                                {t("tooltipPhone.description")} <br />
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
                success={isFieldValid.class}
                type="email" value={subscription.turma} error={isFieldValid.class === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, turma: e.target.value });
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
                                {t("tooltipClass.description")}<br />
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

            <Select 
                label={t("period")}
                color="gray"
                className="text-gray-900 dark:text-gray-200"
                value={subscription.periodo}
                onChange={(e) => setSubscription({ ...subscription, periodo: e })}
                success={isFieldValid.period}
            >
                <Option value="MATUTINO">{t("morning")}</Option>
                <Option value="VESPERTINO">{t("afternoon")}</Option>
                <Option value="NOTURNO">{t("night")}</Option>
            </Select>

            <Input size="md" label={t("course")} color="gray" required
                className="text-gray-900 dark:text-gray-200"
                success={isFieldValid.course}
                type="email" value={subscription.curso} error={isFieldValid.course === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, curso: e.target.value });
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
                                {t("tooltipCourse.description")}<br />
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