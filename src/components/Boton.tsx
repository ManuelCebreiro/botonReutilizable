import React from "react";
import styled from "styled-components";

export interface Props {
  primary: boolean
  // secondary: boolean
  // terciary: boolean
  // noBG: boolean
  
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 126px;
  height: 48px;
  top: 20px;
  left: 20px;
  border-radius: 8px;
  padding: 12px 16px 12px 16px;
  font-size: 16px;
  background: ${(props: Props) => (props.primary ? "#034426" : "#3c7f8b")};
`;


function Boton(props) {
  return (
    <Container>
      <Button primary>Button label</Button>
    </Container>
  );
}

export default Boton;




