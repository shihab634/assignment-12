import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
// import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from '../pages/Dashboard'
import DasBoard from "../components/DasBoard";
import DashboardLayout from "../layouts/DashboardLayout";
import Request from "../pages/Request";
import CreateDonation from "../components/dashboard/CreateDonation";
import Profile from "../components/dashboard/Profile";


const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
   
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          index:true,
          element: <Dashboard></Dashboard>
        },
        {
          path:'my-donation-requests',
          element:<Request></Request>
        },
        {
          path:'create-donation-request',
          element:<CreateDonation></CreateDonation>
        },
        {
          path:'profile',
          element:<Profile></Profile>
        }
      ]
    }
    ],
  },
]);

export default mainRoutes;
 //  {
    //     path: "/dashboard",
    //     element: <DashboardLayout />,
    //     children: [
    //       {
    //         index: true,
    //         element: <Dashboard />,
    //       },
          
    //       {
    //         path: "add-book",
    //         element: <AddBooks />,
    //       },
    //       {
    //         path: "all-users",
    //         element: <AllUsers />,
    //       },
    //       {
    //         path: "my-books",
    //         element: <MyBooks />,
    //       },
    //       {
    //         path: "my-requests",
    //         element: <MyBooks />,
    //       },
    //     ],
    //   },