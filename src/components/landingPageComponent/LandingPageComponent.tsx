import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { carouseImages, resourceImage } from "../../assets";
import { Screen } from "../../styles/constants/Screen";
import { theme } from "../../components/theme/Theme";

const LandingPageComponent = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/auth/login");
    console.log("Handle login works");
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderContainer>
          <Welcome>Welcome To</Welcome>
          <Logo src={resourceImage.logo} alt={resourceImage.logo} />
        </HeaderContainer>
        <ButtonGroup>
          <Button type="primary" width="50%" onClick={handleGoToLogin}>
            Login To School
          </Button>
          <Button type="secondary" width="50%">
            Create A School
          </Button>
        </ButtonGroup>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${carouseImages.image004});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Screen.MOBILE}) {
    width: 350px;
  }

  @media (max-width: ${Screen.TABLET1}${Screen.TABLET2}) {
    width: 400px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.backgroundColor.whiteBg};
  border-radius: 10px;
  padding-bottom: 40px;
  opacity: 5px;
  @media (max-width: ${Screen.MOBILE}) {
    width: 300px;
    padding-bottom: 40px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 10px;
  gap: 20px;
  @media (max-width: ${Screen.MOBILE}) {
    flex-direction: column;
    width: 300px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  opacity: 2px;

  @media (max-width: ${Screen.MOBILE}) {
    flex-direction: column;
    width: 200px;
    padding: 5px;
    border-radius: 5px;
  }
`;
const Logo = styled.img`
  width: 100px;
  border-radius: 100%;
  @media (max-width: ${Screen.MOBILE}) {
    width: 100px;
    margin-left: 90px;
    margin-top: 10px;
  }
`;
const Welcome = styled.div`
  font-size: 30px;
  color: ${theme.mainColor.secondary};
  letter-spacing: 16px;
  @media (max-width: ${Screen.MOBILE}) {
    font-size: 18px;
    text-align: center;
    margin-left: 100px;
    margin-top: 50px;
  }
`;

export default LandingPageComponent;
