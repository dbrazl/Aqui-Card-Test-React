import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #75B79E;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 24px 'Nunito Light', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fff;
    &:visited {
      color: #fff;
    }
  }

  h1, p {
    color: #fff;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
