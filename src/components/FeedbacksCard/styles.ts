import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const FlexContainer = styled.div`
  ${FlexCSS}
  justify-content: center;
  gap: 3rem;

  .active{
    opacity: 1;
  }

  .card-left {
    transform: translateX(-125%) scale(0.8);
    opacity: 0.4;
  }

  .card-right {
    transform: translateX(125%) scale(0.8);
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  width: 60rem;
  min-height: 20rem;
  padding: 2rem;
  border-radius: 1.2rem;
  background: ${({theme}) => theme.colors.dark200};
  position: absolute;
  margin-top: 22rem;
  transition: 500ms;

  h5{
    font-size: var(--base);
    font-weight: 500;
    line-height: 1.4;
    color: ${({theme}) => theme.colors.gray200};
    margin-bottom: 2.6rem;
  }

  @media (max-width: 48rem){
    width: 100%;
  }
`;

export const ClientContainer = styled.div`
  ${FlexCSS};
  align-items: start;
  flex-direction: column;

  p{
    font-size: var(--base);
    font-weight: 700;
    color: ${({theme}) => theme.colors.light};
    margin-bottom: 0.6rem;
  }

  span{
    ${FlexCSS};
    gap: 0.4rem;
  }
`;
