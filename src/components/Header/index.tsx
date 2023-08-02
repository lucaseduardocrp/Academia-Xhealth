/* eslint-disable react-hooks/exhaustive-deps */
import { HeaderContainer, MobileMenu, RightContainer, UserDropdown } from './styles'

import { useEffect, useState } from 'react';
import { CloseIcon } from '../CustomIcons/CloseIcon';
import { MenuIcon } from '../CustomIcons/MenuIcon';

import Links from '../Links';
import Logo from '../Logo';
import User from '../User';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false)
  const [userActive, setUserActive] = useState(false)

  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route, {replace: true})
  }


  const handleActive = () => {
    setActive(!active)
    setUserActive(false)
  }
  const handleUserActive = () => {
    setUserActive(!userActive)
    setActive(false)
  }

  useEffect(() => {
    const closeMenu = () => {
      setActive(false)
      setUserActive(false)
    }

    window.addEventListener('scroll', closeMenu)
    
    return () => {
      window.removeEventListener('scroll', closeMenu)
    }
  }, [])
  

  return (
    <HeaderContainer className={active || userActive ? 'bgDark' : ''} id='header'>
      <nav>
        <Logo />

        <ul className={active ? 'navbar' : 'navbar close'}>
          <Links onClick={() => handleNavigate('/')} href='#'>Início</Links>
          <Links onClick={() => handleNavigate('/')} href='#Service'>Serviços</Links>
          <Links onClick={() => handleNavigate('/')} href='#Modalities'>Modalidades</Links>
          <Links onClick={() => handleNavigate('/')} href='#Personal'>Personais</Links>
          <Links onClick={() => handleNavigate('/')} href='#Avaliations'>Avaliações</Links>
          <Links onClick={() => handleNavigate('/')} href='#Plans'>Planos</Links>
          <Links onClick={() => handleNavigate('/')} href='#Questions'>Contatos</Links>
        </ul>

        <RightContainer>
          <User onClick={handleUserActive} />

          {userActive &&
            <UserDropdown>
              <Links href='#' onClick={() => handleNavigate('/plans')}>Consultar plano</Links>
              <Links href='#' onClick={() => handleNavigate('/training')}>Ficha de treino</Links>
              <Links href='#' onClick={() => handleNavigate('/diet')}>Plano alimentar</Links>
              <Links href='#' onClick={() => handleNavigate('/login')}>Sair</Links>
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
