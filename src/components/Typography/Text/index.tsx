import React, { ReactNode } from "react";
import styled from "styled-components";
import { Screen } from "../../../styles/constants/Screen";

interface TextProps {
  className?: string;
  children?: ReactNode;
  display?: "flex" | "block" | "none";
  width?: string;
  height?: string;
  onClick?: () => void;
  // Additional props specific to a text input, e.g., color, fontSize, etc.
  color?: string;
  fontSize?: string;
}

const StyledText = styled.p<TextProps>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  padding: 10px;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) =>
    props.display === "flex"
      ? "flex"
      : props.display === "none"
      ? "none"
      : "block"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "16px"};

  /* Add any additional styles specific to the Text component here */

  @media (max-width: ${Screen.MOBILE}px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${Screen.DESKTOP}px) {
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: ${Screen.TABLET1}px) and (max-width: ${Screen.TABLET2}px) {
    width: 50%;
    height: 50%;
  }
`;

const MobileStyle = styled(StyledText)``;
const TabletStyle = styled(StyledText)``;
const FullScreenStyle = styled(StyledText)``;

export const Text: React.FC<TextProps> = ({
  children,
  display,
  className,
  onClick,
  ...otherProps // You can pass any additional props specific to text here
}) => {
  const screenWidth: number = window.innerWidth;
  const mobileWidth: number = parseInt(Screen.MOBILE, 10);
  const desktopWidth: number = parseInt(Screen.DESKTOP, 10);
  const tablet1Width: number = parseInt(Screen.TABLET1, 10);
  const tablet2Width: number = parseInt(Screen.TABLET2, 10);

  let StyledComponent = StyledText;

  if (screenWidth <= mobileWidth) {
    StyledComponent = MobileStyle;
  } else if (screenWidth >= desktopWidth) {
    StyledComponent = FullScreenStyle;
  } else if (screenWidth >= tablet1Width && screenWidth <= tablet2Width) {
    StyledComponent = TabletStyle;
  }

  return (
    <StyledComponent
      className={`text ${className}`}
      display={display}
      onClick={onClick}
      {...otherProps} // Pass additional props to the Text component
    >
      {children}
    </StyledComponent>
  );
};
