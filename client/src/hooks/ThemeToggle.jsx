import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/theme/themeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode);  

  return (
    <button onClick={() => dispatch(toggleTheme())}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="hover:cursor-pointer"/>
    </button>
  )
}

export default ThemeToggle
