import styled from 'styled-components';

export const Container = styled.li`
a{
  font-size: var(--lg);
  font-weight: 500;
  color: ${({theme}) => theme.colors.light};
  position: relative;

    &::after{
      position: absolute;
      content: '';
      bottom: -0.4rem;
      left: 0;
      width: 0;
      height: 0.1rem;
      background: ${({theme}) => theme.colors.primaryGradient};
      transition: all .40s ease;
    }

    &:hover::after{
      width: 100%;
    }
  }
`;
