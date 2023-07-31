import styled from 'styled-components';
import { FlexCSS } from '../../../styles/mixins';

export const Container = styled.section`
  background: ${({theme}) => theme.colors.dark100};

  .btn-container{
    padding-top: 16rem;
  }

  @media (max-width: 48rem) {  
    .btn-container{
      padding-top: 2rem;
    }
  }
`;

export const ModalitiesContainer = styled.div`
  ${FlexCSS};
  flex-direction: column;
  padding-top: 6rem;
`;
