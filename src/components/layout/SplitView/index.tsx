import React from "react";
import styled from "styled-components";
import { LeftView } from "../feftView/LeftView";
import { resourceImage } from "../../../assets";
import { Screen } from "../../../styles/constants/Screen";

interface SplitLayoutProps {
  children: React.ReactNode;
}

const SplitLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  background-image: url(${resourceImage.mainBg});
  background-position: center;
  background-size: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: ${Screen.TABLET1}) and (max-width: ${Screen.TABLET2}) {
    display: none;
  }
`;

const RightSide = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SplitView: React.FC<SplitLayoutProps> = ({ children }) => {
  return (
    <SplitLayoutContainer>
      <LeftSide>
        <LeftView />
      </LeftSide>
      <RightSide>{children}</RightSide>
    </SplitLayoutContainer>
  );
};
