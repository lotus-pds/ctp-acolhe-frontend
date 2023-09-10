import { ConfigProvider, theme as themeAntd } from "antd";
import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") !== "dark" ? "light" : "dark"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        const removeOldTheme = theme === "dark" ? "light" : "dark"
        root.classList.remove(removeOldTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme)
    }, [theme]);

    const tokenAntd = () => {
        return theme === "dark" ? {
            colorTextPlaceholder: '#85959E',
            colorBgContainer: '#111B21',
        } : {
           
        };
    };

    const componentsAntd = () => {
        return theme === "dark" ? {
            Calendar: {
                colorBgContainer: "#374045",
                colorSplit: "#85959E"
            }
        } : {
            
        };
    };

    return (
        <ConfigProvider theme={{ algorithm: theme === "dark" ? themeAntd.darkAlgorithm : themeAntd.defaultAlgorithm, token: tokenAntd(), components: componentsAntd() }} >
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </ConfigProvider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}