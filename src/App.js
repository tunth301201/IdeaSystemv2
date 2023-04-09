import { Flowbite } from "flowbite-react";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import theme from "./flowbite-theme.js";
import Home from './pages/Home.jsx';
import Tag from "./pages/Tag.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ViewIdea from "./pages/ViewIdea.jsx";
import CreateIdea from "./pages/CreateIdea.jsx";

export default function App() {
  return (
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Routes>
       
            <Route path="/" element={<Home />}/>
            <Route path="/tag" element={<Tag />}/>
            <Route path="/viewidea" element={<ViewIdea />}/>
            <Route path="/createidea" element={<CreateIdea />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
         
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}
