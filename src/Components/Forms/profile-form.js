import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";

const ProfileForm = ({addUser, fetchData}) => {
    const [uuid, setUuid] = useState("")
    const [userType, setUserType] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [location, setLocation] = useState("");
    const [userImgURL, setUserImgURL] = useState("");
    const [userBio, setUserBio] = useState("");
    const [userWebsite, setUserWebsite] = useState("");
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      if (isAuthenticated && user) {
        const { given_name, family_name, picture, email, sub } = user;
        setUserData({ given_name, family_name, picture, email, sub });
        setUuid(sub);
        setFirstname(given_name || "");
        setLastname(family_name || "");
        setEmail(email || "");
        setUserImgURL(picture || "");
      }
    }, [isAuthenticated, user]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }


    const handleFirstNameChange = (e) => {
        setFirstname(e.target.value);
      };
    const handleLastNameChange = (e) => {
        setLastname(e.target.value);
      };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
      };
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
      };
    const handleUserImgURLChange = (e) => {
        setUserImgURL(e.target.value);
      };
    const handleUserBioChange = (e) => {
        setUserBio(e.target.value);
      };
    const handleUserWebsiteChange = (e) => {
        setUserWebsite(e.target.value);
      };

      

      const handleNewUserSubmit = (e) => {
        e.preventDefault();
        setUserType("REVIEWER"); 
        
        const newUser = {
          auth0uniqueID: uuid,
          userType: userType,
          firstname: firstname,
          lastname: lastname,
          email: email,
          display_name: displayName,
          location: location,
          userImgURL: userImgURL,
          userBio: userBio,
          userWebsite: userWebsite,
        };
      
          addUser(newUser)

          setFirstname("");
          setLastname("");
          setEmail("");
          setDisplayName("");
          setLocation("");
          setUserImgURL("");
          setUserBio("");
          setUserWebsite("");

          fetchData(); 
          console.log(newUser)
      };

      

    function clearFormData() {
            setFirstname("");
            setLastname("");
            setEmail("");
            setDisplayName("");
            setLocation("");
            setUserImgURL("");
            setUserBio("");
            setUserWebsite("");
    }

    if (!isAuthenticated || !userData) {
      return <div>Please log in to view this form.</div>;
    }

    return ( 
        <form onSubmit={handleNewUserSubmit}>
            <h2>Enter User Info</h2>
            <p>All fields marked with a * need to be completed.</p>
            <div className="add-user-info-form">
                <div className="user-form-column-1">
                    <div>
                <label htmlFor="first_name">First Name(s)*</label>
                <br/>
                <input
                type="text"
                placeholder="First name(s)..."
                id="user-first-name"
                name="user-first-name"
                size="50"
                required
                value={firstname}
                onChange={handleFirstNameChange}
                
                    />
                    </div>
                    <div>
                <label htmlFor="last_name">Last Name(s)*</label>
                <br/>
                <input
                type="text"
                placeholder="Last name..."
                id="user-last-name"
                name="user-last-name"
                size="50"
                required
                value={lastname}
        
                onChange={handleLastNameChange}
                    />
                    </div>
                    <div>
                <label htmlFor="email">Email*</label>
                <br/>
                <input
                type="email"
                placeholder="Email..."
                id="user-email"
                name="user-email"
                size="50"
                required
                value={email}
                onChange={handleEmailChange}
                    />
                    </div>
                    <div>
                <label htmlFor="display_name">Display Name</label>
                <br/>
                <input
                type="text"
                placeholder="Display Name..."
                id="user-display-name"
                name="user-display-name"
                size="50"
                value={displayName}
                onChange={handleDisplayNameChange}
                    />
                    </div>
                    </div>
                    <div className="user-form-column-2">
                    <div>
                <label htmlFor="location">Location</label>
                <br/>
                <input
                type="text"
                placeholder="Location..."
                id="user-location"
                name="user-location"
                size="50"
                value={location}
                onChange={handleLocationChange}
                    />
                    </div>
                    <div>
                <label htmlFor="user_img_URL">Avatar</label>
                <br/>
                <input
                type="url"
                placeholder="Image URL..."
                id="user-avatar-img-url"
                name="user-avatar-img-url"
                size="50"
                value={userImgURL}
                onChange={handleUserImgURLChange}
                    />
                    </div>
                    <div>
                <label htmlFor="user_bio">Bio (Max. 500 characters)</label>
                <br/>
                <input
                type="text"
                placeholder="Short biography..."
                id="user-bio"
                name="user-bio"
                size="50"
                maxLength="500"
                value={userBio}
                onChange={handleUserBioChange}
                    />
                    </div>
                    <div>
                <label htmlFor="user_website">Website</label>
                <br/>
                <input
                type="url"
                placeholder="https://..."
                id="user-website"
                name="user-website"
                size="50"
                value={userWebsite}
                onChange={handleUserWebsiteChange}
                    />
                    </div>
                </div>
            </div>
                <div className="userform-buttons">
                <div className="add-userform-button">
                    <button type="submit">Update User Profile</button>
                </div>
                <div className="clear-form-data-button">
                    <button type="button" onClick={clearFormData}>Clear Form Data</button>
                </div>
                </div>
        </form>
     );
}
 
export default ProfileForm;