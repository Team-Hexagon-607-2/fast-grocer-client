import OnSale from "../../components/OnSale/OnSale";
import ProductDetails from "../../components/Products/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import SearchPage from "../../components/SearchPage/SearchPage";
import Wishlist from "../../components/Shared/Navbar/Wishlist";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllDeliveryman from "../../Pages/Dashboard/AllDeliveryman/AllDeliveryman";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";
import Payments from "../../Pages/Dashboard/Payments/Payments";

const { createBrowserRouter } = require("react-router-dom");
const { default: ErrorPage } = require("../../components/ErrorPage/ErrorPage");
const { default: Home } = require("../../components/Home/Home/Home");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://fg-server.vercel.app/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://fg-server.vercel.app/products/${params.id}`),
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/onsale",
        element: <OnSale />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/all-buyers",
        element: <AllBuyers></AllBuyers>
      },
      {
        path: "/dashboard/all-deliveryman",
        element: <AllDeliveryman></AllDeliveryman>,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboard/wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path: '/dashboard/payments',
        element: <Payments></Payments>
      },
      {
        path: '/dashboard/my-reviews',
        element: <MyReviews></MyReviews>
      }
    ]
  }
]);

export default router;
