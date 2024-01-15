

import { Profiler, useContext } from "react";
import './style.scss';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";


function App() {
   
  //lets create a fake functionality so that if a user is not logged in it will allow to make login before then enter any other page .
  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);


  const Layout = () =>{
    return(
      // creating the dark mode 
      
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          
          <Rightbar/>

        </div>
      </div>
    )
  }
   //  ensure that only authenticated users can access specific pages or components
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>

    }
    return children;
  };

  const router = createBrowserRouter([
    {
       path:"/",
       element:(
       <ProtectedRoute>
        <Layout/>
        </ProtectedRoute>
        ) ,
       children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }

       ]
    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/register",
      element:<Register/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
