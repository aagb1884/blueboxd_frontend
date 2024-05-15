import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
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
import { getStories } from "./Services/story_services";
import { getDoctors } from "./Services/doctor_services";
import { getCompanions } from "./Services/companion_services";
import { getCastAndCrew } from "./Services/cast_crew_services";
import { getPeople } from "./Services/people_services";
import { getUserStories } from "./Services/story_connection_services";

function App() {
  const [stories, setStories] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [companions, setCompanions] = useState([]);
  const [people, setPeople] = useState([]);
  const [castAndCrew, setCastAndCrew] = useState([]);
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);
  
  const fetchData = () => {
          Promise.all([getStories(), getDoctors(), getCompanions(), getPeople(), getCastAndCrew(), getUserStories()])
          .then(([storiesData, doctorsData, companionsData, peopleData, castAndCrewData, userStoriesData]) => {
          setStories(storiesData);
          setDoctors(doctorsData);
          setCompanions(companionsData);
          setPeople(peopleData);
          setCastAndCrew(castAndCrewData);
          setUserStories(userStoriesData);
          }) 
        } 
           
    
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="app">
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route  path="/stories" 
            element={<Story 
            stories={stories}
            />} />
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
  </div>
  );
}

export default App;
