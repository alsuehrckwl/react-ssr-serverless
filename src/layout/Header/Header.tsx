import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <h1>header</h1>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/sub">sub</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
