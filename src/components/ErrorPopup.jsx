import { GnPopup } from "./common/popup/GnPopup";
import { GnButton } from "./common/button/GnButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inactivateErrorPopup } from "../redux/features/errorPopupSlice";
import { useTranslation } from "react-i18next";

export const ErrorPopup = (props) => {
    const { open, message } = useSelector(state => state.errorPopup);

    const dispatch = useDispatch();

    const { t } = useTranslation();

    return (
        <GnPopup
            open={open}
            type='ERROR'
            text={message}
            btn={
                <GnButton
                    color="RED"
                    onClick={() => dispatch(inactivateErrorPopup())}
                >
                    OK
                </GnButton>
            }
        />
    );
}