import React from "react";
import Boton from "./components/Boton";
import Boton2 from "./components/Boton2";
import styled from "styled-components";

const Contenido = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenidoHome = styled.div`
  width: 800px;
  height: 350px;
  background-color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  border: 5px dashed #5f049c33;
`;

function Home() {
  return (
    <Contenido>
      <ContenidoHome>
        <Boton primary>Boton 1</Boton>
        <Boton primary>Boton 1</Boton>
        <Boton primary disabled>Boton 1</Boton>
        <Boton primary icon>Boton 1</Boton>
        <Boton primary icon>Boton 1</Boton>

        <Boton secondary>Boton 1</Boton>
        <Boton secondary>Boton 1</Boton>
        <Boton secondary disabled>Boton 1</Boton>
        <Boton secondary icon>Boton 1</Boton>
        <Boton secondary icon>Boton 1</Boton>

        <Boton terciary>Boton 1</Boton>
        <Boton terciary>Boton 1</Boton>
        <Boton terciary disabled>Boton 1</Boton>
        <Boton terciary icon>Boton 1</Boton>
        <Boton terciary icon>Boton 1</Boton>

        <Boton noBG>Boton 1</Boton>
        <Boton noBG>Boton 1</Boton>
        <Boton noBG disabled>Boton 1</Boton>
        <Boton noBG icon>Boton 1</Boton>
        <Boton noBG icon>Boton 1</Boton>

      
        <Boton2
          background="noBG"
          color="black"
          
        >
          Boton 2
        </Boton2>

          <Boton2
          background="primary"
          disabled
          >
          Boton 2
        </Boton2>

        <Boton2 size="16px" disabled>
          Boton 2
        </Boton2>

        <Boton2
          background="primary"
          color="white"
          size="16px"
          icon>Boton 2</Boton2>
        <Boton2
          background="primary"
          color="white"
          size="16px"
          icon>Boton 2</Boton2>
        
      </ContenidoHome>
    </Contenido>
  );
}

export default Home;
