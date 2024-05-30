import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #008080; /* Off-blue background color */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 80px; /* Adjust as needed to be above the taskbar */
    left: 20px; /* Adjust as needed */
    gap: 30px; /* Space between rows of icons */
  }
  .icon-row {
    display: flex;
    gap: 30px; /* Space between icons in a row */
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
    position: absolute;
    bottom: 90px; /* Adjust as needed */
    right: 20px; /* Adjust as needed */
    width: 50px; /* Adjust size as needed */
    height: 50px; /* Adjust size as needed */
    text-align: center;
    cursor: pointer;
  }
  .jeet-icon img {
    display: block;
    margin: 0 auto;
    width: 40px; /* Adjust the size as needed */
    height: 40px; /* Adjust the size as needed */
  }
  .jeet-icon p {
    margin: 5px 0 0;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-height: 600px) {
    .icon-container {
      bottom: 60px; /* Ensure icons stay above the taskbar */
      top: unset;
    }
  }
`;

export default GlobalStyle;







