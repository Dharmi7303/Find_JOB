import React from "react";
import GlobalStyle from "./globals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import JobsPage from "./pages/JobsPage";
import styled from "styled-components";
import Footer from "./components/Footer";
import JobPostPage from "./pages/JobPostPage";
import { JobSearchProvider } from "./context/JobSearchContext";
import AboutUsPage from "./pages/AboutUsPage";

const AppStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--padding-18);
  // position: relative;
`;

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Router>
        <JobSearchProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobPostPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>

          <Footer />
        </JobSearchProvider>
      </Router>
    </AppStyled>
  );
}

export default App;
