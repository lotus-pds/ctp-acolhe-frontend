import { Logo } from "./Logo";
import { SignupButton } from "./SignupButton";
import { ThemeButton } from "./ThemeButton";
import { LanguageButton } from "./LanguageButton";
import { SigninButton } from "./SigninButton";


export function Header () {

    
    
    return (
        <header className="w-[100%] sm:py-3 grid grid-cols-3 items-center z-50 relative">
            <div 
                className="flex items-center justify-start sm:ml-12 ml-[2px] p-1" 
            >
                <Logo/>
            </div>
            <div
                className="flex w-50 items-center justify-evenly gap-4 sm:mr-0 mr-12"
            >
                <LanguageButton/>
                <ThemeButton/>
            </div>
            
            <div
                className=" p-1 flex items-center justify-end sm:gap-6 sm:mr-12"
            >
                <SigninButton />
                <SignupButton/>
            </div>
            
        </header>
    );
}