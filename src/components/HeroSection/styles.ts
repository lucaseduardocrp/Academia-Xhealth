import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; 
`;

export const VideoContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -10;
  
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  }
  
  iframe{
    width: 192rem;
    height: 110rem;
    border: none;
  }
`;

export const UpContainer = styled.section`
  ${FlexCSS};
  align-items: start;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;


