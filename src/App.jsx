import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing/index';
import BlogPage from './pages/Blog';
import BlogPost from './pages/Blog/post/vast-telefoonnummer-koppelen-whatsapp';
import LoginPage from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/offerte-formulier-website',
    element: <BlogPost />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
