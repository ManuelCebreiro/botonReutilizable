import React, { useState } from "react";
import styled, { css } from "styled-components";
import botones from "../media/botones.jpeg";
import { MdDone } from "react-icons/md";


export interface IdBtn {
  icon: boolean;
  color: string;
  background: "primary" | "secondary" | "terciary" | "noBG";      //color texto
  size: any;          //tamaño texto
  text: string;       //texto
  estilo: any;
}



const Botton = styled.button<IdBtn>`
  width: 126px;
  height: 48px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  padding: 12px 16px 12px 16px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.size};
  ${(props) => props.background && COLOR[props.background]}   //aqui estoy definiendo con anterioridad unos colores en una constante, para tener los 4 tipos
  color: ${props => props.color};   //a la propiedad color le paso un prop variable para poder modificarlo segun necesidad
  ${props => props.estilo}
  &:hover {
    background: ${props => props.background};
    filter: brightness(80%);

  }
  &:disabled {      //estilo para disabled
    opacity: 0.4;
    cursor: not-allowed;
    background: ${props => props.background};
    filter: brightness(100%);

  }
  ${props => props.icon && css`
    width: 150px;
    /* display: flex; */
    /* align-items: center; */

  `}

  `;
  const COLOR= {
    primary: css`
      background-color: #114B35;
    `,
     secondary: css`
     background-color: #E7EDEB;
   `,
     terciary: css`
     background-color: #9E81F6;
   `,
    noBG: css`
    background-color: "transparent";
  `
  }


function Boton2(props) {
  
  const {background, color, text, size, icon, estilo} = props
  // console.log(icon)
  return (
    <>
      <Botton {...props}>
        <>{text}</>
        {icon?<MdDone size={30}/>:""}

      </Botton>
    </>
  );
}

export default Boton2;
