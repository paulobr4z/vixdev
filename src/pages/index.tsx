import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import api from '../services/api';

import { Container } from '../styles/pages/signin';

interface Login {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data:Login) {
    console.log(data)
  }

  return (
    <Container>
      <div className="wrapper" >
      <h1>Faça login na Vix.dev</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text" 
          placeholder="email"
          {...register("email", { required: true })}
          defaultValue="paulobrazaraujo@gmail.com"
        />
        {errors.email && <p>Campo Obrigatório</p>}
        <input
          type="password"
          placeholder="Senha"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Campo Obrigatório</p>}
        <button type="submit">
          Entrar
        </button>
        <p>
          Não tem uma conta? <Link href="/signup">Registre-se</Link>
        </p>
      </form>
      </div>
    </Container>
  )
}