import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
 

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            }, 
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])