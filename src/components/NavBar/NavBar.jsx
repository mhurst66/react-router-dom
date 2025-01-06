import { Link } from "react-router";

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Pokemon</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  