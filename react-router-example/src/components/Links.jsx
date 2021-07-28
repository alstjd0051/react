import { Link } from 'react-router-dom';

export default function Links() {
    return (
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/profile">PROFILE</Link>
            </li>
            <li>
                <Link to="/profile/15">Profile/15</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/about?name=miiin_sseong">ABOUT?name=miiin_sseong</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
        </ul>
    );
}
