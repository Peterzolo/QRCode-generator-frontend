import React from "react";
import styled from "styled-components";

// Styled component for the error message
const ErrorMessageContainer = styled.div`
  background-color: #ffcccc; /* Customize the background color */
  color: #ff0000; /* Customize the text color */
  border: 1px solid #ff0000; /* Customize the border color */
  padding: 10px; /* Customize padding as needed */
  border-radius: 5px; /* Customize border radius */
  font-size: 14px; /* Customize font size */
`;

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorComponent: React.FC<ErrorMessageProps> = ({
  message,
  className,
}) => {
  return (
    <ErrorMessageContainer className={className}>
      {message}
    </ErrorMessageContainer>
  );
};
