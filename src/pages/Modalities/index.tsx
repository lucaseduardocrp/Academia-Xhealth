import ModalitiesCards from '../../components/ModalitiesCards';
import { Title } from '../../components/Title';
import { modalitiesInfoOne } from '../../modules/modalities-info';
import { Container } from './styles';

const Modalities = () => {
  return (
    <Container>
      <Title title='Todas nossas modalidades' subtitle='As melhores aulas e de todos os tipos para você ter resultados rapidamente' />

      {modalitiesInfoOne.map((item) => 
        <ModalitiesCards 
          title={item.title}
          emphasis={item.emphasis}
          description={item.description}
          image={item.image}
          alingend={item.alingEnd}
          key={item.id}
        />
      )}
    </Container>
  )
}

export default Modalities;
