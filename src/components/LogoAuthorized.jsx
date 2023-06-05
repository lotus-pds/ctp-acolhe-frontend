import { Link } from "react-router-dom"
import { useTheme } from "../hooks/useTheme";

export function LogoAuthorized()
{   

    const {theme} = useTheme()

    if(theme === "light"){
        return (
            <Link
                to={'/posts'}
            >
                <img 
                    src="https://media.discordapp.net/attachments/1077345452694970438/1099690236369444924/Logo_1.png?width=1020&height=397"
                    className="w-[120px]"
                />
            </Link>
        );
    }
    return (
        <Link
            to={'/posts'}
        >
            <img 
                src="https://media.discordapp.net/attachments/1077345452694970438/1099690236637892628/Logo.png?width=1020&height=397"
                className="w-[120px]"
            />
        </Link>
    );   
}