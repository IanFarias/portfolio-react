import { listIcon } from './listIcon';
import * as S from './styles';

interface IconProps {
  size?: number;
  primaryColor?: string;
  ariaLabel?: string;
  className?: string;
  rotateIcon?: number;
  icon: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  ariaLabel,
  className,
  primaryColor,
  rotateIcon,
  size,
}) => {
  return (
    <S.Container
      aria-label={ariaLabel}
      className={className}
      rotateIcon={rotateIcon}
    >
      {listIcon[icon](primaryColor, size)}
    </S.Container>
  );
};

export default Icon;
