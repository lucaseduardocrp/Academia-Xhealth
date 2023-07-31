import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  align-items: start;
  flex-direction: column;
  gap: 2.2rem;
  max-width: 42rem;
  min-width: 32rem;
  height: 100%;
  
  p{
    font-size: var(--base);
    line-height: 1.6;
    color: ${({theme}) => theme.colors.gray100};
  }
`;

export const CalcContainer = styled.div`
  span{
    font-size: var(--base);
    color: ${({theme}) => theme.colors.success};
  }
`;

export const FormContainer = styled.form`
  button{
    width: 100%;
    padding: 1rem;
    font-size: var(--xl);
    font-weight: 900;
    border: 0.1rem solid ${({theme}) => theme.colors.primary};
    border-radius: 0.8rem;
    color: ${({theme}) => theme.colors.light};
    background: ${({theme}) => theme.colors.primary};
    margin: 1rem 0 2.2rem;
    cursor: pointer;
    transition: all .20s ease;

    &:hover{
      color: ${({theme}) => theme.colors.primary};
      border-color: ${({theme}) => theme.colors.primary};
      background: transparent;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  ${FlexCSS};
  gap: 1rem;
  position: relative;

  input{
    width: 18rem;
    height: 5rem;
    padding: 1rem 1.6rem;
    border: 0.1rem solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.gray100};
    background: transparent;
  }

  &::after, &::before{
    content: 'kg';
    padding: 0 1rem;
    font-size: var(--sm);
    width: 1rem;
    position: absolute;
    top: 35%;
    right: 0;
    color: ${({theme}) => theme.colors.gray100};
  }

  &::before{
    content: 'm';
    left: 15rem;
  }

  @media (max-width: 48rem) {
    flex-wrap: wrap;
    justify-content: start;

    input{
      width: 100%;
    }

    &::after, &::before{
      display: none;
    }
  }
`;

export const Title = styled.div`
  ${FlexCSS};
  gap: 1.2rem;
  margin-bottom: 1rem;

  h4, b{
    font-family: ${({theme}) => theme.fonts.archivo};
    font-weight: 900;
    font-size: var(--4xl);
    color: transparent;
    -webkit-text-stroke: 0.1rem;
    -webkit-text-stroke-color: ${({theme}) => theme.colors.light};
  }
  b{
    color: ${({theme}) => theme.colors.light};
    -webkit-text-stroke: 0;
  }
`;
