import Heading from '../../../../components/baseComponents/Heading';
import * as S from './styles';

interface Props {
  image: string;
  title: string;
}
const CardProject: React.FC<Props> = ({ image, title }) => {
  return (
    <S.CardContainer>
      <img src={image} alt={title} />
      <S.Overlay>
        <Heading level={3} fontWeight={900}>
          {title}
        </Heading>
        <span>Ver Mais</span>
      </S.Overlay>
    </S.CardContainer>
  );
};

export default CardProject;
