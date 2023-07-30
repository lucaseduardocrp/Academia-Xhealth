/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { personalInfo } from '../../modules/personal-info';
import { Container, NameContainer, SocialMedia, Carousel, CarouselContainer } from './styles';

const PersonalCard = () => {
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
    <CarouselContainer>
      <Carousel ref={carousel}>
        {personalInfo.map((item, key) => 
          <Container key={key}>
            <div className='image-mask'>
              <img src={item.image} alt={item.name} />
            </div>

            <NameContainer>
              <p>{item.name}</p>
            </NameContainer> 
                  
            <SocialMedia>
              <a href="">
                <img src="/assets/Instagram.svg" alt="" />
              </a>
              <a href="">
                <img src="/assets/Twitter.svg" alt="" />
              </a>
              <a href="">
                <img src="/assets/Youtube.svg" alt="" />
              </a>
            </SocialMedia>        
          </Container>
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
  )
}

export default PersonalCard;
