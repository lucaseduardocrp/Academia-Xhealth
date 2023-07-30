import { Container } from './styles';

import { HeroSection } from '../../components/HeroSection';
import { ServicesSection } from '../../components/ServicesSection';
import QuestionsSection from '../../components/QuestionsSection';

const Hero = () => {
  return (
    <Container>
      <HeroSection />
      <ServicesSection />
      <QuestionsSection />
    </Container>
  )
}

export default Hero;
