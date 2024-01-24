import "./App.css";
import { Routes, Route } from "react-router-dom";
import Button from "./componentes/Button/Button";
import NavBar from "./componentes/NavBar/NavBar";
import Atros from "./componentes/Astros/Astros";
import Astros from "./componentes/Astros/Astros";
import MyButtonUI from "./componentes2/MyButtonUI/LabelBottomNavigation";
const App = () => {
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Atros", href: "/astro" },
  ];
  const tesxtBtn = "Login";
  return (
    <>
      <NavBar links={links} text="hello" />
      <Routes>
        <Route path="/" element={<Button name={tesxtBtn} />} />
        <Route path="/about" element={<MyButtonUI />} />
        <Route path="/astro" element={<Astros />}></Route>
      </Routes>
    </>
  );
};

export default App;
