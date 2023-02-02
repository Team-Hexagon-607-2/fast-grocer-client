import CategoryPageProducts from "../../components/CategoryPage/CategoryPageProducts/CategoryPageProducts";
import OnSale from "../../components/OnSale/OnSale";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import SearchPage from "../../components/SearchPage/SearchPage";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllDeliveryman from "../../Pages/Dashboard/AllDeliveryman/AllDeliveryman";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import CategoryLayout from "../../Layout/CategoryLayout/CategoryLayout";
import Cart from "../../components/Cart/Cart.jsx";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist";
import Payments from "../../Pages/Dashboard/Payments/Payments";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import AllProducts from "../../components/AllProducts/AllProducts";
import AboutUs from "../../components/AboutUs/AboutUs/AboutUs";
import PlaceOrder from "../../components/PlaceOrder/PlaceOrder";
import Payment from "../../components/PlaceOrder/Payment";
import AllOrder from "./../../Pages/Dashboard/AllOrder/AllOrder";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import EditProduct from "../../Pages/Dashboard/EditProduct/EditProduct";
import OrderForDeliverMan from "../../Pages/Dashboard/OrderForDeliverMan/OrderForDeliverMan";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DeliveryHistory from "../../Pages/Dashboard/DeliveryHistory/DeliveryHistory";
import FlashSalePage from "../../components/FlashSale/FlashSalePage";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import DeliveryRoutes from "../DeliveryRoutes/DeliveryRoutes";
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
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
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
        path: "/flashsale",
        element: <FlashSalePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/place-order",
        element: <PrivateRoute><PlaceOrder /></PrivateRoute>
      },
      {
        path: "/payment",
        element: <PrivateRoute><Payment /></PrivateRoute>
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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
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
    ],
  },
  {
    path: "/dashboard",
    element: (<PrivateRoute> <DashboardLayout /></PrivateRoute>),
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/dashboard/all-buyers",
        element: <AdminRoutes><AllBuyers /></AdminRoutes>
      },
      {
        path: "/dashboard/all-deliveryman",
        element: <AdminRoutes><AllDeliveryman /></AdminRoutes>
      },
      {
        path: "/dashboard/all-order",
        element: <AdminRoutes><AllOrder /></AdminRoutes>,
      },
      {
        path: "/dashboard/add-product",
        element: <AdminRoutes><AddProduct /></AdminRoutes>,
      },
      {
        path: "/dashboard/edit-product",
        element: <AdminRoutes><EditProduct /></AdminRoutes>,
      },
      {
        path: "/dashboard/delivery-man-order",
        element: <DeliveryRoutes><OrderForDeliverMan /></DeliveryRoutes>,
      },
      {
        path: "/dashboard/delivery-history",
        element: <DeliveryRoutes><DeliveryHistory /></DeliveryRoutes>,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/my-wishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/dashboard/payments",
        element: <Payments></Payments>,
      },
      {
        path: "/dashboard/my-reviews",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
]);

export default router;
