import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Newsletters from "./components/Newsletters";
import Cards from "./components/Cards";


function App() {
  return (
    <><div>
      <Navbar />
    </div><Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/footer" element={<Footer />} />
      </Routes></>


  );
}

export default App;
