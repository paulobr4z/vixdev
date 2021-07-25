import styled from 'styled-components'

interface MenuProps {
  click: boolean;
}

export const Container = styled.div`
  width: 100%;
`
export const Header = styled.div`
  height: 80px;
  width: 100%;
  background: #202024;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
  }

`
export const Main = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .title  {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 48px 16px 16px;

    p {
      display: flex;
      align-items: center;
      cursor: pointer;
      background: #202024;
      padding: 8px 8px 8px 18px;
      border-radius: 8px;
    }
  }

  .no-task {
    margin: 16px;
  }

  .todo {
    background: #202024;
    border-radius: 8px;
    padding: 16px 32px;
    margin: 16px;

    p {
      padding: 8px 0;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const NewTodo = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.background};
  opacity: ${({click}) => click ? '1' : '0'};
  visibility: ${({click}) => click ? 'visible' : 'hidden'};
  transition: all 0.5s;

  .header-todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    margin-bottom: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;

    h1 {
      color: #fff;
      margin-bottom: 8px;
    }

    input, select, textarea {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      border: 1px solid #a8a8b3;
      margin: 8px 0;
    }

    textarea {
      height: 100px;
      padding: 16px;
    }

    .cancel {
      background: #df4759;
    }

    button {
      margin-top: 12px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: ${props => props.theme.colors.primary};
      color: #fff;
      cursor: pointer;
      border: 0;
    }

    input, textarea {
      width: 100%;
    }
  }
`