import { Link } from "react-router-dom";

function Navbar({}) {
  return (
    <header>
      <ul>
        <li><Link to="/blog">Posts</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;