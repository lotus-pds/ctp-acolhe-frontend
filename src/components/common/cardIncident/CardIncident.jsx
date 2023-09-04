import { CalendarDaysIcon, EnvelopeIcon, StarIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Tooltip } from "antd";
import { convertDateBars } from "../../../common/general";
import { ChipIncidentStatus } from "../../customized/gnIncidents/ChipIncidentStatus";
import { useTranslation } from "react-i18next";

export function CardIncident(props) {
  const {
    incident = {},
    color,
    size,
    variant,
    disabled,
    onClick,
    className,
    children
  } = props;

  const { t } = useTranslation();
  const language = localStorage.getItem("i18nextLng");

  const { assunto, dataIncidente, status = {}, tipos = [], usuarioCopia = {} } = incident;
  const { nome, email, prontuario, nomeCurso, turma, urlAvatar } = usuarioCopia || {};
  const temas = tipos.flatMap((t) => [t.tipo]).join(', ');

  return (
    <Card color="transparent" className="w-full max-w-[47%] inline-block dark:bg-gray-900 dark:border-gray-600 dark:shadow dark:hover:bg-gray-700 transition-colors border-2 hover:bg-gray-50 cursor-pointer px-8 pt-2 pb-3 ml-4 mb-4" onClick={onClick}>
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 mb-4"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={urlAvatar}
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="dark:text-gray-200">{assunto}</Typography>
          </div>
          <Typography color="blue-gray" className="dark:text-gray-200">{nome} <EnvelopeIcon className="h-8 w-6 inline ml-3 mr-1 mb-1" /> {email}</Typography>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <hr />
        <span className="grid grid-cols-5 gap-y-2 my-4">
          <span className={language == "pt" ? "col-span-1" : "col-span-2"}>
            <Typography variant="h6" className="dark:text-gray-100">{t("registration")}</Typography>
            <Typography className="dark:text-gray-300">{prontuario}</Typography>
          </span>

          <span className={language == "pt" ? "col-span-4" : "col-span-3"}>
            <Tooltip title={nomeCurso} mouseEnterDelay={0.2} >
              <Typography variant="h6" className="dark:text-gray-100">{t("course")}</Typography>
              <Typography className="dark:text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap">{nomeCurso}</Typography>
            </Tooltip>
          </span>

          <span className="col-span-1">
            <Typography variant="h6" className="dark:text-gray-100">{t("class")}</Typography>
            <Typography className="dark:text-gray-300">{turma}</Typography>
          </span>

          <span className="col-span-4">
            <Typography variant="h6" className="dark:text-gray-100" >{t("topicsCovered")}</Typography>
            <Tooltip title={temas} mouseEnterDelay={0.2} >
              <Typography className="-ml-2 dark:text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap">
                {tipos.map((t) => (
                  <><StarIcon className="h-6 w-6 inline mr-1 ml-2 mb-1"></StarIcon>
                    {t?.tipo}</>
                ))}
              </Typography>
            </Tooltip>
          </span>
        </span>

        <div className="flex justify-between items-center">
          <Typography className="dark:text-gray-300"><CalendarDaysIcon className="h-6 w-6 inline mr-2 mb-1" />{convertDateBars(new Date(dataIncidente))}</Typography>
          <ChipIncidentStatus status={status?.idStatus} />
        </div>
      </CardBody>
    </Card>
  );
}
