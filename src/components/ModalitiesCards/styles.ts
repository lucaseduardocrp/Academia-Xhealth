import styled, { css } from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

type ModalitiesProps = {
  alingend?: boolean, 
}

export const Container = styled.div`
  ${FlexCSS};
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 max(calc((100% - 120rem) / 2), 2rem);
  
  &:nth-child(even){
    flex-direction: row-reverse;
    align-items: end;
  }
  
  img{
    width: 36rem;
    object-fit: contain;
    margin-bottom: 2rem;
    z-index: 10;
  }
  
  @media (max-width: 48rem){
    flex-wrap: wrap;
    justify-content: center;

    img{
      width: 28rem;
    }
  }
`;

export const TextContainer = styled.div<ModalitiesProps>`
  ${({theme, alingend}) => css`
    display: flex;
    align-items: ${alingend ? 'end' : 'start' };
    justify-content: start;
    flex-direction: column;
    gap: 2.2rem;
    width: 52rem;
    min-height: 40rem;
    position: relative;
    
    h4, b{
      font-size: var(--3xl);
      font-weight: 900;
      text-transform: uppercase;
      color: ${theme.colors.light};

      b{
        color: ${theme.colors.primary};
      }
    }

    p{
      font-size: var(--base);
      color: ${theme.colors.gray100};
      line-height: 1.8;
      text-align: ${alingend ? 'end' : 'start'};
    }

    @media (max-width: 48rem){
      width: 36rem;
    }
  `}
`;

export const Mask = styled.div<ModalitiesProps>`
  ${({alingend}) => css`
    position: absolute;
    bottom: 2rem;
    ${alingend ? ' right: -20rem;' : 'left: -20rem;'}
    transform: rotate(${alingend ? '270deg' : ''});

    width: 38rem;
    height: 100%;
    background: url('/assets/CircleMask.svg');
    background-repeat: no-repeat;
  `}
`;

