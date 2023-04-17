import { Link } from "react-router-dom"

export function Logo()
{
    return (
        <Link
            to={'/'}
        >
            <img 
                src="https://media.discordapp.net/attachments/1077345452694970438/1097572128850714835/ctp-acolhe-logo.png"
                className="w-[120px]"
            />
        </Link>
    );
}