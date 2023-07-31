import { Button } from '../../Button';
import { ImcCalculator } from '../../ImcCalculator';
import { Title } from '../../Title';
import { Container, FlexContainer, RightContainer } from './styles';

export const AvaliationSection = () => {
  return (
    <Container id='Avaliations'>
      <Title title='Avaliação física' subtitle='Para aqueles que querem obter os melhores resultados'/>

      <FlexContainer>
        <ImcCalculator />

        <RightContainer>
          <img src="/images/Nutri.png" alt="Nutricionista da academia XHealth" />
          <div className='text-box'>
            <h4>Agende a sua avaliação</h4>
            <p>
              Adquira um plano voltado para as suas
              necessidades para que você tenha resultados de
              forma mais rápida para o seu biotipo
            </p>
            <Button href='#'>Agendar avaliação</Button>
          </div>
        </RightContainer>
      </FlexContainer>
    </Container>
  )
}


