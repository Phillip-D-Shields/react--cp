
import Button from "./Button";

import narAvatar from "../img/narwhal.png";


const Hero = (props) => {
  // const [darkMode, toggleDarkMode] = useState(true);

  // const handleClick = () => {
  //   toggleDarkMode(!darkMode);
  // };

  return (
    <header className="pv5 flex justify-around cover bg-left bg-center-l" style={props.styles}>
      {/* <div
          className="br-100 h3 w3 dib fr flex justify-around items-center link dim"
          style={{
            color: darkMode
              ? css.dark.fgSecondaryAlt
              : css.light.fgSecondaryAlt,
          }}
          onClick={handleClick}
        >
          {darkMode ? (
            <i class="fas fa-moon fa-3x"></i>
          ) : (
            <i class="fas fa-sun fa-3x"></i>
          )}
        </div> */}
      <div className="flex justify-around items-center w-100 w-75-ns w-50-l">
        
        <div className="tc w-50">
          <h1 className="f2">{props.title}</h1>
          <span className="dib mb4">{props.text}</span>
          <Button
            styles="ph3 pv2 bg-blue washed-red"
            toWhere="/aboot"
            displayText="start here"
          />
        </div>
        <div>
        <img className="w5 dib pa3" src={narAvatar} alt="pengi avatar" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
