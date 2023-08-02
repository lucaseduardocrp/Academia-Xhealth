import { ReactNode } from 'react'
import { Container } from './styles'

type Props = {
  href: string,
  children: ReactNode,
  onClick?: () => void,
}

const Links = ({href, children, onClick}: Props) => {
  return (
    <Container onClick={onClick}>
      <a href={href}>
        {children}
      </a>
    </Container>
  )
}

export default Links;
