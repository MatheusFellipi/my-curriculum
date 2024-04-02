import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #181A1B;
    -webkit-font-smoothing: antialiased
  }
  
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; /*15px*/
    }
    @media (max-width: 720px){
      font-size: 87.5%; /*14px*/
    }
  }

  body, input, textarea, button{
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    color: #F8F0F1;

  }
  
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
    color: #F8F0F1;

  }

  button{
    cursor: pointer;
    transition: all 0.5s;
    :hover{
      filter: brightness(0.8);
    }
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`;