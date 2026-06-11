import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useTheme = () => {
    const theme = useSelector((state) => state.theme.mode);
    
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme == "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme])

    return theme;
}