import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { dietInfo } from '../../modules/diet-info';
import { Container, FlexContainer, Card } from './styles';

const Diet = () => {
  return (
    <Container>
      <Title title='Plano alimentar' subtitle='Mantenha um acompanhamento constante com seu nutricionista' />

      <FlexContainer>
        {dietInfo.map((item, key) => 
          <Card key={key + item.title}>
            <p>{item.title}</p>

            <Button href={item.pdf} target='blank'>Baixar PDF</Button>
          </Card>
        )}
      </FlexContainer>
    </Container>
  );
}

export default Diet;
