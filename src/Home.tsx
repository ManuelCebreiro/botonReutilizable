import { MdAccountTree, MdDone } from "react-icons/md";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./components/Boton3";
import Boton2 from "./components/Boton2";
import Boton3 from "./components/Boton3";

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
          {/* <BotonNoBg>Boton prueba</BotonNoBg> 

          <BotonTerciary>Boton 2</BotonTerciary>

          <Boton3 background="primary" size="16px" disabled>
            Boton 20
          </Boton3>

          <Boton3
            background="primary"
            color="white"
            size="16px"
            icon={<MdDone size={25} />}
          >
            Boton 2
          </Boton3>
          <CustomedButton
            background="primary"
            size="16px"
            icon={<MdAccountTree size={25} />}
          >
            Boton 5
          </CustomedButton>  */}
          <BotonPrimary> Button Label1</BotonPrimary>
          <BotonPrimary> Button Label</BotonPrimary>
          <BotonPrimary disabled> Button Label</BotonPrimary>
          <BotonPrimary icon={<MdDone size={25} />}>Button Label</BotonPrimary>
          <BotonPrimary icon={<MdDone size={25} />}>Button Label</BotonPrimary>

          <BotonSecondary>Button secondary</BotonSecondary>
          <BotonSecondary>Button Label</BotonSecondary>
          <BotonSecondary disabled>Button Label</BotonSecondary>
          <BotonSecondary icon={<MdDone size={25} />}>Button Label</BotonSecondary>
          <BotonSecondary icon={<MdDone size={25} />}>Button Label</BotonSecondary>

          
          <BotonTerciary>Button Label3</BotonTerciary>
          <BotonTerciary>Button Label</BotonTerciary>
          <BotonTerciary disabled>Button Label</BotonTerciary>
          <BotonTerciary icon={<MdDone size={25} />}>Boton 2</BotonTerciary>
          <BotonTerciary icon={<MdDone size={25} />}>Boton 2</BotonTerciary>

          <BotonNoBg>Button LABEL</BotonNoBg>
          <BotonNoBg>Button Label</BotonNoBg>
          <BotonNoBg disabled>Button Label</BotonNoBg>
          <BotonNoBg icon={<MdDone size={25} />}>Button Label</BotonNoBg>
          <BotonNoBg icon={<MdDone size={25} />}>Button Label</BotonNoBg>
        
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
  background-color: ${({theme}) => {console.log(theme.primary.background,"este es el color del background"); return theme.primary.background}};
  color: ${({ theme }) => {console.log(theme.primary.color,"este es el color de texto"); return theme.primary.color}};
`;

const BotonSecondary = styled(Boton3)`
  background-color: ${(props) => props.theme.secondary.background};
  color: ${({ theme }) => theme.secondary.color};
`;

const BotonTerciary = styled(Boton3)`
  background-color: ${(props) => props.theme.terciary.background};
  color: ${({ theme }) => theme.terciary.color};
  border: 3px solid ${({ theme }) => theme.default.color};

`;

const BotonNoBg = styled(Boton3)`
  background-color: ${(props) => {console.log(props.theme.noBG.background,"este es el color del background");return (props.theme.noBG.background)}};
  color: ${(props) => {console.log(props.theme.noBG.color,"este es el color de texto"); return(props.theme.noBG.color)}};
  border: 1px solid ${({ theme }) => theme.default.color};

`;
