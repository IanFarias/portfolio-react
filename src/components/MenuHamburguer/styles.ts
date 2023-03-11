import styled, { css } from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const HamburguerButton = styled.button<Props>`
  position: relative;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  box-shadow: 2px 2px ${({ theme }) => theme.colors.black};

  ::after {
    content: '';
    position: absolute;
    left: -8px;
    top: -8px;
    width: 44px;
    height: 44px;
  }

  span.bar {
    position: relative;
    display: block;
    width: 20px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: 0.4s;

    ${({ isOpen }) =>
      isOpen
        ? css`
            &.bar:nth-child(1) {
              display: none;
            }

            &.bar:nth-child(2) {
              transform: rotate(45deg);
              top: 3px;
            }

            &.bar:nth-child(3) {
              transform: rotate(-45deg);
              top: -4px;
            }
          `
        : ''}
  }
`;
