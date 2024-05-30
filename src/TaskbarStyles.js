import styled from 'styled-components';

export const StyledTaskbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px; /* Match the height of the desktop icons */
  background: #c0c0c0;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const TaskbarButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  background: #c0c0c0;
  border: none;
  cursor: pointer;

  &:hover {
    background: #808080;
  }

  img {
    width: 40px; /* Adjust to match desktop icon size */
    height: 40px; /* Adjust to match desktop icon size */
    margin-right: 5px;
  }
`;

export const TaskbarRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const TaskbarIcons = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px; /* Adjust to match desktop icon size */
    height: 40px; /* Adjust to match desktop icon size */
    margin-left: 10px;
  }
`;


