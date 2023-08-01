import { Container } from './styles';

type Props = {
  title: string,
  subtitle?: string,
}

export function Title({title, subtitle}: Props) {
  return (
    <Container>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Container>
  );
}
