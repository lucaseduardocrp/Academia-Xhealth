import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 2.8rem;
  margin-top: 13rem;

  a{
    transition: all .30s ease;

    &:hover{
      transform: scale(1.2);
    }
  }

  @media (max-width: 48rem) {
    flex-direction: row;
  }
`;
