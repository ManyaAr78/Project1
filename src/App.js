import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RepositoryList from "./components/RepositoryList";
import SignIn from "./Pages/SignIn"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <RepositoryList />
        </div>
      </div>
    ),
  },
  {
    path: "/signup",
    element: <SignIn />, 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

