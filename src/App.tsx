import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Box } from "./components/box/Box";
// import LandingPageComponent from "./components/landingPageComponent/LandingPageComponent";

const App: React.FC = () => {
  return (
    <Wrapper>
      <main>
        <Outlet />
      </main>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export default App;
