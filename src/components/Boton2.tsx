import React, { useState } from "react";
import styled, { css } from "styled-components";
import botones from "../media/botones.jpeg";
import { MdDone } from "react-icons/md";


export interface IdBtn {
  icon: boolean;
  color: string;
  // background: "primary" | "secondary" | "terciary" | "noBG";      //color texto
  background: string;
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
  justify-content: center;
  font-size: ${props => props.size || "16px"};
  /* ${(props) => props.background && COLOR[props.background] || COLOR.noBG};    */
  //aqui estoy definiendo con anterioridad unos colores en una constante, para tener los 4 tipos

  background-color: ${props => COLOR[props.background]|| COLOR.noBG};
  color: ${props => props.color || "black"};   //a la propiedad color le paso un prop variable para poder modificarlo segun necesidad
  &:hover {
    background-color: ${props => COLOR[props.background] || COLOR.sombra};


    filter: brightness(80%);

  }
  &:disabled {      //estilo para disabled
    opacity: 0.4;
    cursor: not-allowed;
    /* background: ${props => props.background}; */
    filter: brightness(100%);

  }
  ${props => props.icon && css`
    width: 150px;
    justify-content: space-between;
  `}
  `;
  
  const COLOR= {
    primary: "#114B35",
    secondary: "#E7EDEB",
    terciary: "#9E81F6",
    noBG: "transparent",
    sombra: "#A5A5A6"
  }

  // const COLOR= {
  //   primary: css`
  //     background-color: #114B35;
  //   `,
  //    secondary: css`
  //    background-color: #E7EDEB;
  //  `,
  //    terciary: css`
  //    background-color: #9E81F6;
  //  `,
  //   noBG: css`
  //   background-color: "transparent";
  // `
  // }



function Boton2(props) {
  
  const {children, icon} = props
  // console.log(icon)
  return (
    <>
      <Botton {...props}>
        <>{children}</>
        {icon?<MdDone size={30}/>:""}

      </Botton>
    </>
  );
}

export default Boton2;
