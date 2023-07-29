import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  gap: 1rem;
`;

export const Username = styled.div`
  font-size: var(--lg);
  font-weight: 500;
  color: ${({theme}) => theme.colors.light};

  @media (max-width: 64rem) {
    display: none;
  }
`;
