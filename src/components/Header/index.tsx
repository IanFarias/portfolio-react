import { useState } from 'react';
import MenuHamburguer from '../MenuHamburguer';
import MenuNav from '../MenuNav';
import Switch from '../Switch';
import * as S from './styles';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <S.Header>
      <a href="#">Ian Farias</a>
      <MenuNav isOpen={openMenu} />
      <S.Controls>
        <Switch />
        <MenuHamburguer isOpen={openMenu} onClick={handleOpenMenu} />
      </S.Controls>
    </S.Header>
  );
};

export default Header;
