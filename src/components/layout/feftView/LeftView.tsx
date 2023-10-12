import React from "react";
import styled from "styled-components";
import { resourceImage } from "../../../assets";

export const LeftView = () => {
  return (
    <MainWrapper>
      <Content>
        <Logo src={resourceImage.logo} alt={resourceImage.logo} />
        <div style={{ textAlign: "center", width: "300px" }}>
          The Scholar is an incredibly great and amazing platform for managing
          all matters concerning school
        </div>
        <div style={{ textAlign: "center" }}>
          Be in in charge of your affair
        </div>
        <div style={{ textAlign: "center" }}>Excellently crafted for you</div>
      </Content>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
`;
const Logo = styled.img`
  width: 200px;
`;

const Content = styled.div``;
