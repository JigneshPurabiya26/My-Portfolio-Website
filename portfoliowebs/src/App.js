
import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutme from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projectsect from "./components/Projectsect";
// import RecommendationSection from "./components/RecommendationSection";
import SkillSection from "./components/SkillSection";
import Title from "./components/Title";
import Contact from "./components/Contact";
// import Writerecommendation from "./components/Writerecommendation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./components/Notfound";
import Addproject from "./components/Addproject";
import Addblog from "./components/Addblog";
import { Provider } from "./Context";
import Allprojects from "./components/Allprojects";
import Allblogs from "./components/Allblogs";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import Scroll from "./components/Scroll";

function App() {
  AOS.init();
  return (
    <Provider>
      <BrowserRouter>
        <Scroll/>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={[
              <Title 
                name="Jignesh Purabiya"
                leadText="Highly motivated and data-driven individual with a passion for working with
                data, a solid understanding of statistics, and proficiency in several
                machine learning algorithms. Eager to leverage my skills to tackle realworld challenges through data-driven solutions. A dedicated learner with
                an inquisitive mindset, seeking opportunities to contribute to impactful
                data science projects.
                "
              />,
              <Projectsect />,
              <Blog />,
              <SkillSection />,
              // <RecommendationSection />,
              <Aboutme />,
            ]}
          />
          <Route path="/allprojects" element={<Allprojects />} />
          <Route path="/project/:id" element={<ProjectPage/>}/>
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/blog/:id" element={<BlogPage/>}/>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/recommendation" element={<Writerecommendation />} /> */}
          <Route path="/project/addproject" element={<Addproject />} />
          <Route path="/blog/addblog" element={<Addblog />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
