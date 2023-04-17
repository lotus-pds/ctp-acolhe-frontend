import { Link } from "react-router-dom";

export function SignupButton()
{   
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
                ">
                Cadastrar
            </div>
        </Link>
    );
}