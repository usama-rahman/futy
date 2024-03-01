import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing/index';
import BlogPage from './pages/Blog';

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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
