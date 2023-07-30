import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --xs: 1.2rem;
    --sm: 1.4rem;
    --base: 1.6rem;
    --lg: 1.8rem;
    --xl: 2rem;
    --2xl: 2.4rem;
    --3xl: 3.2rem;
    --4xl: 4rem;
    --5xl: 4.8rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
    font-family: ${({theme}) => theme.fonts.archivo};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: ${({theme}) => theme.colors.dark200};
  }

  section{
    width: 100%;
    height: 100%;
    padding: 12.6rem max(calc((100% - 144rem) / 2), 2rem);
  }

  @media (max-width: 48rem) {
    :root{
      --base: 1.4rem;
      --lg: 1.6rem;
      --xl: 1.8rem;
      --2xl: 2rem;
      --3xl: 2.6rem;
      --4xl: 3rem;
      --5xl: 3.6rem;
    }
  }
`;

export default GlobalStyles;
