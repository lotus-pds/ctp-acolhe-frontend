import { InfoInput } from "./common/input/InfoInput";
import { SelectOptions } from "./common/select/SelectOptions";
import { useTranslation } from "react-i18next";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getCourses } from "../services/course";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
  } from "@material-tailwind/react";
import { GnButton } from "./common/button/GnButton";

export function FormDetails(props) {
    const { subscription, setSubscription, isFieldValid } = props;

    const { t } = useTranslation();

    const [courses, setCourses] = useState([]);

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

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


            <div className={"bg-center bg-cover bg-[url('" + subscription.urlAvatar + "')] w-20 h-20 rounded-full relative"}>
                <div className="bg-gradient-to-r from-green-200  to-green-300
                        dark:from-green-300 dark:to-green-400 w-10 h-10 absolute bottom-0 right-0 rounded-full flex items-center justify-center">
                    
                    <Button onClick={handleOpen}  className="w-5 h-12 bg-transparent shadow-none rounded-full items-center hover:shadow-none relative">
                        <PencilIcon
                            className="w-5 absolute bottom-3 right-3 flex items-center justify-center  text-gray-200"
                        />
                    </Button>
                    <Dialog open={open} handler={handleOpen} className="dark:bg-gray-800">
                        <DialogHeader className="font-mouse font-normal text-3xl flex items-center justify-center dark:text-gray-200">{t("selectAvatar")}</DialogHeader>
                        <DialogBody className="grid grid-cols-4 justify-around gap-2 items-center justify-items-center">
                            <Avatar src="https://cdn.discordapp.com/attachments/1077345452694970438/1133510052779667538/ctp-bot.png" alt="avatar1" size="xxl" className="cursor-pointer"></Avatar>
                            <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082558170202232/Mask_group_7.png?width=480&height=480"  size="xxl"alt="avatar2" className="cursor-pointer"></Avatar>
                            <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082557515890758/Mask_group_9.png?width=480&height=480"  size="xxl"alt="avatar3" className="cursor-pointer"></Avatar>
                            <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082557838864464/Mask_group_8.png?width=480&height=480" size="xxl" alt="avatar4" className="cursor-pointer"></Avatar>
                            <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082563455037591/Mask_group_4.png?width=480&height=480"  size="xxl"alt="avatar5" className="cursor-pointer"></Avatar>
                            <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082559084560424/Mask_group_5.png?width=480&height=480"  size="xxl"alt="avatar6" className="cursor-pointer"></Avatar>
                            <Avatar src="https://media.discordapp.net/attachments/1077345452694970438/1107082558572867645/Mask_group_6.png?width=480&height=480"  size="xxl"alt="avatar7" className="cursor-pointer"></Avatar>
                            <Avatar src="https://cdn.discordapp.com/attachments/1077345452694970438/1134147993990348820/Mask_group_11.png" alt="avatar8" size="xxl" className="cursor-pointer"></Avatar>
                        </DialogBody>
                        <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>{t("cancel")}</span>
                        </Button>
                        <GnButton  color="GREEN" onClick={handleOpen}>
                            <span>{t("confirm")}</span>
                        </GnButton>
                        </DialogFooter>
                    </Dialog>

                    
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