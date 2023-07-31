import { useState } from 'react';
import { Container, CalcContainer, FormContainer, InputContainer, Title } from './styles';

export function ImcCalculator() {
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  const imcCalc = () => {
    const calculator = weight / (height * height)
    
    setResult(calculator)
  }

  return (
    <Container>
      <Title>
        <h4>CALCULE</h4>
        <b>SEU IMC</b>
      </Title>
      <p>
        A calculadora do índice de massa corporal (IMC)
        calcula o índice de massa corporal a partir do seu peso e altura
      </p>
      <CalcContainer>
        <FormContainer>
          <InputContainer>
            <input type="text" name="height" id="height" placeholder='Altura' onChange={() => {setHeight}} />
            <input type="text" name="weight" id="weight" placeholder='Peso' onChange={() => setWeight} />
          </InputContainer>
          
          <button type='submit' onClick={imcCalc}>Calcular IMC</button>
        </FormContainer>
        <span>Seu IMC é 24 e você está saudável!</span>
      </CalcContainer>
    </Container>
  );
}
