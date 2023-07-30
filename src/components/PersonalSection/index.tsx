import PersonalCard from '../PersonalCard';
import { Title } from '../Title';
import { Container } from './styles';

const PersonalSection = () => {
  return (
    <Container>
      <Title title='Personais' subtitle='Nossos personais são atletas de alta performance'/>
     
      <PersonalCard />
    </Container>
  );
}

export default PersonalSection;
