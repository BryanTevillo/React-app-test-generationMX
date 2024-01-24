import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ name, href }) => {
  console.log(name);
  return (
    <Link to={href}>
      <button className="Button-com">{name}</button>
    </Link>
  );
};

export default Button;
