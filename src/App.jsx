import "./App.css";
import { Routes, Route } from "react-router-dom";
import Button from "./componentes/Button/Button";
import NavBar from "./componentes/NavBar/NavBar";
//import Atros from "./componentes/Astros/Astros";
import Astros from "./componentes/Astros/Astros";
//import MyButtonUI from "./componentes2/MyButtonUI/LabelBottomNavigation";
import About from "./componentes/About/About/About";

const App = () => {
  const userInfo = {
    names: "Bryan Tevillo Betancourt",
    profile: "Desarrollador Software Java Junior",
    city: "Acapulco",
    state: "Guerrero",
    number: "7444535806",
    email: "bryan_tevillo@hotmail.com",
    info: "🤓Soy un apasionado ingeniero en sistemas computacionales con experiencia en soporte técnico y un fuerte interés en el desarrollo de software. Mi formación incluye una licenciatura en Ingeniería en Sistemas Computacionales y una sólida capacitación en lenguajes de programación como Python y Java, así como en tecnologías web como HTML, JavaScript y PHP. 📖Durante mi trabajo en IBM Servicios Profesionales, he desarrollado habilidades en el seguimiento de tickets de servicio, el mantenimiento preventivo y correctivo de hardware y software, y el soporte a equipos de red. También he adquirido conocimientos en Docker, Kubernetes, Python, Microservicios y Cloud a través de formación adicional. Me destaco por mi atención al detalle, mi capacidad para resolver problemas y mi motivación para aprender y crecer en un entorno tecnológico en constante evolución. ☀️Busco la oportunidad de contribuir al éxito de un equipo de desarrollo como Desarrollador Junior, aplicando mis conocimientos y habilidades para crear soluciones innovadoras y eficaces. ",
  };

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
        <Route path="/about" element={<About info={userInfo} />} />
        <Route path="/astro" element={<Astros />}></Route>
      </Routes>
    </>
  );
};

export default App;
