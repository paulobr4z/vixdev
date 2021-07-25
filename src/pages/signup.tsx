import { Container } from "../styles/pages/signup"

export default function SignUp() {
  return (
    <Container>
    <div className="wrapper" >
    <h1>Crie sua conta</h1>
    <form>
      <input
        type="email"
        placeholder="E-mail"
      />
      <input
        type="email"
        placeholder="Seu nome"
      />
      <input
        type="password"
        placeholder="Senha"
      />
      <input
        type="password"
        placeholder="Confirmar senha"
      />
      <p>
        Ao se registrar, você aceita nossos <a>termos de uso</a> e a nossa <a>política de privacidade</a>.
      </p>
      <button type="submit">
        Cadastrar
      </button>
    </form>
    </div>
  </Container>
  )
}