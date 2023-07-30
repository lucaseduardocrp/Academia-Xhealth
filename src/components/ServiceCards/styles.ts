import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  width: 37rem;
  min-height: 43.6rem;
  padding: 4rem 3rem;
  border-radius: 1.2rem;
  background: ${({theme}) => theme.colors.dark100};
  position: relative;
`;

export const TextContent = styled.div`
  ${FlexCSS}
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  margin-bottom: 6rem;

  h4{
    font-size: var(--2xl);
    font-weight: 700;
    color: ${({theme}) => theme.colors.primary};
  }

  p{
    font-size: var(--lg);
    font-weight: 400;
    line-height: 1.6;
    color: ${({theme}) => theme.colors.gray100};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
