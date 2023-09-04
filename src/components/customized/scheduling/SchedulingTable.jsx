import { TrashIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Card,
  CardBody,
  Tooltip,
  Typography
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { getTimeH } from "../../../common/general";
import { GnButton } from "../../common/button/GnButton";

const TABLE_HEAD = ["Técnico", "Aluno(s)", "Criado Por", "Horário do Atendimento", ""];

export const SchedulingTable = (props) => {
  const { dateScheduling, schedulings, setScheduling, setWarningOpen, setPopup } = props;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <Card className="h-full w-[90%] mt-8 dark:bg-gray-800">
        <CardBody floated={false} >
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex gap-5 mb-4">
              <ChevronLeftIcon
                className="h-10 w-8 inline cursor-pointer dark:text-gray-200 font-normal" onClick={() => navigate('/adm/agendamento')}
              />
              <Typography variant="h2" color="blue-gray" className="font-normal font-mouse sm:text-4xl text-2xl dark:text-gray-200">
                Lista de agendamentos para o dia {dateScheduling}
              </Typography>
            </div>
            <GnButton
              color="GREEN"
              className="p-2 m-3 mb-6"
              onClick={() => {
                setPopup({ open: true, operation: "CREATE" });
              }}
            >
              <PlusIcon className="w-5 h-5" />
            </GnButton>
          </div>
          <hr />
          <div className="mt-4">
            <Typography color="gray" className="mt-2 mb-2 ml-14 dark:text-gray-200 font-normal sm:text-md text-md">
              Estes são os agendamentos de sala para atendimento dos alunos.
            </Typography>
          </div>
        </CardBody>
      </Card>
      <Card className="h-full w-[90%] mt-6 mb-6 dark:bg-gray-800">
        <CardBody className="overflow-x-scroll px-0">
          <table className="mt-2 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-gray-900 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 dark:text-gray-200"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedulings.map(scheduling => {
                const classes = "px-4 border-b border-blue-gray-50";

                return (
                  <tr key={scheduling?.idAgendamento}>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-gray-200"
                        >
                          {scheduling?.nomeTecnico}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-gray-200"
                        >
                          {scheduling?.nomeAlunos}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={scheduling?.criadoPor?.urlAvatar} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal dark:text-gray-200"
                          >
                            {scheduling?.criadoPor?.nome}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70 dark:text-gray-200"
                          >
                            {scheduling?.criadoPor?.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-200"
                      >
                        {getTimeH(new Date(scheduling?.dataAtendimentoInicial)) + "-" + getTimeH(new Date(scheduling?.dataAtendimentoFinal))}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <GnButton
                          color="BLUE"
                          className="p-2 m-3 mb-10"
                          onClick={() => {
                            setScheduling({ ...scheduling });
                            setPopup({ open: true, operation: "UPDATE" });
                          }}
                        >
                          <PencilIcon className="w-5 h-5" />
                        </GnButton>
                      </Tooltip>
                      <Tooltip content="Edit User">
                        <GnButton
                          color="RED"
                          className="p-2 m-3 mb-10"
                          onClick={() => {
                            setScheduling({ ...scheduling });
                            setWarningOpen(true);
                          }}
                        >
                          <TrashIcon className="w-5 h-5" />
                        </GnButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
