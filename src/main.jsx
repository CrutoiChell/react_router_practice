import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import s from './index.module.css'
import { App } from './App.jsx'
import { Todo } from './Components/TodoList/Todo';
import { ErrorPage404 } from './Components/ErrorPage404/ErrorPage404.jsx';
import { Notebook } from './Components/NoteBook/Notebook.jsx';
import { Clicker } from './Components/Cliker/Clicker.jsx';
import { loader as TodoLoader } from './Components/TodoList/Todo';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: '/Todolist',
        element: <Todo />,
        loader: TodoLoader,
      },
      {
        path: '/Notebook',
        element: <Notebook />
      },
      {
        path: '/Clicker',
        element: <Clicker />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
