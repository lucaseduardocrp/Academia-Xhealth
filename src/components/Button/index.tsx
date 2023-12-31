import { ReactNode } from 'react';
import { Container } from './styles';
export interface ButtonProps {
  children: ReactNode,
  href: string,
  target?: string,
  border?: boolean,
  full?: boolean,
  onClick?: () => void,
} 

export function Button({ children, href, target, border, full, onClick }: ButtonProps) {
  return (
    <Container href={href} target={target} border={border} full={full} onClick={onClick}>
      {children}
    </Container>
  );
}
