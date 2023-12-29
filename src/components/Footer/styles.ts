import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  text-align: center;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[300]};

  a {
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ theme }) =>
    theme.title === 'dark'
      ? css`
          border-top: 1px solid ${({ theme }) => theme.colors.navy};
        `
      : null}
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const LinkListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
