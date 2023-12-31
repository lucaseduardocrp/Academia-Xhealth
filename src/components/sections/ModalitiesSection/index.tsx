import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button';
import ModalitiesCards from '../../ModalitiesCards';
import { Title } from '../../Title';
import { Container, ModalitiesContainer } from './styles';

export const ModalitiesSection = () => {
  const navigate = useNavigate();

  return (
    <Container id='Modalities'>
      <Title title='Modalidades' subtitle='As modalidades que mais geram resultados'/>
      
      <ModalitiesContainer>
        <ModalitiesCards 
          image='/images/BikeIndoor.png'
          title='BIKE INDOOR'
          emphasis='CLASS'
          description='O Bike Indoor ou Spinning é um exercício cardiovascular em bicicletas estacionárias, simulando pedal ao ar livre. Aulas em grupo, treinos intervalados e resistência ajustável são características-chave. Popular para melhorar resistência física.'
        />
        <ModalitiesCards 
          image='/images/Bodybuilder2.png'
          title='MUSCULAÇÃO'
          emphasis='XHEALTH'
          description='Musculação é um exercício de força com pesos ou máquinas para fortalecer músculos, melhorar a aparência, a saúde e aprimorar a composição corporal.'
          alingend={true}
        />
        <div className='btn-container'>
          <Button href='#' border={true} onClick={() => navigate('/modalities', {replace: true})}>
            Ver todas modalidades
          </Button>
        </div>
      </ModalitiesContainer>
      
    </Container>
  );
}
