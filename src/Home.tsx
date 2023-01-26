import { MdAccountTree, MdDone } from "react-icons/md";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./components/Boton3";
import Boton2 from "./components/Boton2";
import Boton3 from "./components/Boton3";
import Boton4 from "./components/Boton4";

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
        <ThemeProvider theme={themes}>
          <BotonPrimary background="primary" color="white" size="16px">
            Button label1
          </BotonPrimary>

          <BotonPrimary background="primary" color="white">
            Button label
          </BotonPrimary>

          <BotonPrimary background="primary" color="white" disabled>
            Button label
          </BotonPrimary>

          <BotonPrimary
            background="primary"
            color="white"
            icon={<MdDone size={25} />}
          >
            Button label
          </BotonPrimary>
          <BotonPrimary
            background="primary"
            color="white"
            icon={<MdDone size={25} />}
          >
            Button label
          </BotonPrimary>
          <BotonTerciary background="noBG" size="16px">
            Button label1
          </BotonTerciary>

          <BotonTerciary background="noBG">Button label</BotonTerciary>

          <BotonTerciary background="noBG" disabled>
            Button label
          </BotonTerciary>

          <BotonTerciary background="noBG" icon={<MdDone size={25} />}>
            Button label
          </BotonTerciary>
          <BotonTerciary background="noBG" icon={<MdDone size={25} />}>
            Button label
          </BotonTerciary>
        </ThemeProvider>
      </ContenidoHome>
    </Contenido>
  );
}

export default Home;

const CustomedButton = styled(Boton2)`
  color: white;
`;

const BotonPrimary = styled(Boton3)`

  
  border: 3px dotted white;
`;
const BotonTerciary = styled(Boton3)`
  background-color: ${({ theme }) => {
    console.log(theme.terciary.background, "este es el color del background");
    return theme.terciary.background;
  }};
  &:hover {
    background-color: ${() => {
      console.log(themes.terciary.background, "esto");
      return themes.terciary.background === "transparent"
        ? "white"
        : themes.terciary.background;
    }};
  }
  &:disabled {
    //estilo para disabled
    background-color: ${() => themes.terciary.background};
    opacity: 0.4;
    cursor: not-allowed;
    filter: brightness(100%);
  }
  border: 3px solid BLACK;
`;
