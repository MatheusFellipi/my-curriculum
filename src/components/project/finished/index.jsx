import { useState } from "react";
import { Section } from "./styles";
import { CardListComponent } from "../comum/card";
import { getDataProject } from "../const";

export const FinishedComponent = () => {
  const [data] = useState(getDataProject());
  return (
    <Section>
      <h3>Projetos</h3>
      <CardListComponent data={data} />
    </Section>
  );
};
