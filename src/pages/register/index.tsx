import { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Input';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { toast } from 'react-toastify';

const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório')
})

type FormData = z.infer<typeof schema>

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth)
    }

    handleLogout()
  }, [])

  function onSubmit(data: FormData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (user) => {
      await updateProfile(user.user, {
        displayName: data.name
      })
      
      toast.success('CADASTRADO COM SUCESSO!');    
      navigate('/login', { replace: true })
    })
    .catch((error) => {
      console.log('Erro ao cadastrar o usuário')
      console.log(error)
    })
  }


  return (
    <Container>
      <Link to='/'>
        <img src="/assets/logo.svg" alt="XHealth logo" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <Input 
          type='name'
          name='name'
          placeholder= 'Digite seu nome...'
          error={errors.name?.message}
          register={register}
        />
        
        <Input 
          type='email'
          name='email'
          placeholder= 'Digite seu email...'
          error={errors.email?.message}
          register={register}
        />

        <Input
          type='password'
          name='password'
          placeholder= 'Digite sua senha...'
          error={errors.password?.message}
          register={register}
        />

        <button type='submit'>Acessar</button>
      </form>

      <Link to='/login'>
        Já possui uma conta? Faça o login!
      </Link>
    </Container>
  )
}

export default Register;
