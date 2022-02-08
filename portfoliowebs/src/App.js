import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutme from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projectsect from "./components/Projectsect";
import RecommendationSection from "./components/RecommendationSection";
import SkillSection from "./components/SkillSection";
import Title from "./components/Title";
import Contact from "./components/Contact";
import Writerecommendation from "./components/Writerecommendation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./components/Notfound";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import Addproject from "./components/Addproject";
import Addblog from "./components/Addblog";
import {Provider} from "./Context";
import Allprojects from "./components/Allprojects";

function App() {
  AOS.init();
  return (
    <Provider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={[
            <Title
              name="Jignesh Purabiya"
              leadText="I am an Engineering student at St.John's College of Engineering and Management."
            />,
            <Projectsect />,
            <Blog />,
            <SkillSection />,
            <RecommendationSection />,
            <Aboutme />,
          ]}
        />
        <Route path ="allprojects" element={<Allprojects/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommendation" element={<Writerecommendation />} />
        <Route path="/project/add" element={<Addproject />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/blog/add" element={<Addblog/>} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<Notfound />} />
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </Provider>
    
  );
}
export default App;
