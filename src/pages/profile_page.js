import PageLayout from "../Components/page_layout";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../auth0/code-snippet";

const ProfilePage = (loggedInUser, userData, userStories, reviews, watchlist, loading, error) => {
    const { user } = useAuth0();

    if (!user) {
      return null;
    }

    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      return <p>There was an error loading the stories.</p>;
    }

    // const reviewedStoriesData = reviews.map((userStory) => {
    //   const {story, type, rating, review} = userStory

    //   return (
    //     <li key = {userStory.id}>
    //     <span>{story}</span>

    //     </li>
    //   )
    // })

    // console.log(reviewedStoriesData)

    return ( 
        <PageLayout>
       <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.display_name}</span>
                <span className="profile__description">{user.location}</span>
                {/* <span className="profile__description">{user.userImgURL}</span> */}
                <span className="profile__description">{loggedInUser.userBio}</span>
                <span className="profile__description">{user.userWebsite}</span>
                {/* <span className="profile__description">{user.userStories}</span> */}
              </div>
            </div>
            {/* <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div> */}
          </div>
        </div>
      </div>
        </PageLayout>
     );
}
 
export default ProfilePage;