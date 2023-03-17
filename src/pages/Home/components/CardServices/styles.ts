import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.black : theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey[500]};
  background-color: ${({ theme }) => theme.colors.card.background};

  ul {
    text-indent: 24px;
    margin-top: 12px;

    li {
      margin-top: 6px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
