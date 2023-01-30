import styled, { css } from "styled-components";
import React, {useState} from "react";

export interface IdBtn {
  icon: React.ReactNode;
  variant: string;
  size: string; //tamaño texto
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
  font-size: ${({ size }) => size};
  background-color: ${({ variant, theme }) => theme[variant].background};
  color: ${({ variant, theme }) => theme[variant].color};
  &:hover {
    filter: brightness(80%);
    background-color: ${({ variant,theme }) => theme[variant].background === "transparent"
        && "white"
  }};
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: brightness(100%);
    background-color: ${({ variant,theme }) => theme[variant].background === "transparent" && "transparent"};
  }
  ${(props) =>
    props.icon &&
    css`
      width: 150px;
      justify-content: space-between;
    `}
`;

const Loader = styled.span`

    width: 20px;
    height: 20px;
    border: 3px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;




type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: string;
  size?: string;
  [x: string]: any;
};

function Boton3({
  children,
  icon,
  size = "16px",
  variant = "primary",
  ...others
}: ButtonProps) {
  // console.log(icon)
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

function loader(){
  setLoading(true);
  setShow(false)
  setTimeout(() => {
    alert("El loader funciona despues de 2 segundos")

    setLoading(false);
    setShow(true);
  }, 2000);

}

const estilo = loading ? "center" : "";

console.log(estilo)
  return (
    <Botton icon={icon} variant={variant} size={size} {...others} onClick={loader} style={{justifyContent:estilo}}>
      {show && <span >{children}</span>}
      {show && <span>{icon}</span>}
        {loading && <Loader/> }

    </Botton>
  );
}

export default Boton3;
