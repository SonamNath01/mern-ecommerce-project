import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import{Routes,Route} from 'react-router-dom';
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Order";
import Login from "./components/Login";


function App() {
  const[token,setToken]=useState('');

  return (
    <div className="bg-gray-50 min-h-screen">
      {token===""?
      <Login />:  
      
      <>
        <Navbar />
        <hr />
        <div className="flex w-full">
          <SideBar />
          <div className="w-[70%] mx-auto ml-[max(5vm,25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>


          </div>
        </div>
      </>
      }
    </div>
  );
}

export default App;
