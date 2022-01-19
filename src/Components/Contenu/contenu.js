import React, { useContext } from "react";
import "../Contenu/contenu.css";
import { ThemeContext } from "../Context/ThemeContext";

export default function Contenu() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "contenu light" : "contenu dark"}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sapiente
        deleniti atque aspernatur provident, exercitationem eum quos cupiditate
        blanditiis recusandae! Magnam, ad porro minus sapiente magni architecto
        minima accusamus illo.
      </p>
      {theme}
    </div>
  );
}
