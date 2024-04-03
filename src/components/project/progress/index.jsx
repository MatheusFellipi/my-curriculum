import { useState } from "react";
import { Section } from "./styles";
import { CardListComponent } from "../comum/card";
import { getDataInProcess } from "../const";
import projecticon from "@/assets/svg/project-new-svgrepo-com.svg"

export const ProgressComponent = () => {
  const [data] = useState(getDataInProcess());
  return (
    <Section>
      <img src={projecticon} alt="EM PROGRESSO" />
      <h3>Em progresso</h3>
      <CardListComponent data={data} />
    </Section>
  );
};
