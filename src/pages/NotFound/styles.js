import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { leftToRightSlideAnimation } from '../../animations/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${css`
    animation: ${leftToRightSlideAnimation} 1s;
  `}
`;

export const Code = styled.h1`
  font-size: 100px;
  margin-bottom: 20px;
`;

export const Label = styled.p``;

export const Back = styled(Link).attrs(props => ({
  to: props.to,
}))`
  margin-top: 50px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;
