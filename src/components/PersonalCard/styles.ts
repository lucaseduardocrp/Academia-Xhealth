import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 1.2rem;
  min-width: 36rem;
  height: 100%;
  padding-bottom: 2rem;
  border: 0.1rem solid ${({theme}) => theme.colors.gray200};

  .image-mask{
    width: 100%;
    position: relative;
    
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.2);
      z-index: 2;
    }
    
    img{
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const NameContainer = styled.div`
  width: 90%;
  padding: 1rem 4rem;
  margin: 0 1rem 0;
  border: 0.1rem solid ${({theme}) => theme.colors.gray200};
  border-radius: 0.8rem;

  p{
    font-size: var(--xl);
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    color: ${({theme}) => theme.colors.gray200};
  }
`;

export const SocialMedia = styled.div`
  ${FlexCSS}
  gap: 3.6rem;

  img{
    width: 4rem;
    height: 4rem;
  }
`;

export const Carousel = styled.div`
  ${FlexCSS}
  justify-content: start;
  gap: 3.6rem;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  width: 115.2rem;
  position: relative;

  .btn-container{
    .preview, .next{
      background: transparent;
      border: none;
      position: absolute;
      top: 44%;
      right: -6rem;
      cursor: pointer;
    }
    .preview{
      transform: rotateY(180deg);
      left: -130rem;
    }
  }
`;
