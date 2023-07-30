import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  ${FlexCSS}
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem max(calc((100% - 144rem) / 2), 2rem);
  background: ${({theme}) => theme.colors.dark100};

  p{
    font-size: var(--lg);
    text-align: center;
    color: ${({theme}) => theme.colors.gray100};
    cursor: pointer;
  }

  @media (max-width: 48rem) {
    justify-content: center;
    gap: 3rem;
  }
`;
