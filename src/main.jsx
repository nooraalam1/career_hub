import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Main';
import Home from './Components/Home';
import Stat from './Stat';
import AppliedJobs from './AppliedJobs';
import Blog from './Blog';
import StartApplying from './StartApplying';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
          path:'/',
          element:<Home></Home>,
      },
      {
        path:"/stat",
        element:<Stat></Stat>,
      },
      {
        path:"/AJ",
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path:"/blog",
        element:<Blog></Blog>,
      },
      {
        path:"/SA",
        element:<StartApplying></StartApplying>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
