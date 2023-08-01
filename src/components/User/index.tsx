import { Link } from 'react-router-dom';
import { UserIcon } from '../CustomIcons/UserIcon';
import { Container, Username } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

interface UserProps {
  onClick?: () => void,
}

const User = ({onClick}: UserProps) => {
  const {signed, loadingAuth, name } = useContext(AuthContext)

  return (
    <>
      {!loadingAuth && signed &&
        <Container onClick={onClick}>
          <UserIcon fill='#48FF2B' />
          <Username>{name}</Username>
        </Container>
      }
      {!loadingAuth && !signed &&
        <Container>
          <Link to='/login'>
            <UserIcon fill='transparent'/>
          </Link>
        </Container>
      }
    </>
  )
}

export default User;
