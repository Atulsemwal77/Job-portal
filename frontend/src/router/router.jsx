import { createBrowserRouter } from "react-router-dom";
import App from  "../App"
import Home from "../pages/home";
import CreateJob from "../pages/CreateJob";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {path : '/', element : <Home/>},
            {path: '/post-job', element: <CreateJob/>},
            
            {path : '/login' , element:<Login/>}
        ]
    }
])
export default router