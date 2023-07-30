import { Container, NameContainer, SocialMedia } from './styles';

const PersonalCard = () => {
  return (
    <Container>
      <div className='image-mask'>
        <img src='/images/personal6.png' alt="" />
      </div>

      <NameContainer>
        <p>Lucas Eduardo</p>
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
  )
}

export default PersonalCard;
