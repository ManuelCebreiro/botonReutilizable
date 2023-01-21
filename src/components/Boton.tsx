import React, {useState} from "react";
import styled from "styled-components";

export interface IdBtn {
  primary: boolean
  secondary: boolean
  terciary: boolean
  noBG: boolean
  isDisabled: boolean

  
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
  background: ${(active) => (active.primary ? "#115200" : active.secondary ? "white" : active.terciary ? "#b194bd" : active.noBG ? "transparent" : "")};
  color: ${(props) => (props.primary ? "black" : props.secondary ? "black" : props.terciary ? "white" : props.noBG ? "black" : "")};
  &:hover {
    opacity: 0.5;
  }
  &:disabled{
    opacity: 0.4;
  }
  
`;

function Boton(active, isDisabled) {
  
  return (
    <Container>
      <Botton 
      {...active}
      // {...isDisabled}
      
      >Button label</Botton>
    </Container>
  );
}

export default Boton;




