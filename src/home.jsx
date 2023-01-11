import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Services from "./components/services";
import Team from "./components/team";

export default function Home() {
    return <div>
        <Navbar />
        <Services />
        <Projects />
        <Team />
        <Footer />
    </div>
}