import styled from 'styled-components';
import { turnHidden, turnVisible } from './animations';

interface Props {
  isOpen: boolean;
}

export const Nav = styled.nav<Props>`
  display: flex;

  padding: 40px 2rem;

  justify-content: center;
  visibility: visible;
  background-color: ${({ theme }) => theme.colors.background};

  transition: transform 0.3s ease-in-out;

  @media (max-width: 1023px) {
    height: 100vh;
    position: absolute;
    align-items: center;
    flex-direction: column;
    top: 60px;
    left: 0;
    width: 100%;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    ${({ isOpen }) => (isOpen ? turnVisible : turnHidden)};
  }
`;

export const LinkContainer = styled.ul`
  display: flex;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }
`;

export const LinkNav = styled.a`
  display: block;
  padding: 1.45rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: lighter;
  text-decoration: none;
  letter-spacing: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactContainer = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 1024px) {
    display: none;
  }
`;
