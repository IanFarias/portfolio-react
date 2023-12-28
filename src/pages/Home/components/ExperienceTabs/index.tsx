import { KeyboardEvent, useState, useRef, ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import Icon from '../../../../components/Icon';

type Experience = {
  tabTitle: string;
  title: string;
  location: string;
  information: string;
  skills: string[];
  description: string[];
};

type Props = {
  experiences: Experience[];
};

const ExperienceTabs: React.FC<Props> = ({ experiences }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsRef = useRef<any>(null);

  const previousTab = () => {
    const previousFocused = Number(document.activeElement?.id.split('tab-')[1]);

    if (previousFocused !== 0) {
      tabsRef?.current?.children[previousFocused - 1].focus();
    }
  };

  const nextTab = () => {
    const previousFocused = Number(document.activeElement?.id.split('tab-')[1]);

    if (experiences.length - 1 !== previousFocused) {
      tabsRef?.current?.children[previousFocused + 1].focus();
    }
  };

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'ArrowLeft':
        previousTab();
        break;
      case 'ArrowRight':
        nextTab();
        break;
    }
  };

  const handleClick = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <S.TabList role="tablist" ref={tabsRef}>
        {experiences.map((tab, index) => {
          return (
            <S.Tab
              key={`tab${index}`}
              id={`tab-${index}`}
              type="button"
              role="tab"
              tabIndex={index === selectedTab ? 0 : -1}
              aria-selected={index === selectedTab}
              aria-controls={`tabpanel-${index}`}
              isSelected={index === selectedTab}
              onClick={() => handleClick(index)}
              onKeyDown={handleKeyDown}
            >
              {tab.tabTitle}
            </S.Tab>
          );
        })}
      </S.TabList>
      {experiences.map((tab, index) => {
        return (
          <S.TabPanel
            key={`tabpanel${index}`}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            role="tabpanel"
            tabIndex={0}
            show={index === selectedTab}
          >
            <S.Title>{tab.title}</S.Title>
            <S.Location>{tab.location}</S.Location>
            <S.Information>{tab.information}</S.Information>
            <S.SkillGroup>
              {tab.skills.map((skill, index) => (
                <S.Skill key={`skill-${index}`}>{skill}</S.Skill>
              ))}
            </S.SkillGroup>
            <S.Topics>
              {tab.description.map((topic, index) => (
                <S.TopicItem key={`topic-${index}`}>
                  <Icon icon="bullet" size={16}></Icon>
                  {topic}
                </S.TopicItem>
              ))}
            </S.Topics>
          </S.TabPanel>
        );
      })}
    </div>
  );
};

export default ExperienceTabs;
