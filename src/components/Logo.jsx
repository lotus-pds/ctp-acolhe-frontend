import { Link } from "react-router-dom"
import { useTheme } from "../hooks/useTheme";

export function Logo()
{   

    const {theme} = useTheme()

    if(theme === "light"){
        return (
            <Link
                to={'/'}
            >
                <img 
                    src="https://github.com/lotus-pds/ctp-acolhe-assets/blob/main/img/logo_light.png?raw=true"
                    className="sm:w-[120px] w-[80px]"
                />
            </Link>
        );
    }
    return (
        <Link
            to={'/'}
        >
            <img 
                src="https://github.com/lotus-pds/ctp-acolhe-assets/blob/main/img/logo_dark.png?raw=true"
                className="sm:w-[120px] w-[80px]"
            /> 
        </Link>
    );   
}