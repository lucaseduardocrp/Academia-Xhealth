import { useEffect, useState } from 'react';
import { Container, ClientContainer, FlexContainer } from './styles';
import { feedbacks } from '../../modules/feedbacks';
import StarIcon from '../CustomIcons/StarIcon';

const FeedbacksCard = () => {
  const [index, setIndex] = useState(0);

  const mod = (n: number, m: number) => {
    const result = n % m;

    //return positive value
    return result >= 0 ? result : result + m;
  }; 

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % feedbacks.length )
    }, 6000)
  }, [index])

  return (
    <FlexContainer>
      {feedbacks.map((item, i) => {
         const indexLeft = mod(index - 1, feedbacks.length);
         const indexRight = mod(index + 1, feedbacks.length);
 
         let className = 'active'
 
         if (i === index){
           className = 'active';
         } else if (i === indexRight) {
           className = 'active card-right'
         } else if (i === indexLeft) {
           className = 'active card-left'
         } else className = ''

         return (
          <Container key={item.name} className={className}>
            <h5>{item.description}</h5>
      
            <ClientContainer>
              <p>{item.name}</p>
              <span>
                <StarIcon fill='#EBBA34'/>
                <StarIcon fill='#EBBA34'/>
                <StarIcon fill='#EBBA34'/>
                <StarIcon fill='#EBBA34'/>
                <StarIcon fill='#EBBA34'/>
              </span>
            </ClientContainer>
          </Container>
        )
      } 
    )}
    </FlexContainer>
  )
}

export default FeedbacksCard;
