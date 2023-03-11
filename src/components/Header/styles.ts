import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  & > a {
    font-size: 1.8rem;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.title};
  }
`;
