import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import DetailsInformation from "../Home/Home/MyProject/DetailsInformation";
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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/detailsinfo/:id',
                element:<DetailsInformation></DetailsInformation>,
                loader: ({params}) => fetch(`https://protfolio-server-nine.vercel.app/projects/${params.id}`)
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