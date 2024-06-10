import styled from 'styled-components';
import image from './assets/background-image.png'; // Import the image

const BackgroundImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  opacity: 0.5;
`;

export default BackgroundImage;


