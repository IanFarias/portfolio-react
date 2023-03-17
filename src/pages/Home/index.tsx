import Heading from '../../components/baseComponents/Heading';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import CardServices from './components/CardServices';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Section>
          <div>
            <S.Subtitle>Meu nome é</S.Subtitle>
            <Heading level={1} fontWeight={700} transform="uppercase">
              Ian Farias
            </Heading>
          </div>
          <S.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </S.Text>
        </S.Section>

        <S.Section>
          <Heading level={2} fontWeight={700} transform="uppercase">
            Sobre mim
          </Heading>

          <S.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. Proin ornare quam sit amet faucibus mollis.
            Mauris non ipsum non sapien sollicitudin commodo. Sed dignissim
            dignissim lectus sed pretium. Donec mattis, turpis nec tempus
            bibendum, mauris dui tempor massa
          </S.Text>
        </S.Section>

        <S.Section>
          <Heading level={2} fontWeight={700} transform="uppercase">
            Tecnologias
          </Heading>
          <S.ListContainer>
            <div>
              <li>ReactJS</li>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>HTML/CSS</li>
              <li>Styled-Components</li>
            </div>
            <div>
              <li>Java</li>
              <li>Firebase</li>
              <li>ExpressJS</li>
              <li>Spring Boot</li>
              <li>SQL</li>
            </div>
          </S.ListContainer>
        </S.Section>
        <S.Section>
          <div>
            <S.Subtitle>Serviços</S.Subtitle>
            <Heading level={1} fontWeight={700} transform="uppercase">
              O que posso fazer
            </Heading>
          </div>
          <S.CardContainer>
            <CardServices
              title="Frontend apps"
              listTitle="Criação de aplicações client-side"
              topicList={['Landing Pages', 'Web Apps', 'SPA']}
              icon={<Icon icon="htmlfile" size={24} />}
              description={
                'Seguindo as melhores práticas de semântica  de código e acessibilidade.'
              }
            />
            <CardServices
              title="Backend apps"
              listTitle="Criação de server-side apps"
              topicList={["API's REST", "BFF's"]}
              icon={<Icon icon="apiIcon" size={24} />}
              description={
                'Seguindo as melhores práticas de semântica , escalabilidade e segurança.'
              }
            />
          </S.CardContainer>
        </S.Section>
      </S.Container>
    </>
  );
};

export default Home;
