import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './components/MainLayout/MainLayOut.jsx';
import Users from './components/Users/Users.jsx';
import Update from './components/Update/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  },
  {
    path: 'update/:id',
    element: <Update></Update>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
