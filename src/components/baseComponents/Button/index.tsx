import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'icon';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  isDisabled = false,
  ...props
}) => {
  return (
    <S.Button
      onClick={onClick}
      variant={variant}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
