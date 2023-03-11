import { useState } from 'react';
import Icon from '../Icon';
import MenuHamburguer from '../MenuHamburguer';
import * as S from './styles';

const LINKS_SECTIONS = [
  {
    url: '#',
    label: 'Sobre mim',
  },
  {
    url: '#',
    label: 'Tecnologias',
  },
  {
    url: '#',
    label: 'Serviços',
  },
  {
    url: '#',
    label: 'Projetos',
  },
  {
    url: '#',
    label: 'Experiência',
  },
  {
    url: '#',
    label: 'Contato',
  },
];

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
          {LINKS_SECTIONS.map((item, index) => {
            return (
              <li key={`link-contact-header-${index}`}>
                <S.Link href={item.url}>{item.label}</S.Link>
              </li>
            );
          })}
        </S.LinkContainer>
        <S.ContactContainer>
          <li>
            <a href="" target="_blank">
              <Icon icon="cv" size={40} />
            </a>
          </li>
          <li>
            <a href="https://github.com/IanFarias" target="_blank">
              <Icon icon="github" size={40} />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <Icon icon="coffee" size={40} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ianfariaspaixão"
              target="_blank"
            >
              <Icon icon="linkedin" size={40} />
            </a>
          </li>
        </S.ContactContainer>
      </S.Nav>
    </>
  );
};

export default MenuNav;
