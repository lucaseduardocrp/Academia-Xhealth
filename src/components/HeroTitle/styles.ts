import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url('/assets/HeroRectangle.svg');
  background-repeat: no-repeat;

  h1{
    font-size: var(--5xl);
    font-weight: 900;
    line-height: 1.3;
    text-transform: uppercase;
    font-family: ${({theme}) => theme.fonts.montserrat};
    color: ${({theme}) => theme.colors.light};
    
    b{
      color: ${({theme}) => theme.colors.primary};
    }
  }
`;

export const TitleContainer = styled.div`
  ${FlexCSS};
  align-items: start;
  flex-direction: column;
  gap: 5.6rem;
  padding: 12rem 6rem 14rem;
  
  @media (max-width: 48rem) {
    padding: 2rem 2rem 0;
  }
`;

export const ButtonContainer = styled.div`
  ${FlexCSS};
  gap: 2.8rem;

  @media (max-width: 48rem) {
    justify-content: start;
    flex-wrap: wrap;
  }
`;
