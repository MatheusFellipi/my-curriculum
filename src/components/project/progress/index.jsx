import { useState } from "react";
import { Section } from "./styles";
import { CardListComponent } from "../comum/card";
import { getDataInProcess } from "../const";

export const ProgressComponent = () => {
  const [data] = useState(getDataInProcess());
  return (
    <Section>
      <h3>Em progresso</h3>
      <CardListComponent data={data} />
    </Section>
  );
};
