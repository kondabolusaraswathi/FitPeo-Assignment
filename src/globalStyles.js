import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
