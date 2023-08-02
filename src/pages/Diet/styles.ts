import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.section``;

export const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: 4rem;

  @media (max-width: 90rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 26.56rem) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 20rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.dark100};

  p{
    font-size: var(--3xl);
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
