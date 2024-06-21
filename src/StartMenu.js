import React from 'react';
import { List } from '@react95/core';
import styled from 'styled-components';

import Search2Icon from './assets/icons/Search2.png';
import AnimationsIcon from './assets/icons/Animations.png';
import TwitterIcon from './assets/icons/Twitter.png';
import InstagramIcon from './assets/icons/Instagram.png';
import MemesIcon from './assets/icons/Memes.png';
import RoadMapIcon from './assets/icons/RoadMap.png';
import TelegramIcon from './assets/icons/Telegram.png';
import JeetIcon from './assets/icons/Jeet.png';

import Animation from './window/Animation';
import Meme from './window/Meme';
import RoadMa from './window/RoadMa';

const StartMenuWrapper = styled.div`
  position: absolute;
  bottom: 55px;
  left: 0;
  background-color: #c0c0c0;
  border: 2px solid #404040;
  z-index: 1000;
  padding: 10px;
  width: 200px;
`;

const StyledListItem = styled(List.Item)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &:hover {
    background-color: #000080;
    color: white;
  }
`;

const StyledIcon = styled.img`
  margin-right: 10px;
`;

const StartMenu = ({ onOpenApp }) => (
    <StartMenuWrapper>
        <List>
            <StyledListItem
                icon={<StyledIcon src={Search2Icon} alt="Search2" />}
            >
                <a href="https://jup.ag/swap/SOL-3FyA9YfRvyQF7KpEtsHwccmbkNjpG15D7aWsjBstfkJ2" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Jupiter
                </a>
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={AnimationsIcon} alt="Animations" />}
                onClick={() => onOpenApp({ component: <Animation />, title: 'Animation' })}
            >
                Animations
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={TwitterIcon} alt="Twitter" />}
            >
                <a href="https://twitter.com/SUPERSSOLANA" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Twitter
                </a>
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={InstagramIcon} alt="Instagram" />}
            >
                <a href="https://www.instagram.com/superscommunity" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Instagram
                </a>
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={MemesIcon} alt="Memes" />}
                onClick={() => onOpenApp({ component: <Meme />, title: 'Meme' })}
            >
                Memes
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={RoadMapIcon} alt="RoadMap" />}
                onClick={() => onOpenApp({ component: <RoadMa />, title: 'RoadMap' })}
            >
                RoadMap
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={TelegramIcon} alt="Telegram" />}
            >
                <a href="https://t.me/SuperSonSOL" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Telegram
                </a>
            </StyledListItem>
            <StyledListItem
                icon={<StyledIcon src={JeetIcon} alt="Jeet" />}
            >
                <a href="https://sol-incinerator.com/#/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Jeet
                </a>
            </StyledListItem>
        </List>
    </StartMenuWrapper>
);

export default StartMenu;







