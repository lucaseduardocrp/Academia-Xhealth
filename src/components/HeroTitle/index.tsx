import { Button } from '../Button';
import { Container, ButtonContainer, TitleContainer } from './styles';

const HeroTitle = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>
          O poder do corpo <br />
          é a determinação <br />
          <b>da mente.</b>
        </h1>
        
        <ButtonContainer>
          <Button href='#'>Começar agora</Button>
          <Button href='#'>Ver mais</Button>
        </ButtonContainer>
      </TitleContainer>
    </Container>
  );
}

export default HeroTitle;
