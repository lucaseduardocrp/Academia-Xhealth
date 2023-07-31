import { Container, Grid } from './styles';
import { Title } from '../../Title';

import ServiceCards from '../../ServiceCards';

export const ServicesSection = () => {
  return (
    <Container id='Service'>
      <Title title='Nossos serviços' subtitle='Nós proporcionamos tudo o que os nossos clientes precisam'/>
      <Grid>
        <ServiceCards />
      </Grid>
    </Container>
  );
}
