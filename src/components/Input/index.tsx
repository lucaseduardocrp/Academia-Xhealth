/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Container } from './styles';

interface InputProps {
  type: string,
  name: string,
  placeholder: string,
  register: UseFormRegister<any>,
  error?: string,
  rules?: RegisterOptions
}


export function Input({ type, name, placeholder, register, rules, error }: InputProps) {
  return (
    <Container>
      <input 
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className='error-mensager'>{error}</p>}
    </Container>
  );
}
