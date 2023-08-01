import { Link } from 'react-router-dom';
import { UserIcon } from '../CustomIcons/UserIcon';
import { Container, Username } from './styles';

interface UserProps {
  onClick?: () => void,
}

const User = ({onClick}: UserProps) => {
  const signed = true;
  const loadingAuth = true;

  return (
    <>
      {loadingAuth && signed &&
        <Container onClick={onClick}>
          <UserIcon fill='#48FF2B' />
          <Username>Lucas Eduardo</Username>
        </Container>
      }
      {!loadingAuth && !signed &&
        <Container onClick={onClick}>
          <Link to='/login'>
            <UserIcon fill='transparent'/>
          </Link>
        </Container>
      }
    </>
  )
}

export default User;
