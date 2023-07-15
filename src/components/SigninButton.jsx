import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function SigninButton()
{

    const {t} = useTranslation()
    
    return(
        <Link to="/signin">
            <div 
                className="
                    font-bold
                    rounded-lg
                    p-2
                    sm:text-base
                    text-xs
                ">
                {t("signIn")}
            </div>
        </Link>
    );


}