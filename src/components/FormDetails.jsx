import { InfoInput } from "./common/input/InfoInput";
import { SelectOptions } from "./common/select/SelectOptions";
import { useTranslation } from "react-i18next";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { PicturePopup } from "./PicturePopup";
import { GnButton } from "./common/button/GnButton";

export function FormDetails(props) {
    const { subscription, setSubscription, isFieldValid, courses, onKeyDown } = props;

    const { t } = useTranslation();

    const [openPicturePopup, setOpenPicturePopup] = useState(false);

    const handleOpenPicturePopup = () => setOpenPicturePopup(!openPicturePopup);

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
            <div style={{ backgroundImage: `url(${subscription.urlAvatar})` }} className={"bg-center bg-cover w-20 h-20 rounded-full relative"}>
                <div className="bg-gradient-to-r from-green-200  to-green-300 dark:from-green-300 dark:to-green-400 w-10 h-10 absolute bottom-0 right-0 rounded-full flex items-center justify-center">
                    <GnButton onClick={handleOpenPicturePopup} className="w-5 h-12 bg-transparent shadow-none rounded-full items-center hover:shadow-none relative">
                        <PencilIcon
                            className="w-5 absolute bottom-3 right-3.5 flex items-center justify-center  text-gray-200"
                        />
                    </GnButton>
                    <PicturePopup
                        open={openPicturePopup}
                        handleConfirm={selected => {
                            setSubscription({ ...subscription, urlAvatar: selected });
                            handleOpenPicturePopup();
                        }}
                        handleOpen={handleOpenPicturePopup}
                        preSelected={subscription.urlAvatar}
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
                onKeyDown={onKeyDown}
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
                onKeyDown={onKeyDown}
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