import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
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
