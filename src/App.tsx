import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';

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
