import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import s from './index.module.css'
import { App, loader as mainLoader } from './App.jsx'
import { Todo, loader as TodoLoader } from './Components/TodoList/Todo';
import { ErrorPage404 } from './Components/ErrorPage404/ErrorPage404.jsx';
import { Notebook, loader as NoteBookLoader } from './Components/NoteBook/Notebook.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage404 />,
    loader: mainLoader,
    children: [
      {
        path: '/Todolist',
        element: <Todo />,
        loader: TodoLoader
      },
      {
        path: '/Notebook',
        element: <Notebook />,
        loader: NoteBookLoader,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
