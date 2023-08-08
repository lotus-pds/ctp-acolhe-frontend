import { ThemeButton } from "./ThemeButton";
import { LanguageButton } from "./LanguageButton";
import { NavbarUser } from "./NavbarUser";
import { LogoAuthorized } from "./LogoAuthorized";


export function HeaderUser (){

    return (
        <header className="w-full px-6 py-3 flex items-center justify-between z-50 relative">
            <div 
                className="flex items-center sm:h-[57px] h-[40px] ml-[2px] justify-start sm:mt-0 mt-[2px] sm:ml-12 p-1 "
            >
                <LogoAuthorized/>
            </div>
        
            <div>
                <NavbarUser/>
            </div>

            <div
                className="flex items-center ml-12 justify-center sm:gap-[120px] gap-10"
            >
                <LanguageButton/>
                <ThemeButton/>
            </div>
        </header>
    );
}