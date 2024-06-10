import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #008080;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 80px;
    left: 20px;
    gap: 30px;
  }
  .icon-row {
    display: flex;
    gap: 30px;
  }
  .desktop-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .desktop-icon img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 40px;
  }
  .desktop-icon p {
    margin: 5px 0 0;
    text-align: center;
  }
  .jeet-icon {
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .jeet-icon img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 40px;
  }
  .jeet-icon p {
    margin: 5px 0 0;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    .icon-container {
      position: fixed;
      bottom: 80px;
      left: 20px;
      flex-direction: column;
      gap: 20px;
    }

    .jeet-icon {
      position: fixed;
      bottom: 105px;
      right: 20px;
      width: 40px;
      height: 40px;
    }

    .desktop-icon img {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-height: 600px) {
    .icon-container {
      bottom: 60px;
      top: unset;
    }
  }
`;

export default GlobalStyle;








