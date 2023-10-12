import styled, { keyframes } from "styled-components";

// Define the keyframe animation for the spinner
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingSpinner = () => {
  return <SpinnerContainer />;
};
