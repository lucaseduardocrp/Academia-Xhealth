import { FormEvent, useState } from 'react';
import { Container, CalcContainer, FormContainer, InputContainer, Title, ImcResultText } from './styles';

type ImcTypes = {
  text: string,
  nivel: boolean | undefined,
}

export const ImcCalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<ImcTypes>()
  
  const imcCalc = (e: FormEvent) => {
    e.preventDefault()
    const imc = +weight / (+height * +height);
    
    const getNivelImc = (imc: number):ImcTypes => {
      // if(imc >=39.9) return 'Obesidade grau 3'
      // if(imc >=34.9) return 'Obesidade grau 2'
      // if(imc >=29.9) return 'Obesidade grau 1'
      // if(imc >=24.9) return 'Sobrepeso'
      // if(imc >=18.5) return 'Peso normal'
      // if(imc < 18.5) return 'Abaixo do peso'

      if(imc >=39.9) return {text: 'Obesidade grau 3', nivel: false}
      if(imc >=34.9) return {text: 'Obesidade grau 2', nivel: false}
      if(imc >=29.9) return {text: 'Obesidade grau 1', nivel: false}
      if(imc >=24.9) return {text: 'Sobrepeso', nivel: true}
      if(imc >=18.5) return {text: 'Peso normal', nivel: true}
      return {text: 'Abaixo do peso', nivel: false}
    }

    const nivelImc = getNivelImc(imc);

    const mensage = `Seu IMC é ${imc.toFixed(2)} e você está: ${nivelImc?.text}`;
    setResult({text: mensage, nivel: nivelImc?.nivel})
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
      <CalcContainer >
        <FormContainer>
          <InputContainer>
            <input 
              type="text" 
              name="height" 
              id="height" 
              value={height} 
              placeholder='Altura' 
              onChange={(e) => setHeight(e.target.value.replace(/[^0-9.]/g, ''))} 
            />

            <input 
              type="text" 
              name="weight" 
              id="weight" 
              value={weight} 
              placeholder='Peso'
              onChange={(e) => setWeight(e.target.value.replace(/[^0-9.]/g, ''))} 
            />
          </InputContainer>
          
          <button type='submit' onClick={imcCalc}>Calcular IMC</button>
        </FormContainer>

        <ImcResultText nivel={result?.nivel}>{result?.text}</ImcResultText>
      </CalcContainer>
    </Container>
  );
}
