import { Link } from 'react-router-dom';
import { Container } from './styles';

const Logo = () => {
  return (
    <Container>
      <Link to={'/'}>
        <img src="/assets/logo.svg" alt="Logo Academia XHealth" />
      </Link>
    </Container>
  )
}

export default Logo;
