import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

const BUTTON_VARIANTS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 200px;
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  icon: css``,
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  min-height: 44px;
  min-width: 44px;

  :disabled {
    background-color: E7E7E7;
  }

  ${({ variant }) => BUTTON_VARIANTS[variant || 'primary']}
`;
