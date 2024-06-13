import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PageLoader } from "./Components/Navigation/page_loader";
import { AuthenticationGuard } from './auth0/authentification_guard';
import Credits from "./pages/credits_page";
import HomePage from "./pages/home-page/home_page";
import ProfilePage from "./pages/profile-page/profile_page";
import ProfileForm from './Components/Forms/ProfileForm';
import Story from "./pages/story-pages/story_page";
import StoryDetailPage from './pages/story-pages/story-detail-page';
import AdminPage from "./pages/admin_page";
import NotFoundPage from "./pages/not_found_page";
import { createStory, getStories } from "./Services/story_services";
import { getDoctors } from "./Services/doctor_services";
import { createCompanion, getCompanions } from "./Services/companion_services";
import { getCastAndCrew } from "./Services/cast_crew_services";
import { getPeople } from "./Services/people_services";
import { getUserStories, createUserStory, getUserStoryByUserId, 
getUserStoryByUserReviews, getUserStoryByUserWatchlist } from "./Services/story_connection_services";
import { getUsers, createUser } from "./Services/user_services";
import AboutPage from './pages/about-page';
import ReviewForm from './Components/Forms/ReviewForm';
import ReviewPage from './pages/review-page';
import AddStory from './Components/Forms/AddStoryForm';
import AddCompanion from './Components/Forms/AddCompanion';

function App() {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [companions, setCompanions] = useState([]);
  const [people, setPeople] = useState([]);
  const [castAndCrew, setCastAndCrew] = useState([]);
  const [userStories, setUserStories] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userStoryByID, setUserStoryByID] = useState(null)

  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (!user) return;
    fetchData();
  }, [user]); 

  useEffect(() => {
    if (isLoading) return;
    fetchData();
  }, [isLoading]);

  
  const fetchData = () => {
        getUsers()
        .then(users => {
          setLoggedInUser(users[0])
          const userId = users[0].id
          Promise.all([getUsers(), getStories(), getDoctors(), getCompanions(), getPeople(), getCastAndCrew(), 
            getUserStories(), getUserStoryByUserId(userId), getUserStoryByUserReviews(userId), getUserStoryByUserWatchlist(userId)])
            .then(([usersData, storiesData, doctorsData, companionsData, peopleData, castAndCrewData, 
            userStoriesData, userStoriesByUserIdData, 
          ]) => {
          setUsers(usersData);
          setStories(storiesData);
          setDoctors(doctorsData);
          setCompanions(companionsData);
          setPeople(peopleData);
          setCastAndCrew(castAndCrewData);
          setUserStories(userStoriesData);
          setUserStoryByID(userStoriesByUserIdData)
          }).catch(err => {
            console.log(err)
            setError(err)
          })
          .finally(() => {
            setLoading(false)
          }) 
        })
        } 
      
            

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  // if(!user) {
  //   return null
  // }

  

  const addUser = (newUser) => {
    createUser(newUser, loggedInUser).then((savedUser) => setUsers([...users, savedUser]));
  }

  const addNewStory = (newStory) => {
    return createStory(newStory, loggedInUser).then((savedStory) => {
      setStories([...stories, savedStory]);
      return savedStory
    })
  }

  const addUserStory = (newUserStory) => {
    return createUserStory(newUserStory, loggedInUser).then((savedUserStory) => {
      setUserStories([...userStories, savedUserStory]);
      return savedUserStory;
    });
  };

  const addNewCompanion = (newCompanion) => {
    return createCompanion(newCompanion, loggedInUser).then((savedCompanion) => {
      setCompanions([...companions, savedCompanion]);
    })
  }
  

  return (
    <div className="app">
    <Routes location={previousLocation || location}>
    <Route path="/" element={<HomePage
            stories={stories}
            userStories={userStories}
            loading={loading}
            error={error}
    />} />
    <Route path="/about" element={<AboutPage />} />
    <Route  path="/stories" 
            element={<Story 
            stories={stories}
            loading={loading}
            error={error}
            loggedInUser={loggedInUser}
            addUserStory={addUserStory}
            />} />
    <Route path="stories/:id" 
            element={<StoryDetailPage
            isLoading={isLoading}
            setLoading={setLoading}
            setError={setError}
            loggedInUser={loggedInUser}
            addUserStory={addUserStory}
            />}
            />
    <Route path="/credits" element={<Credits />} />
    <Route path="/profile"
            element={<ProfilePage
            loggedInUser={loggedInUser}
            userData={users}
            userStories={userStories}
            // reviews={userStoriesReviewed}
            // watchlist={userStoriesWatchlist}
            loading={loading}
            error={error}
      />} 
      />
    <Route path="/reviews/:id"
            element={<ReviewPage
            isLoading={isLoading}
            setLoading={setLoading}
            setError={setError} 
            />}
    />
    <Route
      path="/edit_profile"
      element={<AuthenticationGuard 
      component={ProfileForm} />}
    />
    <Route
      path="/add_review"
      element={<AuthenticationGuard 
      component={ReviewForm} 
      fetchData={fetchData} 
      addUserStory={addUserStory} />}
    />
    <Route
      path="/add_story"
      element={<AuthenticationGuard 
      component={AddStory} 
      fetchData={fetchData} 
      addStory={addNewStory} 
      doctorData={doctors}
      companionData={companions}/>}
    />
    <Route
      path="/admin"
      element={<AuthenticationGuard 
      component={AdminPage} />}
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  {previousLocation && (
    <Routes>
      <Route
      path="/add_companion"
      element={<AuthenticationGuard 
      component={AddCompanion} 
      fetchData={fetchData} 
      addCompanion={addNewCompanion} 
      companionData={companions}/>}
    />
    </Routes>
  )}
  </div>
  );
}

export default App;
