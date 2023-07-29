import { ReactNode } from 'react'
import { Container } from './styles'

type Props = {
  href: string,
  children: ReactNode
}

const Links = ({href, children}: Props) => {
  return (
    <Container>
      <a href={href}>
        {children}
      </a>
    </Container>
  )
}

export default Links;
