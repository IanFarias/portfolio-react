import VisuallyHidden from '../baseComponents/VisuallyHidden';
import * as S from './styles';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuHamburguer: React.FC<MenuButtonProps> = ({
  isOpen,
  onClick,
}: MenuButtonProps) => {
  return (
    <S.HamburguerButton
      aria-expanded={isOpen}
      onClick={onClick}
      isOpen={isOpen}
    >
      <span className="bar" aria-hidden></span>
      <span className="bar" aria-hidden></span>
      <span className="bar" aria-hidden></span>
      <VisuallyHidden aria-live="polite">
        {isOpen ? 'Fechar Menu' : 'Abrir Menu'}
      </VisuallyHidden>
    </S.HamburguerButton>
  );
};

export default MenuHamburguer;
