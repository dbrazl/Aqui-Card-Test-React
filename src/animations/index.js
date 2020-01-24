import { keyframes } from 'styled-components';

export const leftToRightSlideAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;
