import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    /* background-color: ${colors.secondary}; */
    /* background: rgb(229,230,240); */
    background: linear-gradient(180deg, rgba(229,230,240,1) 0%, rgba(229,230,240,1) 50%, rgba(255,255,255,1) 100%);
    background-repeat: no-repeat;
  }

  body, input, button {
    color: ${colors.dark};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
