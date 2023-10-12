import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";

interface StandAloneProps {
  children: ReactNode;
}

const GrayBackgroundLayout = styled.div`
  background-color: ${theme.backgroundColor.lightGreyBg};
  padding: 20px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StandAlone: React.FC<StandAloneProps> = ({ children }) => {
  return <GrayBackgroundLayout>{children}</GrayBackgroundLayout>;
};
