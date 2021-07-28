import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'skyblue' };

export default function NavLinks() {
    return (
        <ul>
            <li>
                <NavLink to="/login" exact activeStyle={activeStyle}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/" exact activeStyle={activeStyle}>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" exact activeStyle={activeStyle}>
                    PROFILE
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile/15" activeStyle={activeStyle}>
                    Profile/15
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    activeStyle={activeStyle}
                    isActive={(match, location) => {
                        console.log(match, location);
                        return match !== null && location.search === '';
                    }}
                >
                    ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about?name=miiin_sseong"
                    activeStyle={activeStyle}
                    isActive={(match, location) => {
                        return match !== null && location.search === '?name=miiin_sseong';
                    }}
                >
                    ABOUT?name=miiin_sseong
                </NavLink>
            </li>
        </ul>
    );
}
