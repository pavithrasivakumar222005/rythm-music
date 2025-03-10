import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaHome, FaHeart, FaSearch, FaMusic, FaLine, FaPlayCircle, FaList, FaSignOutAlt, FaSignInAlt, FaSign } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="list-unstyled">
        {/* Sidebar Header */}
        <strong className="sidebar-header">PVMJ Music-Player</strong>

        <div className="library-section">
          {/* Navigation Links */}
          <li>
            <Link to="/songs" className="sidebar-link">
              <p className="sidebar-icon"><FaHome /></p>
              <p className="sidebar-text">Home</p>
            </Link>
          </li>

          <hr />

          {/* Your Library Section */}
          <p className="library-title">Your Library</p>

          <li>
            <Link to="/favorities" className="sidebar-link">
              <p className="sidebar-icon"><FaHeart /></p>
              <p className="sidebar-text">Favorites</p>
            </Link>
          </li>

          <li>
            <Link to="/playlist" className="sidebar-link">
              <p className="sidebar-icon"><FaList /></p>
              <p className="sidebar-text">PlayList</p>
            </Link>
          </li>

          <div className="vl"></div>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
