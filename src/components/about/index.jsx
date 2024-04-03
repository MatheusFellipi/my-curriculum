import { AboutPerfilComponent } from "./perfil";
import { AboutComponent } from "./info";
import { EducationComponent } from "./education";
import { Wrap } from "@/shared/styles/containers";

export const AboutPageComponent = () => (
  <Wrap>
    <AboutPerfilComponent />
    <EducationComponent/>
    <AboutComponent />
  </Wrap>
);

