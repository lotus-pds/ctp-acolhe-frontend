import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";
import { LanguageButton } from "./LanguageButton";

export function SecondHeader () {

    
    
    return (
        <header className="w-full px-6 py-3 flex items-center justify-between z-50 relative">
            <div 
                className="ml-12"
            >
                <Logo/>
            </div>
            <div
                className="w-[300px] flex items-center justify-evenly"
            >
                <LanguageButton/>
                <ThemeButton/>
            </div>
        </header>
    );
}