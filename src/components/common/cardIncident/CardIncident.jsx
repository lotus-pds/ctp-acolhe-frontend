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
import { ChipIncidentStatus } from "../../cutomized/gnIncidents/ChipIncidentStatus";

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

  const { assunto, dataIncidente, status = {}, tipos = [], usuarioCopia = {} } = incident;
  const { nome, email, prontuario, nomeCurso, turma, urlAvatar } = usuarioCopia || {};
  const temas = tipos.flatMap((t) => [t.tipo]).join(', ');

  return (
    <Card color="transparent" className="w-full max-w-[47%] inline-block border-2 hover:bg-gray-50 px-8 pt-2 pb-3 ml-4 mb-4" onClick={onClick}>
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
            <Typography variant="h5" color="blue-gray">{assunto}</Typography>
          </div>
          <Typography color="blue-gray">{nome} <EnvelopeIcon className="h-8 w-6 inline ml-3 mr-1 mb-1" /> {email}</Typography>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <hr />
        <span className="grid grid-cols-5 gap-y-2 my-4">
          <span className="col-span-1">
            <Typography variant="h6">Prontuário</Typography>
            <Typography>{prontuario}</Typography>
          </span>

          <span className="col-span-4">
            <Typography variant="h6">Curso</Typography>
            <Typography>{nomeCurso}</Typography>
          </span>

          <span className="col-span-1">
            <Typography variant="h6">Turma</Typography>
            <Typography>{turma}</Typography>
          </span>

          <span className="col-span-4">
            <Typography variant="h6">Temas</Typography>
            <Tooltip title={temas} mouseEnterDelay={0.2} >
              <Typography className="-ml-2 text-ellipsis overflow-hidden whitespace-nowrap">
                {tipos.map((t) => (
                  <><StarIcon className="h-6 w-6 inline mr-1 ml-2 mb-1"></StarIcon>
                    {t?.tipo}</>
                ))}
              </Typography>
            </Tooltip>
          </span>
        </span>

        <div className="flex justify-between items-center">
          <Typography ><CalendarDaysIcon className="h-6 w-6 inline mr-2 mb-1" />{convertDateBars(new Date(dataIncidente))}</Typography>
          <ChipIncidentStatus status={status?.idStatus} />
        </div>
      </CardBody>
    </Card>
  );
}
