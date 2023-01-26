import styled, { css } from "styled-components";

enum COLOR {
  primary = "#114B35",
  secondary = "#E7EDEB",
  terciary = "#9E81F6",
  noBG = "transparent",
  default = "#000",
  textColor = "#fff",
}

export const themes = {
  default: {
    background: COLOR.secondary,
    color: COLOR.default,
    size: "16px"
  },
  primary :{
    background: COLOR.primary,
    color: COLOR.textColor,
    size: "16px"
  },
  secondary :{
    background: COLOR.secondary,
    color: COLOR.default,
    size: "16px"
  },
  terciary :{
  background: COLOR.terciary,
  color: COLOR.textColor,
  size: "16px"
  },
  noBG :{
    background: COLOR.noBG,
    color: COLOR.default,
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
  background-color: ${({ background }) => COLOR[background]};
  color: ${({ color }) => color};
  &:hover {
    background-color: ${({ background }) => COLOR[background] };
    filter: brightness(80%);
  }
  &:disabled {
    //estilo para disabled
    background-color: ${({ background }) =>  COLOR[background] };
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

function Boton2({
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
      background={background || COLOR.noBG} 
      
      size={size || "16px"}
      {...others}
    >

      {children}
      {icon}
    </Botton>
  );
}

export default Boton2;
