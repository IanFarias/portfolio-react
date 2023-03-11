import { LINKS_SECTIONS } from '../../constants/anchors';
import Icon from '../Icon';
import * as S from './styles';

interface MenuNavProps {
  isOpen: boolean;
}

const MenuNav: React.FC<MenuNavProps> = ({ isOpen }) => {
  return (
    <>
      <S.Nav isOpen={isOpen}>
        <S.LinkContainer>
          {LINKS_SECTIONS.map((item, index) => {
            return (
              <li key={`link-contact-header-${index}`}>
                <S.LinkNav href={item.url}>{item.label}</S.LinkNav>
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
