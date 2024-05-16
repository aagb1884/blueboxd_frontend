import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {

    const { isAuthenticated } = useAuth0();

    return ( 
        <footer>
            <ul className="footer-links">
            {!isAuthenticated && (
                <>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                
                <li>
                <NavLink to="/stories">Stories</NavLink>
                </li>
                
                <li>
                <NavLink to="/credits">Credits</NavLink>
                </li>
                </>
            )}
            
                {isAuthenticated && (
                    <>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to="/stories">Stories</NavLink>
                    </li>
                
                    <li>
                    <NavLink to="/credits">Credits</NavLink>
                    </li>

                    <li>
                    <NavLink to="/profile">Profile</NavLink>
                    </li>
                    </>
                )}
                </ul>
            
        </footer>
     );
}
 
export default Footer;