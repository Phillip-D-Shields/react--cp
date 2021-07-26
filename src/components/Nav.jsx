import { Link } from "react-router-dom";

import pengiAvatar from "../img/penguin.png";

const Nav = (props) => {
  // const [darkMode, toggleDarkMode] = useState(true);

  // const handleClick = () => {
  //   toggleDarkMode(!darkMode);
  // };

  return (
    <>
      {/* router demo template */}

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav> */}

      {/* nav */}
      <nav
        className="pa3 pa4-ns"
        style={props.navStyles}
      >
        <Link
          className="link dim f5 f4-ns dib ml3"
          style={props.homeLinkStyles}
          to="/"
          title="Home"
        >
          <img className="w3 mr3" src={pengiAvatar} alt="pengi avatar" />
          crypto<span class="b">Pengi</span>
        </Link>

        {/* <div
          className="br-100 h3 w3 dib fr flex justify-around items-center link dim"
          style={props.titleStyles}
        >
          {darkMode ? (
            <i class="fas fa-moon fa-3x"></i>
          ) : (
            <i class="fas fa-sun fa-3x"></i>
          )}
        </div> */}

        <Link
          className="link dim f5 f4-ns dib mr3 fr"
          style={props.abootLinkStyles}
          to="/about"
          title="aboot"
        >
          aboot
        </Link>

        <Link
          className="link dim f5 f4-ns dib mr3 fr"
          style={props.colonyLinkStyles}
          to="/colony"
          title="colony"
        >
          colony
        </Link>
      </nav>
    </>
  );
};

export default Nav;
