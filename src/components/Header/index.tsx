import { useState } from 'react';
import MenuHamburguer from '../MenuHamburguer';
import MenuNav from '../MenuNav';
import Switch from '../Switch';
import * as S from './styles';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <S.Header>
      <a href="#">Ian Farias</a>
      <S.Controls>
        <Switch />
        <MenuHamburguer isOpen={openMenu} onClick={handleOpenMenu} />
      </S.Controls>
      <MenuNav isOpen={openMenu} />
    </S.Header>
  );
};

export default Header;
