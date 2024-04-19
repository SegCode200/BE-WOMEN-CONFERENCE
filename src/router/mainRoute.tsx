import { createBrowserRouter } from "react-router-dom";
import LandPage from "../pages/LandPage";
import Layout from "../components/layout/Layout";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/Auth/NotFound";
import Login from "../pages/Auth/Login";
import Password from "../pages/Auth/Password";
import MailSend from "../pages/Auth/MailSend";
import AuthLayout from "../components/layout/AuthLayout";
import HomeScreen from "../pages/Screens/HomeScreen";
import Journal from "../pages/Screens/Users/Journal";
import Community from "../pages/Screens/Users/Community";
import Prayer from "../pages/Screens/Users/Prayer";
import Events from "../pages/Screens/Users/Events";
import Notifications from "../pages/Screens/Users/Notifications";
import Settings from "../pages/Screens/Users/Settings";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Screens/Admin/Dashboard";


export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element:<Layout/> ,
        children:[
            {
                index: true,
                element: <LandPage />
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/password",
        element: <Password/>
    },
    
    {
        path: "/mailsend",
        element: <MailSend/>
    },
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/home/user",
        element:<AuthLayout/> ,
        children:[
            {
                index: true,
                path: "dashboard",
                element: <HomeScreen />
            },
            {
                path: "journal",
                index:true,
                element: <Journal/>
            },
            {
                path: "community",
                index: true,
                element: <Community/>
            },
            {
                path: "prayer",
                index: true,
                element: <Prayer/>
            },
            {
                path: "events",
                index: true,
                element: <Events/>
            }
            ,
            {
                path: "notify",
                index: true,
                element: <Notifications/>
            }
            ,
            {
                path: "settings",
                index: true,
                element: <Settings/>
            }
        ]},
        
            {
                path: "/home/admin",
                element : <AdminLayout/>,
                children:[
                    {
                        path: "dashboard",
                        index: true,
                        element: <Dashboard/>
                    }
                ]
            }
        
    
])