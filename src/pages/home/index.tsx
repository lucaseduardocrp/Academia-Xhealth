import { Container } from './styles';

import { HeroSection } from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import ModalitiesSection from '../../components/ModalitiesSection';
import QuestionsSection from '../../components/QuestionsSection';
import PersonalSection from '../../components/PersonalSection';
import { FeedbacksSection } from '../../components/FeedbacksSection';

const Hero = () => {
  return (
    <Container>
      <HeroSection />
      <ServicesSection />
      <ModalitiesSection />
      <PersonalSection />
      <FeedbacksSection />
      <QuestionsSection />
    </Container>
  )
}

export default Hero;
