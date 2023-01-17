import Products from "../../components/Products/Products";

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
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://fg-server.vercel.app/products')
            }
        ]        
    }
]);

export default router;
