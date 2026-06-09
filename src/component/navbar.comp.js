
import '../styles.css';

import { Link } from 'react-router-dom';

const NavBarComp = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/color">Color</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </nav>
  );
} 

export default NavBarComp;
