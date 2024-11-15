import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Userpage from './pages/Userpage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'dashboard',
        element: <ProtectedRoutes component={<Dashboard/>}/>
      },
      {
        path: 'profile',
        element: <ProtectedRoutes component={<Profile/>}/>
      },
      {
        path: 'userpage/:id',
        element: <ProtectedRoutes component={<Userpage/>}/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)