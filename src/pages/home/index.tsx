import { Container } from './styles';

import { HeroSection } from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import ModalitiesSection from '../../components/ModalitiesSection';
import QuestionsSection from '../../components/QuestionsSection';

const Hero = () => {
  return (
    <Container>
      <HeroSection />
      <ServicesSection />
      <ModalitiesSection />
      <QuestionsSection />
    </Container>
  )
}

export default Hero;
