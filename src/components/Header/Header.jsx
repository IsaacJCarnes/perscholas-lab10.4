import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <header className="flx fill-x ">
      <ul className="flx-between fill-x list-none">
        <li>
          <Link to="/blog"><button className="custom-button">Posts</button></Link>
        </li>
        <li>
          {isAuthenticated ? (
            <div>              
              <Link to="/admin"><button className="custom-button">Admin</button></Link>
              <button className="custom-button" onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
