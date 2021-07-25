import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import api from '../services/api'

import {
  MdEdit,
  MdDelete,
  MdAdd,
  MdClear
} from 'react-icons/md';

interface TodoGet {
  id: string
  title: string;
  description: string;
  date: string;
  status: string
}

interface TodoPost {
  title: string;
  description: string;
  status: string
}

import {
  Container,
  Header,
  Main,
  NewTodo
} from '../styles/pages/dashboard';


export default function Dashboard() {
  const [todos, setTodos] = useState<TodoGet[]>([]);
  const [todo, setTodo] = useState<TodoGet>();
  const [click, setClick] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();

  async function getTodos() {
    try {
      const response = await api.get('/todos');
      setTodos(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  function onSubmit(data:TodoPost, e) {
    e.preventDefault();
      
    async function newTodo() {

      if (todo === undefined) {
        try {
          await api.post('/todos', {
            title: data.title,
            description: data.description,
            status: data.status,
          })

          reset();  
          setClick(!click);
        } catch (err) {
          console.log(err)
        }  
      } else {
        try {
          await api.put(`todos/${todo.id}`,{
            title: data.title,
            description: data.description,
            status: data.status,
          }, {
            headers : {"Content-Type": "application/json"}
          });


          reset();  
          setTodo(undefined);
          setClick(!click);
        } catch (err) {
          console.log(err);
        }
      }
    }
    
    reset();
    newTodo();
    getTodos(); 
  }

  async function editTodo(todo: TodoGet) {
    setValue("title", todo.title)
    setValue("description", todo.description)
    setTodo(todo)
    setClick(!click);
    getTodos();
  }

  function cancelTodo() {
    setClick(!click)
    getTodos();
    reset();
  }

  async function deleteTodo(todoId:string) {
    try {
      await api.delete(`todos/${todoId}`)
    } catch (err) {
      console.log(err);
    }

    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header>
        <div className="wrapper">
          <div className="logo">
            Vix.dev
          </div>
          <div className="user">
            Paulo Braz
          </div>          
        </div>
      </Header>
      <Main>
        <div className="title">
          <h1>Minhas Tarefas</h1>
          <p onClick={() => setClick(!click)}>
            Nova atividade
            <MdAdd style={{ fontSize: 32, marginLeft: 8 }} />
          </p>
        </div>
        {todos.length === 0
          ? <p className="no-task">Sem atividades</p>
          : todos.map((todo) => (
              <div
                className="todo"
                key={todo.id}
              >
                <p>
                  <strong>{todo.title}</strong>
                </p>
                <p>{todo.description}</p>
                <p>{todo.date}</p>
                <div>
                  <p>{todo.status}</p>
                  <div>
                    <MdEdit 
                      style={{ fontSize:24, marginRight: 16, cursor:'pointer'}}
                      onClick={() => editTodo(todo)}
                    />
                    <MdDelete 
                      style={{ fontSize:24, cursor:'pointer'}}
                      onClick={() => deleteTodo(todo.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
      </Main>

      <NewTodo click={click}>
        <div className="header-todo">
          <h1>Nova Atividade</h1>
          <MdClear
            style={{ fontSize:32, cursor:'pointer'}}
            onClick={cancelTodo}
          />
        </div>
      <form onSubmit={handleSubmit(onSubmit)} >
          <input
            type="text" 
            placeholder="title"
            {...register("title", {})}
            defaultValue={todo?.title}
          />
          {errors.title && <p>Campo Obrigatório</p>}
          <input
            type="text"
            placeholder="description"
            {...register("description", {})}
            defaultValue={todo?.description}
          />
          {errors.description && <p>Campo Obrigatório</p>}
          <select 
            {...register("status", )}
            defaultValue={todo?.status}
          >
            <option value="pendente">pendente</option>
            <option value=" concluida"> concluida</option>
            <option value=" cancelada"> cancelada</option>
          </select>

          <button
            type="submit"
            value="confirm"
          >
            Confirmar
          </button>
        </form>

      </NewTodo>
      
    </Container>
  )
}