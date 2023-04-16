import { Link } from "react-router-dom"

export function Logo()
{
    return (
        <Link
            to={'/'}
        >
            <img 
                src="src/assets/img/ctp-acolhe-logo.png"
                className="w-[120px]"
            />
        </Link>
    );
}