import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import cardImage from "../../../assets/bryan.jpg";

export default function MyCard() {
  const { names, profile, city, state, number, email, info } = {
    names: "Bryan Tevillo Betancourt",
    profile: "Desarrollador Software Java Junior",
    city: "Acapulco",
    state: "Guerrero",
    number: "7444535806",
    email: "bryan_tevillo@hotmail.com",
    info: "Soy un apasionado ingeniero en sistemas computacionales con experiencia en soporte técnico y un fuerte interés en el desarrollo de software. Mi formación incluye una licenciatura en Ingeniería en Sistemas Computacionales y una sólida capacitación en lenguajes de programación como Python y Java, así como en tecnologías web como HTML, JavaScript y PHP. 🤓 Durante mi trabajo en IBM Servicios Profesionales, he desarrollado habilidades en el seguimiento de tickets de servicio, el mantenimiento preventivo y correctivo de hardware y software, y el soporte a equipos de red. También he adquirido conocimientos en Docker, Kubernetes, Python, Microservicios y Cloud a través de formación adicional.📖Me destaco por mi atención al detalle, mi capacidad para resolver problemas y mi motivación para aprender y crecer en un entorno tecnológico en constante evolución. Busco la oportunidad de contribuir al éxito de un equipo de desarrollo como Desarrollador Junior, aplicando mis conocimientos y habilidades para crear soluciones innovadoras y eficaces.☀️",
  };

  return (
    <Card sx={{ maxWidth: 430 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={cardImage}
          alt="Usuario Bryan Tevillo"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {names}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {profile}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            <p>Ciudad: {city}</p>
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            <p>Estado: {state}</p>
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            <p>Telefono: {number}</p>
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            <p>Correo: {email}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
