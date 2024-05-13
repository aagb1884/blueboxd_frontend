import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./Buttons/login-button";
import { LogoutButton } from "./Buttons/logout-button";
import { SignupButton } from "./Buttons/signup-button";

const Header = () => {

    const { isAuthenticated } = useAuth0();
    
    return ( 
        <header>
          <div className="header-content">
          <img src="./images/bluebox.png" alt="blue box logo" id="blue-box-logo"></img>
          <h1>blueboxd</h1>
              <div className="header-login-buttons">
            {!isAuthenticated && (
              <>
                <SignupButton />
                <LoginButton />
              </>
            )}
            {isAuthenticated && (
              <>
                <LogoutButton />
              </>
            )}
            </div>
        </div>
      </header>
     );
}
 
export default Header;