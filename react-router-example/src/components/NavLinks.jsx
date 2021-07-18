import { NavLink } from "react-router-dom";

const activeStyle = { color: "skyblue" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink to="/Login" activeStyle={activeStyle}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(match, location);
            return match !== null && location.search === "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=miiin_sseong"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return match !== null && location.search === "?name=tyler";
          }}
        >
          About?name=miiin_sseong
        </NavLink>
      </li>
    </ul>
  );
}
