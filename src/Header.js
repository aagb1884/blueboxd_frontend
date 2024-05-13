import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./Components/Buttons/login-button";
import { LogoutButton } from "./Components/Buttons/logout-button";
import { SignupButton } from "./Components/Buttons/signup-button";

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