import { Container, UpContainer, VideoContainer } from './styles';
import HeroTitle from '../HeroTitle';
import { SocialMedia } from '../SocialMedia';

export function HeroSection() {
  return (
    <Container>
      <VideoContainer>
        <iframe 
          title="Body workout" 
          src="https://www.youtube.com/embed/uNN62f55EV0?autoplay=1&loop=1&playlist=uNN62f55EV0&controls=0&mute=1&amp;start=27&end=58" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      </VideoContainer>
            
      <UpContainer>
        <HeroTitle />

        <SocialMedia />
      </UpContainer>

    </Container>
  );
}
