import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import { LoginButton } from "./Buttons/login-button";
import { LogoutButton } from "./Buttons/logout-button";
import { SignupButton } from "./Buttons/signup-button";

const Header = () => {

    const { isAuthenticated } = useAuth0();
    
    return ( 
        <header>
          <div className="header-content">
          <NavLink to="/"><img src="./images/bluebox.png" alt="blue box logo" id="blue-box-logo"></img></NavLink>
          <h1>blueboxd</h1>
              <div className="header-login-buttons">
            {!isAuthenticated && (
              <>
                <SignupButton />
                <br />
                <LoginButton />
                <Footer />
              </>
            )}
            {isAuthenticated && (
              <>
                <LogoutButton />
                <Footer />
              </>
              
            )}
            </div>
        </div>
      </header>
     );
}
 
export default Header;