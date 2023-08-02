/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Title } from '../../components/Title';
import { trainingInfo } from '../../modules/training-info';
import { Carousel, CarouselContainer, Container, Table } from './styles';

const Training = () => {
  const carousel = useRef<any>(null)

  const handlePreview = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  
  const handleNext = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <Container>
      <Title title='Fichas de treino' subtitle='As suas fichas de treino estão separadas em A, B e C'/>

      <CarouselContainer>
        <Carousel ref={carousel} >
          {trainingInfo.map((item) => 
            <Table>
              <thead>
                <tr>
                  <th colSpan={2}>{item.training}</th>
                  <th>1° Série</th>
                  <th>2° Série</th>
                  <th>3° Série</th>
                  <th>4° Série</th>
                  <th>Descanso</th>
                </tr>
              </thead>
              <tbody>
                {item.exercises.map((i) => 
                  <tr>
                    <td colSpan={2} data-label='4 x 15'>{i.exercise }</td>
                    
                    {item.series.map((i) => <td className='series'>{i.serie}</td>)}
                    
                    <td>2m 30s</td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}  
        </Carousel>
        
        <div className='btn-container'>
          <button className='preview' onClick={handlePreview}>
            <img src='/assets/Arrow.svg' alt='preview' />
          </button>
          <button className='next' onClick={handleNext}>
            <img src='/assets/Arrow.svg' alt='next' />
          </button>
        </div>
      </CarouselContainer>

    </Container>
  )
}

export default Training;
