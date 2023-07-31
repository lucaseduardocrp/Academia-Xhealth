import FeedbacksCard from '../FeedbacksCard';
import { Title } from '../Title';
import { Container } from './styles';

export function FeedbacksSection() {
  return (
    <Container>
      <Title title='Nossos clientes' subtitle='O que nossos clientes acham do nosso trabalho'/>

      <FeedbacksCard />
    </Container>
  );
}
