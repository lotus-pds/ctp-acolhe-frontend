import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { patchSubscriptionVerification } from "../services/subscribe-signin";
import { useEffect } from "react";

export function EmailConfirmation() {
    const params = useParams();

    const { token } = params;

    const {t} = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const subscriptionVerification = async () => {
            await patchSubscriptionVerification(token);
            navigate('/access-confirmation');
        }
        subscriptionVerification();
    }, []);

    return(
        <div>

        </div>
    )
}