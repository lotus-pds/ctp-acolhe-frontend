import { Tooltip, Typography } from '@material-tailwind/react';
import { Calendar, Modal } from 'antd';
import localeEn from 'antd/es/date-picker/locale/en_US';
import localePt from 'antd/es/date-picker/locale/pt_BR';
import 'dayjs/locale/en';
import 'dayjs/locale/pt-br';
import { EMOTIONS } from '../../../common/constants';
import { concatStrings, convertDateBars, convertDateHyphen, getFirstAndLastDateOfMonth } from '../../../common/general';
import { GnButton } from '../../common/button/GnButton';
import { GnChip } from '../../common/chip/GnChip';
import { useState } from 'react';

export const EmotionCalendar = (props) => {
    const { emotions, localGetEmotion } = props;

    const LOCAL_EMOTIONS = EMOTIONS();

    const [modalOpen, setModalOpen] = useState(false);

    const monthCellRender = (value) => { };

    const [emotionSelected, setEmotionSelected] = useState({});

    const filterMood = (value) => {
        let emotion = emotions.filter(e => e?.dataHumor == convertDateHyphen(value.toDate()))[0];
        let emotionData = LOCAL_EMOTIONS.filter(e => e?.id == emotion?.idSentimento)[0];

        return { emotion, emotionData };
    }

    const dateCellRender = (value) => {
        let { emotionData } = filterMood(value);

        if (emotionData != undefined) {
            return (
                <div className="flex flex-row items-center justify-center overflow-hidden">
                    <img className="h-[70px] mr-[10px] sm:block hidden" src={emotionData?.img} />
                    <GnChip
                        value={emotionData?.desc}
                        color={emotionData?.color}
                        className="text-[0.7em] sm:block hidden"
                    />
                    <Tooltip
                        content={
                            <div className="w-70">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal opacity-80"
                                >
                                    {emotionData?.desc}<br />
                                </Typography>
                            </div>
                        }
                    >
                        <GnButton
                            fullWidth={true}
                            size="sm"
                            color={emotionData?.color}
                            className="h-8 block sm:hidden scale-50 rounded-full"
                        />
                    </Tooltip>
                </div>
            );
        }
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    const language = localStorage.getItem("i18nextLng");

    const openModal = (value) => {
        const selected = filterMood(value)
        if (selected.emotion && selected.emotion.descricao) {
            setEmotionSelected(selected);
            setModalOpen(!modalOpen);
        }
    }

    return (
        <>
            <Calendar
                onPanelChange={(date, mode) => {
                    let firstSelectedMonthDay = getFirstAndLastDateOfMonth(date.toDate()).firstDate;
                    let firstCurrentMonthDay = getFirstAndLastDateOfMonth(new Date()).firstDate;

                    if (mode == 'month') {
                        if (firstSelectedMonthDay <= firstCurrentMonthDay) {
                            localGetEmotion(date.year(), date.month());
                        }
                    }
                }}
                onSelect={(date) => openModal(date)}
                cellRender={cellRender}
                className="w-[90%] p-[20px] mb-[20px] mt-[40px] rounded-2xl"
                locale={language == "pt" ? localePt : localeEn}
            />
            <Modal
                open={modalOpen}
                title={concatStrings([emotionSelected?.emotion?.dataHumor, emotionSelected?.emotion?.idSentimento]) }
                onCancel={() => {
                    setModalOpen(!modalOpen);
                    setEmotionSelected({});
                }}
                className="max-h-[90vh] overflow-auto p-8"
                width={700}
                footer={[]}
            >
                {emotionSelected?.emotion?.descricao}
            </Modal>
        </>
    );
};