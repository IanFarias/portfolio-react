import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  min-height: 100vh;
  overflow-x: hidden;
  margin-top: 60px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Subtitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.small};
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  text-align: justify;
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
