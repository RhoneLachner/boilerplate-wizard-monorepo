import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => `nav-link ${isActive(path) ? 'text-white' : ''}`;

  return (
    <nav className="navigation">
      <div className="container nav-container">
        <span className="nav-brand">BP_WIZARD</span>
        <div className="nav-links">
          <Link to="/" className={linkClass('/')}>
            HOME
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
