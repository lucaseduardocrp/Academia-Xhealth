import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ]
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />
  },
])

export default router;
