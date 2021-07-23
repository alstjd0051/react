import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            miiin_sseong
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+82 010 9697 9971</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>wsc03002@naver.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
