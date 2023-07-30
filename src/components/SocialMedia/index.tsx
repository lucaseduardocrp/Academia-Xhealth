import { Container } from './styles';
import { FacebookIcon, InstagramIcon, SpotifyIcon, YoutubeIcon } from '../CustomIcons/SocialIcons';


export function SocialMedia() {
  return (
    <Container>
      <a href='https://www.instagram.com/lucaseduardo_crp/' target='_blank'>
        <InstagramIcon />
      </a>
      <a href='https://www.linkedin.com/in/lucaseccarvalho/' target='_blank'>
        <FacebookIcon />
      </a>
      <a href='#'>
        <SpotifyIcon />
      </a>
      <a href='#'>
        <YoutubeIcon />
      </a>
    </Container>
  );
}
