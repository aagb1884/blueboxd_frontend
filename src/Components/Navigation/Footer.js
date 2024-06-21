import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = ({loggedInUser}) => {

    const { isAuthenticated } = useAuth0();

    return ( 
        <footer>
            <div className="footer-links">
            {!isAuthenticated && (
                <>
                <NavLink to="/">Home</NavLink>
            <br />
                <NavLink to="/about">Read Me</NavLink> 
            <br />
                <NavLink to="/stories">Stories</NavLink>
            <br />
                <NavLink to="/credits">Credits</NavLink>  
        
                </>
            )}
            
                {isAuthenticated && (
                    <>
                    <NavLink to="/">Home</NavLink>
                    <br />
                    <NavLink to="/about">Read Me</NavLink> 
                    <br />
                    <NavLink to="/stories">Stories</NavLink>
                    <br />
                    <NavLink to="/credits">Credits</NavLink>
                    <br />
                    <NavLink to={`/profile/${loggedInUser?.id}`}>Profile</NavLink>
                    
                    </>
                )}
                </div>
            
        </footer>
     );
}
 
export default Footer;