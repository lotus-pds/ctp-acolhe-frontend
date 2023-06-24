import {
    Input,
    Typography,
    Tooltip,
    Select,
    Option
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getCourses } from "../services/course";

export function FormDetails(props) {

    const { subscription, setSubscription, isFieldValid } = props;

    const { t } = useTranslation();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const localGetCourses = async () => {
            let response = await getCourses();
            setCourses(response.data);
        }

        localGetCourses();
    }, []);

    return (
        <div className="mb-4 flex flex-col gap-6 w-full items-center justify-center">


            <div className="bg-center bg-cover bg-[url('https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480')] w-20 h-20 rounded-full cursor-pointer relative">
                <div className="bg-gradient-to-r from-green-200  to-green-300
                        dark:from-green-300 dark:to-green-400 w-8 h-8 absolute bottom-0 right-0 rounded-full flex items-center justify-center">
                    <PencilIcon
                        className="w-5 text-gray-200"
                    />
                </div>
            </div>

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

            <Select
                label={t("course")}
                color="gray"
                className="text-gray-900 dark:text-gray-200"
                value={subscription.idCurso}
                onChange={(e) => setSubscription({ ...subscription, idCurso: e })}
                success={isFieldValid.idCourse}
            >
                {courses.map((value) => 
                    <Option value={value.idCurso}>{value.nome}</Option>)
                }
            </Select>
        </div>
    )
}