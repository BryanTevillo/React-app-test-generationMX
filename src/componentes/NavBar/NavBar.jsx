import "./NavBar.css";
import Button from "../Button/Button";

const NavBar = ({ text, links }) => {
  // const divStyle = {
  //   backgroundColor: "red",
  //   width: "100vh",
  //   height: "100px",
  // };
  return (
    <div className="navBar-container">
      <div className="navBar">
        {links.map((value) => {
          return (
            <Button key={value.id} {...value}>
              {" "}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
