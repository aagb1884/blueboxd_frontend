import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./Buttons/login-button";
import { LogoutButton } from "./Buttons/logout-button";
import { SignupButton } from "./Buttons/signup-button";

const Header = () => {

    const { isAuthenticated } = useAuth0();
    
    return ( 
        <div className="nav-bar__buttons">
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
     );
}
 
export default Header;