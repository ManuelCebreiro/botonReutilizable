import React from 'react'
import Boton from "./components/Boton";
import Boton2 from "./components/Boton2";
import styled from 'styled-components';



const Contenido = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContenidoHome = styled.div`
    width: 800px;
    height: 350px;
    background-color: aliceblue;
    display: flex;
    flex-wrap: wrap;
    border: 5px dashed #5f049c33;
    
`

function Home() {
  return (
    <Contenido>
    <ContenidoHome>
    <Boton primary/>
    <Boton primary/>
    <Boton primary disabled/>
    <Boton primary icon/>
    <Boton primary icon/>
 
    <Boton secondary/>
    <Boton secondary />
    <Boton secondary disabled/>
    <Boton secondary icon />
    <Boton secondary icon />
    
    <Boton terciary/>
    <Boton terciary/>
    <Boton terciary disabled/>
    <Boton terciary icon />
    <Boton terciary icon />

    <Boton noBG/>
    <Boton noBG/>
    <Boton noBG disabled/>
    <Boton noBG icon />
    <Boton noBG icon />

    <Boton2
    background="primary"
    color="white"
    text="Label text"
    size="16px"
    
    />
    <Boton2
    background="primary"
    color="white"
    text="Label text"
    size="16px"
    
    
    />
    <Boton2
    background="primary"
    color="white"
    text="Label text"
    size="16px"
    disabled
    
    />
    <Boton2
    background="primary"
    color="white"
    text="Label texto"
    size="16px"
    icon
    
    />
     <Boton2
    background="primary"
    color="white"
    text="Label text"
    size="16px"
    icon
    />
    
    </ContenidoHome>
    </Contenido>
  )
}

export default Home