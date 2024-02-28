import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PricePage from './pages/Price';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/price',
    element: <PricePage />,
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
