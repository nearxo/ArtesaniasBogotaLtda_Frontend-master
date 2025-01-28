import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--color-primario);
  border-bottom: 2px solid var(--color-hover);
`;

const TabButton = styled.button`
  flex: 1;
  padding: var(--espaciado-pequeno);
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.active ? 'var(--color-secundario)' : 'white')};
  border-bottom: ${(props) => (props.active ? '4px solid var(--color-secundario)' : 'none')};
  font-size: var(--fuente-mediana);
  font-family: var(--fuente-principal);
  transition: var(--transicion);

  &:hover {
    color: var(--color-hover);
  }
`;

const TabPanel = styled.div`
  padding: var(--espaciado-grande);
  background-color: var(--color-fondo);
  font-family: var(--fuente-secundaria);
  color: var(--color-negro);
`;

export const Tabs = ({ children, defaultValue }) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <TabsContainer>
      <TabList>
        {React.Children.map(children, (child) => (
          <TabButton
            key={child.props.value}
            active={selectedTab === child.props.value}
            onClick={() => setSelectedTab(child.props.value)}
          >
            {child.props.label}
          </TabButton>
        ))}
      </TabList>
      {React.Children.map(children, (child) => (
        child.props.value === selectedTab && (
          <TabPanel key={child.props.value}>
            {child.props.children}
          </TabPanel>
        )
      ))}
    </TabsContainer>
  );
};

export const Tab = ({ children }) => {
  return <>{children}</>;
};
