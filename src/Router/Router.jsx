import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Shop/Menu';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,

      children :[
        {
            path:'/',
            element :<Home />
        },
        {
          path:'/service',
          element :<Menu />
      },
      ]
    },
  ]);

  export default router;