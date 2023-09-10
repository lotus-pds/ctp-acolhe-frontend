import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";
import { LanguageButton } from "./LanguageButton";

export function SecondHeader () {

    
    
    return (
        <header className="w-[100%] sm:py-3 p-1 sm:mt-2 mt-4 grid grid-cols-2 items-center justify-between z-50 relative">
            <div 
                className="flex items-center sm:h-[57px] h-[40px] ml-[2px] justify-start sm:mt-0 mt-[2px] sm:ml-12 p-1 "
            >
                <Logo/>
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