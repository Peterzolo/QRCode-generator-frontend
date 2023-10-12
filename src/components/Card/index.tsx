import React, { ReactNode } from "react";
import styled from "styled-components";
import { Screen } from "../../styles/constants/Screen";

interface BoxProps {
  className?: string;
  children?: ReactNode;
  display?: "flex" | "block" | "none";
  width?: string;
  height?: string;
}

const StyledBox = styled.div<BoxProps>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${(props) => props.theme.cardBackground.bg};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) =>
    props.display === "flex"
      ? "flex"
      : props.display === "none"
      ? "none"
      : "block"};

  @media (max-width: ${Screen.MOBILE}px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${Screen.DESKTOP}px) {
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: ${Screen.TABLET1}px) and (max-width: ${Screen.TABLET2}px) {
    width: 70%;
    height: 70%;
  }
`;

const MobileStyle = styled(StyledBox)``;
const TabletStyle = styled(StyledBox)``;
const FullScreenStyle = styled(StyledBox)``;

export const Card: React.FC<BoxProps> = ({ children, display, className }) => {
  const screenWidth: number = window.innerWidth;
  const mobileWidth: number = parseInt(Screen.MOBILE, 10);
  const desktopWidth: number = parseInt(Screen.DESKTOP, 10);
  const tablet1Width: number = parseInt(Screen.TABLET1, 10);
  const tablet2Width: number = parseInt(Screen.TABLET2, 10);

  let StyledComponent = StyledBox;

  if (screenWidth <= mobileWidth) {
    StyledComponent = MobileStyle;
  } else if (screenWidth >= desktopWidth) {
    StyledComponent = FullScreenStyle;
  } else if (screenWidth >= tablet1Width && screenWidth <= tablet2Width) {
    StyledComponent = TabletStyle;
  }

  return (
    <StyledComponent className={`box ${className}`} display={display}>
      {children}
    </StyledComponent>
  );
};
