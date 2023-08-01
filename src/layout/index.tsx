import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import { FlexCSS } from '../styles/mixins';

const Container = styled.div`
  ${FlexCSS};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  transform: rotate(-90deg);
  cursor: pointer;
  z-index: 8;
  
  img{
    width: 1.6rem;
    z-index: 10;
    transition: all .30s ease;
  }

  &:hover{
    img{
      transform: translateX(0.6rem);
    }
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <a href='#header'>
        <Container>
          <img src='/assets/Arrow.svg' alt='Go to top' />
        </Container>
      </a>
      
      <Footer />
    </>
  )
}

export default Layout;
