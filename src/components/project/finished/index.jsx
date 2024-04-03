import { useState } from "react";
import { Section } from "./styles";
import { CardListComponent } from "../comum/card";
import { getDataProject } from "../const";
import projecticon from "@/assets/svg/project-svgrepo-com.svg"

export const FinishedComponent = () => {
  const [data] = useState(getDataProject());
  return (
    <Section>
      <img src={projecticon} alt="EM PROGRESSO" />
      <h3>Projetos</h3>
      <CardListComponent data={data} />
    </Section>
  );
};
