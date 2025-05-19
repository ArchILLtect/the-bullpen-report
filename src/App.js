/*
Created by Nick Hanson
Last modified: 5/17/25

This file is part of The Bullpen Report project.
The Bullpen Report is a baseball statistics viewer powered by AWS services.
It connects to a custom API built using Lambda, API Gateway, and DynamoDB,
delivering live team, player, and game data directly to the browser.
The Bullpen Report is licensed under the MIT License.
See the LICENSE file in the project root for more information.
*/

import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Stats from "./pages/Stats";
import { Homepage } from "./pages/Homepage";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="*" element={<h2>404: Page Not Found</h2>} />
            </Routes>
        </Router>
    );
}
