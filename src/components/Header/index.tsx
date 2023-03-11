import { useState } from 'react';
import MenuHamburguer from '../MenuHamburguer';
import MenuNav from '../MenuNav';
import * as S from './styles';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <S.Header>
      <a href="#">Ian Farias</a>
      <MenuHamburguer isOpen={openMenu} onClick={handleOpenMenu} />
      <MenuNav isOpen={openMenu} />
    </S.Header>
  );
};

export default Header;
