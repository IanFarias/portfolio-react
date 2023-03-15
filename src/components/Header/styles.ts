import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};

  & > a {
    font-size: 1.8rem;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 15px;
`;
