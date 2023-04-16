import { Link } from "react-router-dom";

export function SigninButton()
{

   
    return(
        <Link to="/signin">
            <div 
                className="
                    font-bold
                    rounded-lg
                    p-2
                ">
                Entrar
            </div>
        </Link>
    );


}