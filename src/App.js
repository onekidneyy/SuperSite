import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import theme from './theme';
import { StyledTaskbar, TaskbarButton, TaskbarIcons, TaskbarRight } from './TaskbarStyles';
import BackgroundImage from './BackgroundImage';

import Animations from './assets/icons/Animations.png';
import Twitter from './assets/icons/Twitter.png';
import Instagram from './assets/icons/Instagram.png';
import Memes from './assets/icons/Memes.png';
import RoadMap from './assets/icons/RoadMap.png';
import Telegram from './assets/icons/Telegram.png';
import Jeet from './assets/icons/Jeet.png';

import Shell from './assets/icons/Shell.png';
import Search from './assets/icons/Search.png';

import ModalWindow from './window/ModalWindow';
import Animation from './window/Animation';
import Meme from './window/Meme';
import RoadMa from './window/RoadMa';
import StartMenu from './StartMenu';

const App = () => {
  const [windows, setWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const openApp = (component, title) => {
    setStartMenuOpen(false);
    setWindows([...windows, { content: component, title: title, id: windows.length }]); // Add the new window to the array
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(window => window.id !== id));
  };

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BackgroundImage />
        <StyledTaskbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TaskbarButton onClick={toggleStartMenu}>
              <img src={Shell} alt="Start" /> Start
            </TaskbarButton>
            <TaskbarIcons>
              <a href="https://jup.ag/swap/SOL-3FyA9YfRvyQF7KpEtsHwccmbkNjpG15D7aWsjBstfkJ2" target="_blank" rel="noopener noreferrer">
                <img src={Search} alt="Search" />
              </a>
            </TaskbarIcons>
          </div>
          <TaskbarRight>
            <span>SuperSite V1.2</span>
          </TaskbarRight>
        </StyledTaskbar>
        {startMenuOpen && <StartMenu onOpenApp={(app) => openApp(app.component, app.title)} />}
        <div className="icon-container">
          <div className="icon-row">
            <div className="desktop-icon" onClick={() => openApp(<Animation />, 'Animation')}>
              <img src={Animations} alt="Animations" />
              <p>Animations</p>
            </div>
            <div className="desktop-icon">
              <a href="https://twitter.com/SUPERSSOLANA" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
                <p>Twitter</p>
              </a>
            </div>
          </div>
          <div className="icon-row">
            <div className="desktop-icon">
              <a href="https://www.instagram.com/superscommunity" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
                <p>Instagram</p>
              </a>
            </div>
            <div className="desktop-icon" onClick={() => openApp(<Meme onClose={() => closeWindow(0)} />, 'Meme')}>
              <img src={Memes} alt="Memes" />
              <p>Memes</p>
            </div>
          </div>
          <div className="icon-row">
            <div className="desktop-icon" onClick={() => openApp(<RoadMa />, 'RoadMap')}>
              <img src={RoadMap} alt="RoadMap" />
              <p>RoadMap</p>
            </div>
            <div className="desktop-icon">
              <a href="https://t.me/SuperSonSOL" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} alt="Telegram" />
                <p>Telegram</p>
              </a>
            </div>
          </div>
        </div>
        <div className="jeet-icon">
          <a href="https://sol-incinerator.com/#/" target="_blank" rel="noopener noreferrer">
            <img src={Jeet} alt="Jeet" />
            <p>Jeet</p>
          </a>
        </div>
        {windows.map((window, index) => (
          <ModalWindow
            key={window.id}
            onClose={() => closeWindow(window.id)}
            title={window.title}
            index={index} // Pass the index to calculate the offset
          >
            {window.content}
          </ModalWindow>
        ))}
      </ThemeProvider>
    </div>
  );
};

export default App;
