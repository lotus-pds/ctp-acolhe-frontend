import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { patchSubscriptionVerification } from "../services/subscribe-signin";
import { useEffect } from "react";

export function EmailConfirmation() {
    
    const { token } = useParams();

    const {t} = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        const subscriptionVerification = async () => {
            await patchSubscriptionVerification(token);
            navigate('/cadastro/sucesso');
        }
        subscriptionVerification();
    }, []);

    return(
        <div>

        </div>
    )
}