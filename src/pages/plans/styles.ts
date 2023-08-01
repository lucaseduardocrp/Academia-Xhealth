import { styled } from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.section``;

export const FlexContainer = styled.div`
  ${FlexCSS};
  gap: 7rem;

  @media (max-width: 64rem) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
