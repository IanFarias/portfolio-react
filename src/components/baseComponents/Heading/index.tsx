import { AriaAttributes, ReactNode } from 'react';
import { ITheme } from '../../../styles/types';
import * as S from './styles';

export interface HeadingProps extends AriaAttributes {
  size?: keyof ITheme['sizes'];
  fontWeight?: 100 | 400 | 700 | 900;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}

const Heading: React.FC<HeadingProps> = ({
  children,
  fontWeight = 700,
  level,
  size,
  transform = 'none',
  ...props
}) => {
  return (
    <S.Heading
      size={size}
      fontWeight={fontWeight}
      level={level}
      transform={transform}
      {...props}
    >
      {children}
    </S.Heading>
  );
};

export default Heading;
