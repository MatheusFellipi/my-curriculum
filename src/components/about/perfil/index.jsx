import { Img, Section } from "./styles";

import photo from "@/assets/img/mt-photo.jpeg";


export const AboutPerfilComponent = () => (
  <Section>
    <div>
      <Img src={photo} alt="Matheus Fellipi Ribeiro de Oliveira" />
    </div>

    <p>Matheus Fellipi Ribeiro de Oliveira</p>

    <h6>Contados</h6>
    <p>64 992576711</p>
    <a href="mailto:matheus.fellipi@outlook.com">matheus.fellipi@outlook.com</a>
  </Section>
);
