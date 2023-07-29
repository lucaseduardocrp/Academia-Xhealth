import { HeaderContainer, MobileMenu, RightContainer, UserDropdown } from './styles'

import { useState } from 'react';
import { CloseIcon } from '../../CustomIcons/CloseIcon';
import { MenuIcon } from '../../CustomIcons/MenuIcon';

import Links from '../../Links';
import Logo from '../../Logo';
import User from '../../User';

const Header = () => {
  const [active, setActive] = useState(false)
  const [userActive, setUserActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
    setUserActive(false)
  }
  const handleUserActive = () => {
    setUserActive(!userActive)
    setActive(false)
  }

  return (
    <HeaderContainer>
      <nav>
        <Logo />

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
          <User onClick={handleUserActive} />

          {userActive &&
            <UserDropdown>
              <Links href='#'>Consultar plano</Links>
              <Links href='#'>Ficha de treino</Links>
              <Links href='#'>Plano alimentar</Links>
              <Links href='#'>Sair</Links>
            </UserDropdown>
          }

          <MobileMenu onClick={handleActive}>
            {active ? <CloseIcon /> : <MenuIcon />}
          </MobileMenu>

        </RightContainer>
      </nav>
    </HeaderContainer>
  )
}

export default Header;
