import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  justify-content: start;
  flex-direction: column;
  gap: 0.8rem;
  width: 30rem;
  height: 39.8rem;
  padding: 2rem 0.2rem 0.2rem;
  border-radius: 1.2rem;
  background: ${({theme}) => theme.colors.dark100};
  transition: all .25s ease;

  h4, h5{
    font-size: var(--2xl);
    font-weight: 900;
    color: ${({theme}) => theme.colors.light};
  }
  h5{
    font-family: ${({theme}) => theme.fonts.montserrat};
  }

  &:hover{
    background: ${({theme}) => theme.colors.primary};

    h4, h5{
      color: ${({theme}) => theme.colors.dark200};
    }
  }
`;

export const ListContainer = styled.div`
  ${FlexCSS}
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1.2rem;
  padding: 2rem;
  height: 100%;
  background: ${({theme}) => theme.colors.dark100};

  ul{
    height: 22rem;

    li{
     ${FlexCSS};
     justify-content: start;
     gap: 1rem;
     font-size: var(--sm);
     line-height: 1.3;
     color: ${({theme}) => theme.colors.gray100};
     margin-bottom: 1rem;
   }
  }
`;
