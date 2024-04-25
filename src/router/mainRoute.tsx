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
import Social from "../pages/Screens/Users/Prayer";
import Events from "../pages/Screens/Users/Events";
import Notifications from "../pages/Screens/Users/Notifications";
import Settings from "../pages/Screens/Users/Settings";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Screens/Admin/Dashboard";
import DifferentLocation from "../pages/Screens/Users/DifferentLocation";
import EventManagement from "../pages/Screens/Admin/EventManagement";
import UserManagement from "../pages/Screens/Admin/UserManagement";
import ContentManagement from "../pages/Screens/Admin/ContentManagement";
import Analytics from "../pages/Screens/Admin/Analytics";
import PushNotifications from "../pages/Screens/Admin/PushNotifications";
import Profile from "../pages/Screens/Admin/Profile";


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
                path: "social",
                index: true,
                element: <Social/>
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
            },
            {
                path: "location",
                index: true,
                element: <DifferentLocation/>
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
                    },
                    {
                        path: "events",
                        index: true,
                        element: <EventManagement/>
                    },
                    {
                        path: "users",
                        index: true,
                        element: <UserManagement/>
                    },
                    {
                        path: "content",
                        index: true,
                        element: <ContentManagement/>
                    },
                    {
                        path: "analytics",
                        index: true,
                        element: <Analytics/>
                    },
                    {
                        path: "notifications",
                        index: true,
                        element: <PushNotifications/>
                    },
                    {
                        path: "profile",
                        index: true,
                        element: <Profile/>
                    },

                ]
            }
        
    
])