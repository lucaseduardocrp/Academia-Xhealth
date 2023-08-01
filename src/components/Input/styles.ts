import styled from 'styled-components';

export const Container = styled.div`
  width: 50rem;

  input{
    width: 100%;
    height: 4rem;
    border-radius: 0.8rem;
    border: none;
    padding: 1rem;
  }

  .error-mensager{
    font-size: var(--sm);
    color: ${({theme}) => theme.colors.error};
    margin-top: 1rem;
  }

  @media (max-width: 48rem){
    width: 30rem;
  }
`;
