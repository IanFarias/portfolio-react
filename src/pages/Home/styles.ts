import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
