import { serviceCardsInfo } from '../../modules/service-cards-info';
import { Button } from '../Button';
import { Container, TextContent, ButtonContainer } from './styles';

const ServiceCards = () => {
  return (
    <>
      {serviceCardsInfo.map((item, key) => 
      <Container key={key + item.title}>
        <TextContent>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </TextContent>
        
        <ButtonContainer>
          <Button href='#Plans' border full>Contratar serviço</Button>
        </ButtonContainer>
      </Container>
      )}
    </>
  )
}

export default ServiceCards;
