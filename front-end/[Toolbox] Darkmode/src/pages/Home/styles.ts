import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};

  flex-direction: column;
  
  h1 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 24px;
  }
`;
