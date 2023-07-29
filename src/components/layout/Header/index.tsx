import Links from '../../Links';
import { HeaderContainer, Logo, UserContainer, Username, MobileMenu, RightContainer } from './styles'

import { UserIcon } from '../../CustomIcons/UserIcon';
import { useState } from 'react';
import { CloseIcon } from '../../CustomIcons/CloseIcon';
import { MenuIcon } from '../../CustomIcons/MenuIcon';

const Header = () => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <HeaderContainer>
      <nav>
        <Logo>
          <img src="/assets/logo.svg" alt="Logo Academia XHealth" />
        </Logo>

        <ul className={active ? 'navbar' : 'navbar close'}>
          <Links href='#'>Início</Links>
          <Links href='#'>Serviços</Links>
          <Links href='#'>Modalidades</Links>
          <Links href='#'>Personais</Links>
          <Links href='#'>Avaliações</Links>
          <Links href='#'>Planos</Links>
          <Links href='#'>Contatos</Links>
        </ul>

        <RightContainer>
          <UserContainer>
            <UserIcon fill='#48FF2B' />
            <Username>Lucas Eduardo</Username>
          </UserContainer>

          <MobileMenu onClick={handleActive}>
            {active ? <CloseIcon /> : <MenuIcon />}
          </MobileMenu>
        </RightContainer>
      </nav>
    </HeaderContainer>
  )
}

export default Header;
