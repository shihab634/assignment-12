import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
// import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
// import DasBoard from "../components/DasBoard";
import DashboardLayout from "../layouts/DashboardLayout";
import Request from "../pages/Request";
import CreateDonation from "../components/dashboard/CreateDonation";
import Profile from "../components/dashboard/Profile";
import RequestDetails from "../components/dashboard/RequestDetails";
import RequestDetailsEdit from "../components/dashboard/RequestDetailsEdit";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Admin/AllUsers";
import AllRequests from "../pages/Admin/AllRequests";
import ContentManagement from "../pages/Admin/ContentManagement";
import AddBlog from "../pages/Admin/AddBlog";
import AdminVol from "../pages/AdminVolRouting/AdminVol";
import DonationRequestsPage from "../components/publicFolder/DonationRequestsPage";
import SingleRequest from "../components/publicFolder/singleRequest";
import SearchPage from "../components/publicFolder/SearchPage";
import Blog from "../components/publicFolder/Blog";
import BlogManager from "../components/publicFolder/BlogManager";
import AdminVolBlog from "../pages/AdminVolRouting/AminVolBlog";
import BlogDetails from "../components/publicFolder/BlogDetails";

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
        path: "donation-requests",
        element: <DonationRequestsPage></DonationRequestsPage>,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/single-blog/${params.id}`),
      },
      {
        path: `/donation-requests/:id`,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/single-request/${params.id}`),
        element: (
          <PrivateRoute>
            <SingleRequest></SingleRequest>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Dashboard></Dashboard>,
          },
          {
            path: "my-donation-requests",
            element: <Request></Request>,
          },
          {
            path: "create-donation-request",
            element: <CreateDonation></CreateDonation>,
          },
          {
            path: "profile",
            element: <Profile></Profile>,
          },
          {
            path: "donation-request-details-edit/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:3000/single-request/${params.id}`),
            element: <RequestDetailsEdit></RequestDetailsEdit>,
          },
          {
            path: "donation-request-details/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:3000/single-request/${params.id}`),
            element: <RequestDetails></RequestDetails>,
          },
          {
            path: "all-users",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "all-blood-donation-request",
            element: <AdminVol></AdminVol>,
          },
          {
            path: "content-management",
            element: <ContentManagement></ContentManagement>,
          },
          {
            path: "content-management/add-blog",
            // element: <AddBlog></AddBlog>,
            element: <AdminVolBlog></AdminVolBlog>,
          },
        ],
      },
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
