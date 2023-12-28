import Heading from '../../components/baseComponents/Heading';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import CardProject from './components/CardProject';
import CardServices from './components/CardServices';
import image from '../../assets/avatarmemorygame.png';

import ExperienceTabs from './components/ExperienceTabs';
import * as S from './styles';

const TABS = [
  {
    tabTitle: 'CWI Software',
    title: 'Frontend Developer - (estágio)',
    location: 'São Leopoldo, Rio Grande do Sul',
    information: 'Dez 2021 - Mar 2023   Home Office - Projeto Via Varejo',
    skills: [
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'HTML',
      'StyledComponents',
      'CSS',
      'Figma',
      'NextJS',
    ],
    description: [
      'Trabalhei no desenvolvimento e manutenção de aplicações web SPA e SSR.',
      'Colaborei com a reestruturação das jornadas de compra dos ecommerces voltada para acessibilidade.',
      "Realização de análises e documentações sobre a estrutura de páginas não acessíveis, juntamente com designers e QA's.",
      'Participação na refatoração de páginas para melhoria performance.',
    ],
  },
  {
    tabTitle: 'Crescer (CWI)',
    title: 'Estagiário em Programação',
    location: 'São Leopoldo, Rio Grande do Sul',
    information: 'Mai 2021 - Nov 2021 - Home Office - Crescer',
    skills: [
      'JavaScript',
      'ReactJS',
      'HTML',
      'CSS',
      'Figma',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Firebase',
    ],
    description: [
      'Participei do programa de Treinamento FullStack Crescer',
      'Desenvolvimento de WEB APP SPA com ReactJS',
      "Desenvolvimento de API's REST com Java 8 + Spring Boot",
    ],
  },
  {
    tabTitle: 'IanFarias',
    title: 'Software Developer',
    location: 'Esteio, Rio Grande do Sul',
    information: 'Mar 2023 - Atual - Home Office',
    skills: [
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'HTML',
      'StyledComponents',
      'CSS',
      'Figma',
      'NextJS',
      'Java',
      'Spring Boot',
      'C#',
      'ExpressJS',
      'PHP',
      'PostgreSQL',
      'MySQL',
    ],
    description: [
      'Estudo de novas tecnologias e implementações',
      'Desenvolvimento de software com trabalhos freelancer',
    ],
  },
];

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
            <Heading level={2} fontWeight={700} transform="uppercase">
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

        <S.Section>
          <div>
            <S.Subtitle>Portfolio</S.Subtitle>
            <Heading level={2} fontWeight={700} transform="uppercase">
              Projetos
            </Heading>
          </div>
          <S.ProjectsContainer>
            <li>
              <CardProject image={image} title="Avatar Memory Game" />
            </li>
            <li>
              <CardProject image={image} title="Avatar Memory Game" />
            </li>
            <li>
              <CardProject image={image} title="Avatar Memory Game" />
            </li>
          </S.ProjectsContainer>
        </S.Section>
        <S.Section>
          <Heading level={2} fontWeight={700} transform="uppercase">
            Experiência
          </Heading>
          <ExperienceTabs experiences={TABS} />
        </S.Section>
      </S.Container>
    </>
  );
};

export default Home;
