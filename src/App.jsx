import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing/index';
import BlogPage from './pages/Blog';
import BlogPost from './pages/Blog/post/vast-telefoonnummer-koppelen-whatsapp';

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
    path: '/blog/vast-telefoonnummer-koppelen-whatsapp',
    element: <BlogPost />,
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
