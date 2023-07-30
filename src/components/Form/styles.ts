import styled, { css } from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  form{
    ${FlexCSS};
    flex-direction: column;
    align-items: start;
    width: 52rem;

    label{
      font-size: var(--xl);
      font-weight: 500;
      color: ${({theme}) => theme.colors.gray100};
    }

    input{
      width: 100%;
      font-size: var(--base);
      background: transparent;
      color: ${({theme}) => theme.colors.gray100};
      border: none;
      border-bottom: 0.1rem solid ${({theme}) => theme.colors.gray100};
      padding: 1rem 0;
      margin-bottom: 3rem;
      transition: all .30s ease;

      &:focus{
        outline: 0;
        border-color: ${({theme}) => theme.colors.primary};
      }
    }

    .submitBtn{
      ${({theme}) => css`
        ${FlexCSS};
        width: 100%;

        padding: 1.4rem 3rem;
        font-size: var(--base);
        font-weight: 700;
        text-transform: uppercase;
        background: ${theme.colors.primary};
        color: ${theme.colors.light};

        border-radius: 1.2rem;
        border: 0.1rem solid transparent;
        cursor: pointer;

        transition: all .30s ease;

        &:hover{
          background: transparent;
          border: 0.1rem solid ${theme.colors.primary};
          color: ${theme.colors.primary};
        }
      `}
    }
  }

  @media (max-width: 48rem) {
    form{
      width: 32rem;
    }
  }
`;
