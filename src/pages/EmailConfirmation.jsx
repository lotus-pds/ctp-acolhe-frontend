import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { patchSubscriptionVerification } from "../services/subscribe-signin";

export function EmailConfirmation() {
    const params = useParams();

    const { token } = params;

    const {t} = useTranslation();
    const navigate = useNavigate();

    patchSubscriptionVerification(token);

    navigate('/access-confirmation');

    return(
        <div>

        </div>
    )
}