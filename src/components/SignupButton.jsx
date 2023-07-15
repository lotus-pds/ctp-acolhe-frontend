import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function SignupButton()
{   

    const {t} = useTranslation()

    return(
        <Link to="/subscribe">
            <div 
                className="
                    
                    font-bold
                    rounded-lg
                    p-2
                    border-solid
                    border-2
                    border-gray-900
                    dark:border-gray-200
                    sm:text-base
                    text-xs
                ">
                {t("signUp")}
            </div>
        </Link>
    );
}