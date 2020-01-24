import styled, { css } from 'styled-components';
import { leftToRightSlideAnimation } from '../../animations';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  ${css`
    animation: ${leftToRightSlideAnimation} 1s;
  `}
`;

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: unset;
`;
