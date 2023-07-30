import { Container } from './styles';

import { HeroSection } from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import ModalitiesSection from '../../components/ModalitiesSection';
import QuestionsSection from '../../components/QuestionsSection';
import PersonalSection from '../../components/PersonalSection';

const Hero = () => {
  return (
    <Container>
      <HeroSection />
      <ServicesSection />
      <ModalitiesSection />
      <PersonalSection />
      <QuestionsSection />
    </Container>
  )
}

export default Hero;
