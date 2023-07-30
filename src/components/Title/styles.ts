import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;
  margin-bottom: 6rem;

  h2{
    font-size: var(--4xl);
    font-weight: 900;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.light};
  }
  h3{
    font-size: var(--xl);
    font-weight: 700;
    color: transparent;
    background: ${({theme}) => theme.colors.primaryGradient};
    background-clip: text;
    -webkit-background-clip: text;
  }
`;
