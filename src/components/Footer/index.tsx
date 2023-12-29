import Icon from '../Icon';
import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.LinkList>
        <S.LinkListItem>
          <a
            href="https://github.com/IanFarias"
            target="_blank"
            aria-label="Ir para Github de Ian"
          >
            <Icon icon="github" size={24} /> Github
          </a>
        </S.LinkListItem>
        <S.LinkListItem>
          <a href="#" target="_blank">
            <Icon icon="coffee" size={24} />
            Buy me A Coffee!
          </a>
        </S.LinkListItem>
        <S.LinkListItem>
          <a
            href="https://www.linkedin.com/in/ianfariaspaixão/"
            target="_blank"
            aria-label="Ir para Linkedin de Ian"
          >
            <Icon icon="linkedin" size={24} />
            LinkedIn
          </a>
        </S.LinkListItem>
      </S.LinkList>
      <span>
        © 2023 - Desenvolvido por{' '}
        <a href="https://github.com/IanFarias">Ian Farias</a>
      </span>
    </S.Footer>
  );
};

export default Footer;
