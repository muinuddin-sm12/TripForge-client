import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AllTourist from './pages/AllTourist.jsx';
import AddTourist from './pages/AddTourist.jsx';
import MyList from './pages/MyList.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/spot-info')
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/all-tourists-spot',
        element: <AllTourist/>,
        loader: () => fetch('http://localhost:5000/spot-info')
      },
      {
        path: '/add-tourists-spot',
        element: (
          <PrivateRoute>
            <AddTourist/>
          </PrivateRoute>
        )
      },
      {
        path: '/my-list',
        element: (
          <PrivateRoute>
            <MyList/>
          </PrivateRoute>
        )
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer autoClose={2002} position='top-center'/>
    </AuthProvider>
  </React.StrictMode>,
)
