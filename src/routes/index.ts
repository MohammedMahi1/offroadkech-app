import { createBrowserRouter } from "react-router";
import Layout from "../app/_layout";
import Home from "../app/home";

export const router = createBrowserRouter([
    {
        path: "",
        Component: Layout,
        children: [
            { path: "", Component: Home ,index:true},
            { path: "/", Component: Home ,index:true},
        ]
    }
])