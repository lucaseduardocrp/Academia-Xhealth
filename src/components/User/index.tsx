import { UserIcon } from '../CustomIcons/UserIcon';
import { Container, Username } from './styles';

interface UserProps {
  onClick?: () => void,
}

const User = ({onClick}: UserProps) => {
  return (
    <Container onClick={onClick}>
      <UserIcon fill='#48FF2B' />
      <Username>Lucas Eduardo</Username>
    </Container>
  )
}

export default User;
