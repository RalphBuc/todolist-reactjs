import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">LOGO</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
};

export default Navbar;