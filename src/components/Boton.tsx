import React from "react";
import styled from "styled-components";

export interface IdBtn {
  primary: boolean
  secondary: boolean
  terciary: boolean
  noBG: boolean
  hoverPrimary: boolean
  hoverSecondary: boolean
  hoverTerciary: boolean
  hoverNoBg: boolean
  
}
const Container = styled.div`
  width: 100vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  display: inline;

`;

const Botton = styled.button<IdBtn>`
  width: 126px;
  height: 48px;
  top: 20px;
  left: 20px;
  border-radius: 8px;
  padding: 12px 16px 12px 16px;
  font-size: 16px;
  border: none;
  background: ${(props) => (props.primary ? "#115200" : props.secondary ? "white" : props.terciary ? "#b194bd" : props.noBG ? "transparent" : "")};
  color: ${(props) => (props.primary ? "black" : props.secondary ? "black" : props.terciary ? "white" : props.noBG ? "black" : "")};
  &:hover {
    background-color: ${(estilo) => (estilo.hoverPrimary ? "#274220" : estilo.hoverSecondary ? "grey" : estilo.hoverTerciary ? "#a067b5" : estilo.hoverNoBg ? "red" : "")};
  }

`;


function Boton(props, estilo) {
  return (
    <Container>
      <Botton {...props} {...estilo}>Button label</Botton>
    </Container>
  );
}

export default Boton;




