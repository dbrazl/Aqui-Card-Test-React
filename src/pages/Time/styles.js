import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { leftToRightSlideAnimation } from '../../animations';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  ${css`
    animation: ${leftToRightSlideAnimation} 1s;
  `}
`;

export const LabelCode = styled.p`
  margin-top: 30px;
  padding: 0 20px;
  text-align: center;
`;

export const Label = styled.p``;

export const Bold = styled.h1`
  margin-top: 20px;
`;

export const Back = styled(Link).attrs(props => ({
  to: props.to,
}))`
  margin-top: 50px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;
