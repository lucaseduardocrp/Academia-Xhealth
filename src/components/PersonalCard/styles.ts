import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 1.2rem;
  width: 33rem;
  height: 100%;
  padding-bottom: 2rem;
  filter: grayscale(100%);
  border: 0.1rem solid ${({theme}) => theme.colors.gray200};
  transition: all .20s ease;

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
      background: rgba(0,0,0,0.4);
    }

    img{
      width: 100%;
      object-fit: contain;
    }
  }

  &:hover{
    filter: grayscale(0);
    border: 0.1rem solid ${({theme}) => theme.colors.primary};
  }
`;

export const NameContainer = styled.div`
  padding: 1rem 6.6rem;
  border: 0.1rem solid ${({theme}) => theme.colors.primary};
  border-radius: 0.8rem;

  p{
    font-size: var(--xl);
    font-weight: 500;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.primary};
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
