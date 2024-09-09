import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../routes/App'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Cart from "../routes/Cart"
import Home from '../routes/Home'
import {Provider} from "react-redux"
import itemStore from "./store/index"
import Login from '../routes/Login'
import About from '../routes/About'
import Feedback from '../routes/Feedback'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/cart",
      element:<Cart/>,
    },
  {path:"/",
    element:<Home/>,

  },
  {path:"/login",
    element:<Login/>,

  }
  ,
  {path:"/about",
    element:<About/>,

  },
  {path:"/feedback",
    element:<Feedback/>,

  }




]
  }

])


createRoot(document.getElementById('root')).render(

  <StrictMode>
<Provider store={itemStore}>

    <RouterProvider router={router} />
  
</Provider>
  </StrictMode>,
)
