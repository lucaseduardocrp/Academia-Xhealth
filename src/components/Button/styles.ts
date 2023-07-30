import styled, { css } from 'styled-components';
import { ButtonProps } from './index';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.a<ButtonProps>`
  ${({theme, border, full}) => css`
    
    ${full && FlexCSS};
    width: ${full ? '100%' : 'auto'};

    padding: 1.4rem 3rem;
    font-size: var(--base);
    font-weight: 700;
    text-transform: uppercase;
    background: ${border ? 'transparent' : theme.colors.primary};
    color: ${border ? theme.colors.primary : theme.colors.light};

    border-radius: 1.2rem;
    border: ${border ? `0.1rem solid ${theme.colors.primary}` : `0.1rem solid transparent`} ;

    transition: all .30s ease;

    &:hover{
      background: ${border ? theme.colors.primary : 'transparent'};
      border: ${border ? `0.1rem solid transparent` : `0.1rem solid ${theme.colors.primary}`} ;
      color: ${border ? theme.colors.light : theme.colors.primary};
    }
  `}
`;
