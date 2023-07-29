import { css } from 'styled-components';

export const FlexCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = css`
  ${({ theme }) => css`
    font-size: var(--3xl);
    font-weight: 900;
    font-family: ${theme.fonts.archivo};
    color: ${theme.colors.light};
    line-height: 1.3;
    padding-bottom: 6rem;
  `}
`;

export const Paragraph = css`
  ${({ theme }) => css`
    font-size: var(--base);
    font-weight: 500;
    font-family: ${theme.fonts.archivo};
    color: ${theme.colors.light};
    line-height: 1.6;
  `}
`;


export const ButtonText = css`
  font-size: var(--base);
  font-weight: 900;
  font-family: ${({theme}) => theme.fonts.archivo};
`;
