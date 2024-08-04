import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import './App.css'
export default function ParentComponent() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <Navbar sidebarVisible={sidebarVisible} />
      <Sidebar handleSidebarToggle={handleSidebarToggle} />
      <Home sidebarVisible={sidebarVisible}></Home>
    </div>
  );
}
