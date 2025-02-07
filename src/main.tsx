import React from "react";
import ReactDOM from "react-dom/client";
// import AnimatedCursor from "react-animated-cursor";
// import SuperBubble from "./components/SuperBubble/SuperBubble.tsx";
// import { isMobile } from "react-device-detect";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import Blogpost from "./pages/Blogpost.tsx";
import App from "./pages/App.tsx";
import Jobs from "./pages/Jobs.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blogpost />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
    {/* <SuperBubble />
    {!isMobile ? (
      <AnimatedCursor
        innerSize={40}
        outerSize={0}
        innerScale={0.92}
        innerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow:
            "rgba(0, 0, 0, 0.03) 0px 1px 2px, rgba(0, 0, 0, 0.03) 0px 2px 4px, rgba(0, 0, 0, 0.03) 0px 4px 8px, rgba(0, 0, 0, 0.03) 0px 8px 16px, rgba(0, 0, 0, 0.03) 0px 16px 32px, rgba(0, 0, 0, 0.03) 0px 32px 64px",
        }}
      />
    ) : null} */}
  </React.StrictMode>
);
