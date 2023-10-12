import React, { ReactNode } from "react";
import styled from "styled-components";

type PortalLayoutProps = {
  children: ReactNode;
};

const PortalLayout: React.FC<PortalLayoutProps> = ({ children }) => {
  return (
    <div>
      <Wrapper>
        <div className="sidebar">Sidebar</div>
        <div className="maincontent">{children}</div>
        {/* Render children here */}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  gap: 8px;
  .sidebar {
    flex: 1;
    background-color: lightgrey;
    max-width: 20%;
    padding: 10px;
  }
  .maincontent {
    flex: 4;
    background-color: #f9f4f4;
    padding: 10px;
  }
`;

export default PortalLayout;
