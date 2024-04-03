import { Img, Section } from "./styles";
import photo from "@/assets/img/mt-photo.jpeg";

export const AboutPerfilComponent = () => (
  <Section>
    <div>
      <Img src={photo} alt="Matheus Fellipi Ribeiro de Oliveira" />
    </div>
    <p>Matheus Fellipi Ribeiro de Oliveira</p>
  </Section>
);
