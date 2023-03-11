import styled from 'styled-components';
import { turnHidden, turnVisible } from './animations';

interface Props {
  isOpen: boolean;
}

export const Nav = styled.nav<Props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  padding: 40px 2rem;
  width: 100%;
  top: 60px;
  left: 0;
  position: absolute;
  height: 100vh;
  visibility: hidden;

  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) => (isOpen ? turnVisible : turnHidden)};
`;

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`;

export const LinkNav = styled.a`
  display: block;
  padding: 1.45rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.black};
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
`;
