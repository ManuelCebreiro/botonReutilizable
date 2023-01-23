import { MdAccountTree, MdDone } from "react-icons/md";
import styled from "styled-components";
import Boton2 from "./components/Boton2";

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
        <Boton2 background="noBG" color="black">
          Boton 2
        </Boton2>

        <Boton2 background="primary">Boton 2</Boton2>

        <Boton2 size="16px" disabled>
          Boton 2
        </Boton2>

        <Boton2
          background="primary"
          color="white"
          size="16px"
          icon={<MdDone size={25} />}
        >
          Boton 2
        </Boton2>
        <CustomedButton
          background="primary"
          size="16px"
          icon={<MdAccountTree size={25} />}
        >
          Boton 2
        </CustomedButton>
      </ContenidoHome>
    </Contenido>
  );
}

export default Home;

const CustomedButton = styled(Boton2)`
  color: red;
`;
