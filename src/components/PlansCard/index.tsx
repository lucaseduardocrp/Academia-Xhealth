import { plansInfo } from '../../modules/plansInfo';
import { Button } from '../Button';
import { Container, ListContainer } from './styles';

const PlansCard = () => {
  return (
    <>
      {plansInfo.map((item) => 
        <Container key={item.title}>
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>

          <ListContainer>
            <ul>
              {item.list.map((listItem) => 
                <li>
                  <img src="/assets/CheckIcon.svg" alt={listItem.benefits} />
                  {listItem.benefits}
                </li>
              )}
            </ul>
            
            <div className="btn-container">
              <Button href='#' border>Contratar Plano</Button>
            </div>
          </ListContainer>
        </Container>
      )}
    </>
  )
}

export default PlansCard;
