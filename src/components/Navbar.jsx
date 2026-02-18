import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🕌 Ramadan Guide
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/prayer-times">Prayer Times</Link></li>
          <li><Link to="/duas">Duas</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
