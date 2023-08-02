import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { dietInfo } from '../../modules/diet-info';
import { Container, FlexContainer, Card } from './styles';

const Diet = () => {
  return (
    <Container>
      <Title title='Plano alimentar' subtitle='Mantenha um acompanhamento constante com seu nutricionista' />

      <FlexContainer>
        {dietInfo.map((item) => 
          <Card>
            <p>{item.title}</p>

            <Button href='#'>Baixar PDF</Button>
          </Card>
        )}
      </FlexContainer>
    </Container>
  );
}

export default Diet;
