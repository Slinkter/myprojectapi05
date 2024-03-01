import React from "react";
import { Routes, Route } from "react-router-dom";

/*  */
import { Avatar } from "@material-tailwind/react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

const App = () => {
  return (
    <div className="">
      <div className="min-h-screen p-6 bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipes-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
