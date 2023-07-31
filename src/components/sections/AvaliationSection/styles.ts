import styled from 'styled-components';
import { FlexCSS } from '../../../styles/mixins';

export const Container = styled.section`
  ${FlexCSS};
  flex-direction: column;
  background: ${({theme}) => theme.colors.dark100};
`;

export const FlexContainer = styled.div`
  ${FlexCSS};
  align-items: end;
  gap: 10rem;
  
  @media (max-width: 90rem){
    flex-wrap: wrap;
    gap: 0;
  }
`;

export const RightContainer = styled.div`
  position: relative;

  .text-box{
    ${FlexCSS};
    align-items: start;
    flex-direction: column;
    gap: 2rem;
    width: 36rem;
    padding: 2rem;
    border: 0.1rem solid ${({theme}) => theme.colors.gray200};
    border-radius: 0.8rem;
    background: rgba(05,05,05,0.3);
    backdrop-filter: blur(1.4rem);
    position: absolute;
    bottom: -3rem;
    right: -3rem;

    h4{
      font-size: var(--2xl);
      font-weight: 700;
      color: ${({theme}) => theme.colors.primary};
    }

    p{
      font-size: var(--sm);
      color: ${({theme}) => theme.colors.light};
      line-height: 1.5;
    }
  }

  @media (max-width: 90rem){
    img{
      width: 37rem;
      object-fit: contain;
    }

    .text-box{
      bottom: -6rem;
      left: 0.6rem;
    }
  }
`;
