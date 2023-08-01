import PlansCard from '../../components/PlansCard';
import ServiceCards from '../../components/ServiceCards';
import { Title } from '../../components/Title';
import { Container, FlexContainer } from './styles';

const Plans = () => {
  return (
    <>
      <Container>
        <Title title='Planos ativos' subtitle='Você pode alterar seus planos ou contratar serviços adicionais' />

        <FlexContainer>
          <PlansCard />
        </FlexContainer>
      </Container>
        
        <Container>
          <Title title='Serviços adicionais' />

          <FlexContainer>
            <ServiceCards />
          </FlexContainer>
        </Container>
    </>
  )
}

export default Plans;
