import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Destinations from "./routes/Destinations";
import About from "./routes/About";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/travelwithsouvik" element={<Home />} />
          <Route
            path="/travelwithsouvik/Destinations"
            element={<Destinations />}
          />
          <Route path="/travelwithsouvik/About" element={<About />} />
          <Route path="/travelwithsouvik/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
