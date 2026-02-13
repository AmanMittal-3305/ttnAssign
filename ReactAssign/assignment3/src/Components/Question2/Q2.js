import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import './Q2.css'

function ThemePage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div >
      <h2>{theme.toUpperCase()} MODE</h2>
      <button className="theme-button" onClick={toggleTheme}>
        Toggle Mode
      </button>
    </div>
  );
}

export default ThemePage;
