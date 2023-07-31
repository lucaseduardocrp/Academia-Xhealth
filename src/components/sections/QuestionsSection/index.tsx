import Form from '../../Form';
import { Title } from '../../Title';
import { Container } from './styles';

export const QuestionsSection = () => {
  return (
    <Container id='Questions'>
      <Title title='Fale com a gente' subtitle='Mande suas críticas ou suas dúvidas, estamos aqui para te ajudar'/>

      <Form />
    </Container>
  );
}
