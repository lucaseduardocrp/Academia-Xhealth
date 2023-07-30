import Logo from '../Logo';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <Logo />
      <a href="https://www.linkedin.com/company/96688499/admin/inbox/" target='blank'>
        <p>Todos os direitos reservados por NXL Agency</p>
      </a>
    </Container>
  );
}

export default Footer;
