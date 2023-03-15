import Heading from '../../components/baseComponents/Heading';
import Header from '../../components/Header';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <section>
          <Heading level={1} fontWeight={400} transform="uppercase">
            Ian Farias
          </Heading>
        </section>
      </S.Container>
    </>
  );
};

export default Home;
