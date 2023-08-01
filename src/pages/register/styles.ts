import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.section`
  ${FlexCSS};
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  background: ${({theme}) => theme.colors.dark200};

  img{
    width: 44rem;
    object-fit: contain;
    margin-bottom: 4rem;
  }

  a{
    font-size: var(--base);
    color: ${({theme}) => theme.colors.light};
    transition: all .25s ease;

    &:hover{
      text-decoration: underline;
      color: ${({theme}) => theme.colors.primary};
    }
  }

  form{
    ${FlexCSS};
    flex-direction: column;
    gap: 1rem;

    button{
      width: 100%;
      padding: 1rem;
      font-size: var(--base);
      font-weight: 900;
      border: 0.1rem solid transparent;
      border-radius: 0.8rem;
      background: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.light};
      cursor: pointer;
      transition: all .25s ease;
      
      &:hover{
        border: 0.1rem solid ${({theme}) => theme.colors.primary};
        background: transparent;
        color: ${({theme}) => theme.colors.primary};
      }
    }
  }

  @media (max-width: 48rem){
    img{
      width: 30rem;
    }
  }
`;
