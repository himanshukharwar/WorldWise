import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo"

function PageNav() {
  return (
    <nav className={styles.nav}>
      {/* <Logo /> */}
      {/* Added link to logo direct to homepage */}
      <NavLink to="/Homepage"><Logo /></NavLink>  
      <ul>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul> 
    </nav>
  );
}

export default PageNav;
