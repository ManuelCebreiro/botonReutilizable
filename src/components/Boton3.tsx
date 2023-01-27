import styled, { css } from "styled-components";

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
  }
  &:disabled {
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
  return (
    <Botton icon={icon} variant={variant} size={size} {...others}>
      {children}
      {icon}
    </Botton>
  );
}

export default Boton3;
