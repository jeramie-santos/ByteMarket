import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useTheme = () => {
    const theme = useSelector((state) => state.theme.mode);
    
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme == "dark") {
            console.log(theme);
            root.classList.add("dark");
            console.log("added");
        } else {
            console.log(theme);
            root.classList.remove("dark");
            console.log("removed");
        }
    }, [theme])

    return theme;
}