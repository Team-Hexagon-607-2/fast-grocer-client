import CategoryPageProducts from "../../components/CategoryPage/CategoryPageProducts/CategoryPageProducts";
import OnSale from "../../components/OnSale/OnSale";
import ProductDetails from "../../components/Products/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import SearchPage from "../../components/SearchPage/SearchPage";
import CategoryLayout from "../../Layout/CategoryLayout/CategoryLayout";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllDeliveryman from "../../Pages/Dashboard/AllDeliveryman/AllDeliveryman";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Cart from "../../components/Cart/Cart.jsx";
import AllProducts from "../../components/AllProducts/AllProducts";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";
import WishList from "../../components/WishList/WishList";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
  {
    path: "/category",
    element: <CategoryLayout></CategoryLayout>,
    children: [
      {
        path: "/category/:name",
        element: <CategoryPageProducts></CategoryPageProducts>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/all-deliveryman",
        element: <AllDeliveryman></AllDeliveryman>,
      },
    ],
  },
]);

export default router;
