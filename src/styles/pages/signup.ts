import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 24px;
    color: ${props => props.theme.colors.text};
    margin-bottom: 22px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 480px;
    background-color: #202024;
    padding: 44px;
    border-radius: 8px;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid #a8a8b3;
      margin: 8px 0;
    }

    input, button {
      width: 100%;
    }

    button {
      margin-top: 12px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: ${props => props.theme.colors.primary};
      color: white;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 0;
    }

    p {
      text-align: center;
      margin-top: 12px;

      a {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

`
