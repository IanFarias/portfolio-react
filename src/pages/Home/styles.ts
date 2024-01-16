import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  min-height: 100vh;
  overflow-x: hidden;
  margin-top: 60px;

  @media (min-width: 1024px) {
    margin: 60px auto;
    max-width: 85%;
    gap: 65px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 40vh;
`;

export const PresentationSection = styled(Section)`
  img {
    display: none;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 90px;

    img {
      display: block;
      width: 320px;
    }

    p {
      max-width: 500px;
    }

    h1 {
      font-weight: 900;
      font-size: 4.2rem;
    }
  }
`;

export const AboutSection = styled(Section)`
  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    p {
      max-width: 80%;
    }
  }

  @media (min-width: 1336px) {
    p {
      max-width: 50%;
    }
  }
`;

export const TechnologiesSection = styled(Section)`
  @media (min-width: 1024px) {
    h2 {
      text-align: center;
    }

    ul {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
  }
`;

export const ServicesSection = styled(Section)`
  @media (min-width: 1024px) {
    gap: 80px;
    justify-content: center;
  }
`;

export const Subtitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.small};
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-bottom: 4px;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.sizes.medium};
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  text-align: justify;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 2fr 1fr;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  li {
    font-size: ${({ theme }) => theme.sizes.small};
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 80px;
  }
`;

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 76%;

  h2 {
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    margin-top: 20px;
    font-weight: bold;
    font-size: 2rem;
    height: 48px;
  }
`;

export const Highlighted = styled.span`
  color: ${({ theme }) => theme.colors.terciary};
`;

export const BreakLine = styled.span``;
