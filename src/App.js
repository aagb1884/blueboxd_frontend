import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./Components/page_loader";
import { AuthenticationGuard } from "./Components/authentification_guard";
import './App.css';
import Credits from "./pages/credits_page";
import HomePage from "./pages/home_page";
import ProfilePage from "./pages/profile_page";
import Story from "./pages/story_page";
import AdminPage from "./pages/admin_page";
import NotFoundPage from "./pages/not_found_page";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/story" element={<Story />} />
    <Route path="/credits" element={<Credits />} />
    <Route
      path="/profile"
      element={<AuthenticationGuard component={ProfilePage} />}
    />
    <Route
      path="/admin"
      element={<AuthenticationGuard component={AdminPage} />}
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );
}

export default App;
