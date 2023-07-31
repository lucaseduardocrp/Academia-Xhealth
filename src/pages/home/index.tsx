import * as Section from '../../components/sections';
import { Container } from './styles';

const Hero = () => {
  return (
    <Container>
      <Section.HeroSection />
      <Section.ServicesSection />
      <Section.ModalitiesSection />
      <Section.PersonalSection />
      <Section.AvaliationSection />
      <Section.FeedbacksSection />
      <Section.QuestionsSection />
    </Container>
  )
}

export default Hero;
