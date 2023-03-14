import { useContext } from 'react';
import { ThemingContext } from '../../context/ThemingContext';
import VisuallyHidden from '../baseComponents/VisuallyHidden';
import Icon from '../Icon';
import * as S from './styles';

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemingContext);

  const handleChange = () => {
    toggleTheme();
  };
  return (
    <S.Container>
      <Icon className="switcher-sun-icon" icon="sun" size={18} />
      <S.Checkbox
        id="theme-switcher"
        type="checkbox"
        onChange={handleChange}
        checked={theme === 'dark'}
      />
      <S.Label htmlFor="theme-switcher">
        <VisuallyHidden>Modo claro</VisuallyHidden>
      </S.Label>
      <Icon className="switcher-moon-icon" icon="moon" size={18} />
    </S.Container>
  );
};

export default Switch;
