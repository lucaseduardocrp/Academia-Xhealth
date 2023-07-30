import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem max(calc((100% - 144rem) / 2), 2rem);
  z-index: 1000;
  
  nav{
    ${FlexCSS};
    justify-content: space-between;
    
    .navbar{
      ${FlexCSS};
      gap: 2rem;
    }
  }
  
  @media (max-width: 64rem) {
    &.bgDark{
      background: ${({theme}) => theme.colors.dark200};
    }
    
    nav{
      .navbar{
        position: absolute;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        top: 10rem;
        left: 0;
        padding: 4rem;
        background: ${({theme}) => theme.colors.dark200};
        border-bottom: 0.1rem solid ${({theme}) => theme.colors.primary};
        z-index: 10;
      }
      .close{
        display: none;
      }
    }
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
  cursor: pointer;
  position: relative;
  
  @media (max-width: 64rem) {
    position: static;
  }
`;

export const UserDropdown = styled.ul`
  ${FlexCSS};
  align-items: start;
  flex-direction: column;
  position: absolute;
  width: 24rem;
  gap: 4rem;
  top: 4rem;
  left: -2rem;
  padding: 4rem 2rem;
  background: ${({theme}) => theme.colors.dark100};
  border-bottom: 0.1rem solid ${({theme}) => theme.colors.primary};
  z-index: 10;
  
  @media (max-width: 64rem) {
    width: 100%;
    align-items: center;
    top: 10rem;
    left: 0;
    background: ${({theme}) => theme.colors.dark200};
  }
`;

