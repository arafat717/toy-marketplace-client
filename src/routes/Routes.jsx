import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import PrivateRoutes from "./PrivateRoutes";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";
import AllTouys from "../AllToys/AllTouys";
import AllToysDetails from "../AllToys/AllToysDetails";
import Blogs from "../blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'add',
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
      },
      {
        path: 'mytoys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: 'alltoys',
        element:<AllTouys></AllTouys>
      },
      {
        path: 'alltoydetails/:id',
        element: <PrivateRoutes><AllToysDetails></AllToysDetails></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/add/${params.id}`)
      },
      {
        path: 'updatetoy/:id',
        element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/add/${params.id}`)
      },
      {
        path: 'view/:id',
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/toydata/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  }
]);

export default router;