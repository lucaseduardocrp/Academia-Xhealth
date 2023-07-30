import emailjs from '@emailjs/browser';

import { FormEvent, useRef, useState } from "react";
import { Container } from "./styles";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChangeValue = ({currentTarget}: {currentTarget: HTMLInputElement}) => {
    setDataForm((dataForm) => ({...dataForm, [currentTarget.name]: currentTarget.value}));
  };

  async function sendEmail(event: FormEvent){
    event.preventDefault();
    setLoading(true)

    await emailjs.send('service_47t0keg', 'template_rgqho2i', dataForm, 'CVXQlpJ8y3ni4Rsms')
    .then(() => {
      alert('Email enviado com sucesso');

      setLoading(false)
    })
    
    if(formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <Container>
      <h3>Preencha com seus dados</h3>

      <form action="post" autoComplete="off" onSubmit={sendEmail} ref={formRef}>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" id="name" required onChange={handleChangeValue} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required onChange={handleChangeValue} />
        <label htmlFor="telefone">Telefone</label>
        <input type="telefone" name="telefone" id="telefone" required onChange={handleChangeValue} />
        <label htmlFor="text">Mensagem</label>
        <input type="message" name="message" id="message" required onChange={handleChangeValue} />
        {loading ? 
          <button type="submit" disabled={true} className='submitBtn'>Enviando...</button> : 
          <button type="submit" className='submitBtn'>Enviar</button>
        }
      </form>
    </Container>
  )
}
