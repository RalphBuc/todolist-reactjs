import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="todolist-reactjs/">LOGO</Link>
            </li>
            <li>
                <Link to="todolist-reactjs/about">About</Link>
            </li>
        </ul>
    );
};

export default Navbar;
