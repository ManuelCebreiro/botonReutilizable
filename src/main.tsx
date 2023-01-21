import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Boton from "./components/Boton";
import styled from "styled-components";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Boton
      primary
      hoverPrimary
    />
    <Boton
      secondary
      hoverSecondary
    />
    <Boton
      terciary
      hoverTerciary
    />
    <Boton
      noBG
      hoverNoBg
    />
  </React.StrictMode>
);
