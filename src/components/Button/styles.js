import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  min-height: 45px;
  border-radius: 10px;
  border: #fff 2px solid;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    background-color: #fff;
    transition: background-color 500ms;
  }
`;

export const Label = styled.p`
  width: 100%;
  text-align: center;
  padding: 10px;
  transition: color 500ms;

  &:hover {
    color: #000;
    transition: color 500ms;
  }
`;
