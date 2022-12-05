import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import LoginSignUp from "../pages/LoginSignUp/LoginSignUp";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path:"about", 
            element: <About/> 
        },
        {
            path:"contact", 
            element:<Contact/>
        },
        {
            path:"login", 
            element:<LoginSignUp/>
        }
    ],
  },
  {
    path:"*", 
    element:<Error/>
}
  
]);