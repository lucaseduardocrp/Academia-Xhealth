import ModalitiesCards from '../ModalitiesCards';
import { Title } from '../Title';
import { Container, ModalitiesContainer } from './styles';

const ModalitiesSection = () => {
  return (
    <Container>
      <Title title='Modalidades' subtitle='As modalidades que mais geram resultados'/>
      
      <ModalitiesContainer>
        <ModalitiesCards 
          image='/images/BikeIndoor.png'
          title='BIKE INDOOR'
          emphasis='CLASS'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
        />
        <ModalitiesCards 
          image='/images/Bodybuilder2.png'
          title='MUSCULAÇÃO'
          emphasis='XHEALTH'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
          alingEnd
        />
      </ModalitiesContainer>
    </Container>
  );
}

export default ModalitiesSection;
