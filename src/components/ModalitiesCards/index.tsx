import { Button } from '../Button';
import { Container, TextContainer, Mask } from './styles';

type ModalitiesProps = {
  image: string,
  title: string,
  emphasis: string,
  description: string,
  alingEnd?: boolean,
}

const ModalitiesCards = ({image, title, emphasis, description, alingEnd}: ModalitiesProps) => {
  return (
    <Container>
      <img src={image} alt={title} />
      
      <TextContainer alingEnd={alingEnd}>
        <Mask alingEnd={alingEnd}></Mask>
        
        <h4>{title} <b>{emphasis}</b></h4>
        <p>
          {description}
        </p>
        <Button href='#' border >Horários</Button>
      </TextContainer>
    </Container>
  )
}

export default ModalitiesCards;
