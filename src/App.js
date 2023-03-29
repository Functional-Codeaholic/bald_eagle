import React from "react";
import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import ContactThanks from "./Components/Pages/Contact/ContactThanks";
import Copyright from "./Components/Pages/Copyright/Copyright";
import Error404 from "./Components/Pages/Error404/Error404";


function App() {
    return (
        <>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="#Home" element={<Home />} />
              <Route path="#About" element={<About />} />
              <Route path="#Contact" element={<Contact />} />
                <Route path="thank-you" element={<ContactThanks />} />
              <Route path="copy" element={<Copyright />} />
              <Route path='*' element={<Error404 />} />
            </Route>
          </Routes>
        </>
      );
}

export default App;
