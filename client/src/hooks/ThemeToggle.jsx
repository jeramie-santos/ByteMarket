import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode);  

  return (
    <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle
