import React, { Children, useState } from "react";
import styled, { css } from "styled-components";
import botones from "../media/botones.jpeg";
import { MdDone } from "react-icons/md";


export interface IdBtn {
  primary: boolean;
  secondary: boolean;
  terciary: boolean;
  noBG: boolean;
  icon: boolean;
}



const Botton = styled.button<IdBtn>`
  width: 126px;
  height: 48px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  padding: 12px 16px 12px 16px;
  font-size: 16px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(active) =>
    active.primary
      ? "#114B35"
      : active.secondary
      ? "#E7EDEB"
      : active.terciary
      ? "#9E81F6"
      : active.noBG
      ? "transparent"
      : ""};
  color: ${(props) =>
    props.primary
      ? "white"
      : props.secondary
      ? "black"
      : props.terciary
      ? "white"
      : props.noBG
      ? "black"
      : ""};
  &:hover {
    background: ${(active) =>
      active.primary
        ? "#134034"
        : active.secondary
        ? "#BDC1C3"
        : active.terciary
        ? "#836BCB"
        : active.noBG
        ? "#A5A5A6"
        : ""};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: ${(active) =>
      active.primary
        ? "#618176"
        : active.secondary
        ? "#CED0CF"
        : active.terciary
        ? "#B8A8DE"
        : active.noBG
        ? "transparent"
        : ""};

  }
  ${props => props.icon && css`
    width: 150px;
    justify-content: space-between;

  `}

`;

function Boton(activo) {
  
  const {active, icon, children} = activo
  console.log(icon)
  return (
    <>
      <Botton {...activo}>
        {children}
        {icon?<MdDone size={30}/>:""}

      </Botton>
    </>
  );
}

export default Boton;
