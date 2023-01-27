import { MdDone } from "react-icons/md";
import styled, { ThemeProvider } from "styled-components";
import Boton3 from "./components/Boton3";
import { themes } from "./theme";

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
          <Boton3>Button label1</Boton3>
          <Boton3>Button label</Boton3>
          <Boton3 disabled>Button label</Boton3>
          <Boton3 icon={<MdDone size={25} />}>Button label</Boton3>
          <Boton3 icon={<MdDone size={25} />}>Button label</Boton3>
          <BotonTerciary>Button label1</BotonTerciary>
          <BotonTerciary>Button label</BotonTerciary>
          <BotonTerciary disabled>Button label</BotonTerciary>
          <BotonTerciary icon={<MdDone size={25} />}>
            Button label
          </BotonTerciary>
          <BotonTerciary icon={<MdDone size={25} />}>
            Button label
          </BotonTerciary>
        </ThemeProvider>
      </ContenidoHome>
    </Contenido>
  );
}

export default Home;

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
