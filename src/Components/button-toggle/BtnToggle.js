import React from "react";
import "./BtnToggle.css";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react/cjs/react.development";

export default function BtnToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={theme ? "btn-toggle goLight" : "btn-toggle goDark"}
    >
      {theme ? "Dark" : "Light"}
    </div>
  );
}
