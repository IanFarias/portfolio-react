import { useState } from 'react';
import MenuHamburguer from '../MenuHamburguer';
import * as S from './styles';

const MenuNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MenuHamburguer isOpen={openMenu} onClick={handleOpenMenu} />
      <S.Nav isOpen={openMenu}>
        <S.LinkContainer>
          <li>
            <S.Link href="#">Sobre mim</S.Link>
          </li>
          <li>
            <S.Link href="#">Tecnologias</S.Link>
          </li>
          <li>
            <S.Link href="#">Serviços</S.Link>
          </li>
          <li>
            <S.Link href="#">Projetos</S.Link>
          </li>
          <li>
            <S.Link href="#">Experiência</S.Link>
          </li>
          <li>
            <S.Link href="#">Contato</S.Link>
          </li>
        </S.LinkContainer>
      </S.Nav>
    </>
  );
};

export default MenuNav;
