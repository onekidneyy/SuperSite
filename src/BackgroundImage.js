import styled from 'styled-components';
import image from './assets/background-image.png'; // Import the image

const BackgroundImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px; /* Adjust the size as needed */
  height: 380px; /* Adjust the size as needed */
  background-image: url(${image}); /* Use the imported image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1; /* Make sure it is behind other content */
  opacity: 0.5; /* Adjust the opacity value as needed (0.0 to 1.0) */
`;

export default BackgroundImage;


