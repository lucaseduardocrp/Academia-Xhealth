import styled from 'styled-components';
import { FlexCSS } from '../../../styles/mixins';

export const HeaderContainer = styled.header`
  padding: 2rem max(calc((100% - 144rem) / 2), 2rem);

  nav{
    ${FlexCSS};
    justify-content: space-between;
    position: relative;

    .navbar{
      ${FlexCSS};
      gap: 2rem;
    }
  }
  
  @media (max-width: 64rem) {
    nav{
      .navbar{
        position: absolute;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        top: 8rem;
        left: 0;
        padding: 4rem;
        background: ${({theme}) => theme.colors.dark200};
        border-bottom: 0.1rem solid ${({theme}) => theme.colors.primary};
      }
      .close{
        display: none;
      }
    }
  }
`;

export const Logo = styled.div`
  img{
    width: 18rem;
    object-fit: contain;
  }
`;

export const UserContainer = styled.div`
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

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 64rem) {
    display: block;
  }
`;

export const RightContainer = styled.div`
  ${FlexCSS};
  gap: 2rem;
`;

