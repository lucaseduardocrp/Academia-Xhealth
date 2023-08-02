import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.section`
  min-height: 100vh;
`;

export const CarouselContainer = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 2rem;
  overflow-x: hidden;
  
  .btn-container{
    width: 80rem;
    ${FlexCSS};
    justify-content: space-between;
    gap: 2rem;

    .preview, .next{
      background: transparent;
      border: none;
      cursor: pointer;
    }
    .preview{
      transform: rotateY(180deg);
    }
  }
`;

export const Carousel = styled.div`
  ${FlexCSS};
  justify-content: start;
  gap: 2rem;
  width: 80rem;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
`;

export const Table = styled.table`
  width: 80rem;
  border-collapse: collapse;
  flex: none;
  background: ${({theme}) => theme.colors.dark100};

  th, td{
    font-size: var(--lg);
    font-weight: 500;
    padding: 1.6rem;
    border: 0.1rem solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.light};
  }

  th{
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.dark100};
    font-size: var(--xl);
    font-weight: 900;
  }

  @media (max-width: 48rem) {
    max-width: 37rem;

    thead, .series{
      display: none;
    }

    td{
      &::before{
        content: attr(data-label);
        float: right;
        color: ${({theme}) => theme.colors.light};
      }
    }
  }
`;
