import { InfoInput } from "./common/input/InfoInput";
import { SelectOptions } from "./common/select/SelectOptions";
import { useTranslation } from "react-i18next";
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

    const periods = [
        {
            label: t("morning"),
            value: 'MATUTINO'
        },
        {
            label: t("afternoon"),
            value: 'VESPERTINO'
        },
        {
            label: t("night"),
            value: 'NOTURNO'
        }
    ]

    return (
        <div className="mb-4 flex flex-col gap-6 w-full items-center justify-center">


            <div className={"bg-center bg-cover bg-[url('" + subscription.urlAvatar + "')] w-20 h-20 rounded-full cursor-pointer relative"}>
                <div className="bg-gradient-to-r from-green-200  to-green-300
                        dark:from-green-300 dark:to-green-400 w-8 h-8 absolute bottom-0 right-0 rounded-full flex items-center justify-center">
                    <PencilIcon
                        className="w-5 text-gray-200"
                    />
                </div>
            </div>

            <InfoInput
                size="md"
                label={t("phone")}
                required
                type="tel"
                success={isFieldValid.phoneNumber}
                value={subscription.telefone}
                error={isFieldValid.phoneNumber === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, telefone: e.target.value });
                }}
                info={{
                    title: t("tooltipPhone.attribute"),
                    text: [t("tooltipPhone.description"), t("tooltipPhone.descriptionTwo")]
                }}
            />

            <InfoInput
                size="md"
                label={t("class")}
                required
                success={isFieldValid.class}
                type="email"
                value={subscription.turma}
                error={isFieldValid.class === false ? true : false}
                onChange={(e) => {
                    setSubscription({ ...subscription, turma: e.target.value });
                }}
                info={{
                    title: t("tooltipClass.attribute"),
                    text: [t("tooltipClass.description")]
                }}
            />

            <SelectOptions
                label={t("period")}
                value={subscription.periodo}
                onChange={(e) => setSubscription({ ...subscription, periodo: e })}
                success={isFieldValid.period}
                options={periods}
            />

            <SelectOptions
                label={t("course")}
                value={subscription.idCurso}
                onChange={(e) => setSubscription({ ...subscription, idCurso: e })}
                success={isFieldValid.idCourse}
                options={courses.map(course => ({ label: course.nome, value: course.idCurso }))}
            />
        </div>
    )
}