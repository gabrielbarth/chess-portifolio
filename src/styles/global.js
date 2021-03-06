import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;700&display=swap');

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
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  header, footer, body, input, button {
    /* font-family: 'Lora', serif; */
  }

  a {
    
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    /* font-family: 'Lora', serif; */
  }
`;
