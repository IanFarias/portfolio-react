import { ReactNode } from 'react';
import Heading from '../../../../components/baseComponents/Heading';
import * as S from './styles';

interface Props {
  title: string;
  listTitle: string;
  topicList: string[];
  description: string;
  icon?: ReactNode;
}

const CardServices: React.FC<Props> = ({
  description,
  listTitle,
  title,
  topicList,
  icon,
}) => {
  return (
    <S.Card>
      <S.TitleWrapper>
        <Heading level={3} transform="uppercase" size="medium" fontWeight={900}>
          {title}
        </Heading>
        {icon}
      </S.TitleWrapper>
      <div>
        <p>{listTitle}</p>
        <ul>
          {topicList.length > 0
            ? topicList.map((topic, index) => (
                <li key={`card-service-topic-${index}`}>{topic}</li>
              ))
            : null}
        </ul>
      </div>
      <p>{description}</p>
    </S.Card>
  );
};

export default CardServices;
