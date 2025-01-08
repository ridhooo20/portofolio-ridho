import React from "react";
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Portofolio from "./Component/Portofolio";
import Footer from './Component/Footer';
import Musik from "./Component/Audio"
import "./style.css";

const App = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full ">
        <Navbar />
        <Hero />
        <About />
        <Portofolio />
        <Footer/>
        <Musik/>
      </div>
    </main>
  );
};

export default App;
