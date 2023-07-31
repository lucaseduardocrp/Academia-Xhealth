import PersonalCard from '../../PersonalCard';
import { Title } from '../../Title';
import { Container } from './styles';

export const PersonalSection = () => {
  return (
    <Container id='Personal'>
      <Title title='Personais' subtitle='Nossos personais são atletas de alta performance'/>
     
      <PersonalCard />
    </Container>
  );
}
