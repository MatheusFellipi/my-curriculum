import styled from "styled-components";
import { AboutPerfilComponent } from "./perfil";
import { AboutComponent } from "./info";
import { EducationComponent } from "./education";

export const AboutPageComponent = () => (
  <Wrap>
    <AboutPerfilComponent />
    <EducationComponent/>
    <AboutComponent />
  </Wrap>
);

export const Wrap = styled.div`
  display: flex;

  @media only screen and (max-width: 320px) {
    flex-direction: column;
  }
`;
