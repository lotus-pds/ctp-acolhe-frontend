import { Calendar } from 'antd';
import { convertDateHyphen, getFirstAndLastDateOfMonth } from '../../../common/general';
import { EMOTIONS } from '../../../common/constants';
import { GnChip } from '../../common/chip/GnChip';

export const EmotionCalendar = (props) => {
    const { emotions, localGetEmotion } = props;

    const LOCAL_EMOTIONS = EMOTIONS();

    const monthCellRender = (value) => { };

    const dateCellRender = (value) => {
        let emotion = emotions.filter(e => e?.dataHumor == convertDateHyphen(value.toDate()))[0];
        let emotionData = LOCAL_EMOTIONS.filter(e => e?.id == emotion?.idSentimento)[0];

        if (emotionData != undefined) {
            return (
                <div className="flex flex-row items-center justify-center">
                    <img className="h-[70px] mr-[10px]" src={emotionData?.img} />
                    <GnChip
                        value={emotionData?.desc}
                        color={emotionData?.color}
                    />
                </div>
            );

        }
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
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
            cellRender={cellRender}
            className="w-[90%] p-[20px] mb-[20px] mt-[40px] rounded"
        />
    );
};