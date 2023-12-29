import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected: boolean;
};

export type TabPanelProps = HtmlHTMLAttributes<HTMLDivElement> & {
  show: boolean;
};

export const TabList = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

export const Tab = styled.button<TabProps>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  font-weight: bold;
  height: 48px;
  color: ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.lightPurple : theme.colors.text};
  padding: 0px 14px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.navy};

  :focus-visible {
    box-shadow: inset 0px 0px 0px 2px black;
  }

  ${({ isSelected, theme }) =>
    isSelected
      ? `
        border-bottom: 2px solid ${theme.colors.red};
        color: ${theme.colors.red};
        `
      : ``}
`;

export const TabPanel = styled.div<TabPanelProps>`
  ${({ show }) =>
    !show
      ? `
        display: none
    `
      : ``}
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 6px;
`;

export const Location = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.small};
  text-transform: capitalize;
`;

export const Information = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.small};
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const SkillGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 28px;
`;

export const Skill = styled.span`
  padding: 5px 11px;
  font-size: ${({ theme }) => theme.sizes.small};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 6px;
`;

export const Topics = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TopicItem = styled.li`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};

  svg {
    fill: ${({ theme }) => theme.colors.terciary};
  }
`;
