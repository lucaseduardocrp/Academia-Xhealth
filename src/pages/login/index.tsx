import { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Input';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';

const schema = z.object({
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório')
})

type FormData = z.infer<typeof schema>

const Login = () => {
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
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      console.log('Usuário logado com sucesso')
      navigate('/', { replace: true });
    })
    .catch(error => {
      console.log('ERROR AO LOGAR')
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

      <Link to='/register'>
        Ainda não possui uma conta? Cadastre-se
      </Link>
    </Container>
  )
}

export default Login;
