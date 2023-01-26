import styled, { css } from "styled-components";


export const themes = {
  colores:{
    primary : "#114B35",
    secondary : "#E7EDEB",
    terciary : "#9E81F6",
    noBG : "transparent",
    default : "#000",
    textColor : "#fff",
  },
  default: {
    bG: "#E7EDEB",
    color: "#000",
    size: "16px"
  },
  primary :{
    bG: "#114B35",
    color: "#fff",
    size: "16px"
  },
  secondary :{
    bG: "#E7EDEB",
    color: "#000",
    size: "16px"
  },
  terciary :{
    bG: "#9E81F6",
  color: "#fff",
  size: "16px"
  },
  noBG :{
    bG: "transparent",
    color: "#000",
    size: "16px"
    },
};
export interface IdBtn {
  icon: React.ReactNode;
  color: string;
  background: string;
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
  background-color: ${({ background }) => {console.log(themes.colores[background], "fuck"); return themes.colores[background]}};
  color: ${({ color }) => color};
  &:hover {
    background-color: ${({ background }) => {console.log(themes.colores[background], "esto"); return themes.colores[background]  === "transparent" ? "white" : themes.colores[background]}};
  color: ${({ color }) => color};
    
    filter: brightness(80%);
  }
  &:disabled {
    //estilo para disabled
    opacity: 0.4;
    cursor: not-allowed;
    filter: brightness(100%);
  }
  ${(props) =>
    props.icon &&
    css`
      width: 150px;
      justify-content: space-between;
    `}
`;

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  background?: string;
  size?: string;
  [x: string]: any;
};

function Boton4({
  children,
  icon,
  color,
  background,
  size,
  ...others
}: ButtonProps) {
  // console.log(icon)
  return (
    <Botton
      icon={icon}
      color={color || "black"}
      background={background || themes.noBG.bG}
      size={size || "16px"}
      {...others}
    >
      {children}
      {icon}
    </Botton>
  );
}

export default Boton4;
