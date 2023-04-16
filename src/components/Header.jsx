import { Logo } from "./Logo";
import { SignupButton } from "./SignupButton";
import { ThemeButton } from "./ThemeButton";
import { LanguageButton } from "./LanguageButton";
import { SigninButton } from "./SigninButton";


export function Header () {

    
    
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
            
            <div
                className="w-[200px] flex items-center justify-around gap-2"
            >
                <SigninButton />
                <SignupButton/>
            </div>
            
        </header>
    );
}