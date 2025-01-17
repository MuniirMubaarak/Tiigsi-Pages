import { createBrowserRouter } from "react-router-dom"
import MainPage from "./pages/main-page"
import About from "./pages/about"
import Contacts from "./pages/contacts"
import NotFound from "./pages/notfound"
import Dashboard from "./pages/dashboard/Dashboard"
import Overview from "./pages/dashboard/Overview"
import Users from "./pages/dashboard/users"
import Settings from "./pages/dashboard/Settings"
import Home from "./pages/home"
import ServicesPage from "./pages/Services"
import Tasks from "./pages/dashboard/Tasks/tasks"
import EditTasks from "./pages/dashboard/Tasks/EditTasks"
import Posts from "./pages/posts"
import Post from "./pages/Post"
const router = createBrowserRouter([
            {
                path: "/",
                element: <MainPage/>,
                children: [
                    {
                        index : true,
                        element : <Home /> 
                    },
                    {
                        path: "/about",
                        element: <About />
                    },
                    {
                        path: "/contact",
                        element: <Contacts/>
                    },
                    {
                      path: "/services",
                      element : <ServicesPage />
                    },
                    {
                      path: "/posts",
                      element: <Posts />,
                    },
                    {
                      path: "/post/:id",
                      element: <Post />
                    },
                    {
                        path: "*",
                        element: <NotFound/>
                    }
                ]
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                      path: "",
                      element: <Overview />
                    },
                    {
                      path : "tasks",
                      element: <Tasks />,
                    },
                    {
                      path: "edittask/:index",
                      element: <EditTasks />
                    },
                    {
                      path: "users",
                      element: <Users />
                    },
                    {
                      path: "settings",
                      element: <Settings />
                    }
                  ]
            }
            
])

export default router;
