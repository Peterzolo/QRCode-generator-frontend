import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Screen } from "../../styles/constants/Screen";
import { theme } from "../theme/Theme";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  display?: "flex" | "block" | "none";
  width?: string;
  height?: string;
  onClick?: () => void;
  color?: string;
  type?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

const primaryStyle = css`
  background-color: ${theme.mainColor.primary};
  border: 0.5px solid ${theme.mainColor.tertiary};
  /* border-color: ${theme.mainColor.tertiary}; */
`;

const secondaryStyle = css`
  background-color: ${theme.backgroundColor.whiteBg};
  border: 0.5px solid ${theme.mainColor.tertiary};
  color: ${theme.mainColor.primary};
`;

const tertiaryStyle = css`
  background-color: transparent;
`;

const StyledButton = styled.button<ButtonProps>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "red";
      case "secondary":
        return "orange";
      case "tertiary":
        return "transparent";
      default:
        return "red";
    }
  }};
  color: ${(props) => props.color || "white"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) =>
    props.display === "flex"
      ? "flex"
      : props.display === "none"
      ? "none"
      : "block"};
  cursor: pointer;

  ${(props) => props.type === "primary" && primaryStyle};
  ${(props) => props.type === "secondary" && secondaryStyle};
  ${(props) => props.type === "tertiary" && tertiaryStyle};

  /* Add any additional styles specific to the Button component here */

  @media (max-width: ${Screen.MOBILE}px) {
    width: 70%;
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

const MobileStyle = styled(StyledButton)``;
const TabletStyle = styled(StyledButton)``;
const FullScreenStyle = styled(StyledButton)``;

export const Button: React.FC<ButtonProps> = ({
  children,
  display,
  className,
  type,
  onClick,
  disabled,
  ...otherProps
}) => {
  const screenWidth: number = window.innerWidth;
  const mobileWidth: number = parseInt(Screen.MOBILE, 10);
  const desktopWidth: number = parseInt(Screen.DESKTOP, 10);
  const tablet1Width: number = parseInt(Screen.TABLET1, 10);
  const tablet2Width: number = parseInt(Screen.TABLET2, 10);

  let StyledComponent = StyledButton;

  if (screenWidth <= mobileWidth) {
    StyledComponent = MobileStyle;
  } else if (screenWidth >= desktopWidth) {
    StyledComponent = FullScreenStyle;
  } else if (screenWidth >= tablet1Width && screenWidth <= tablet2Width) {
    StyledComponent = TabletStyle;
  }

  return (
    <StyledComponent
      className={`button ${className}`}
      display={display}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </StyledComponent>
  );
};
