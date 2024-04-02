import { Section, Ul } from "./styles";
import suitcase from "../../../assets/svg/suitcase-svgrepo-com.svg";
import { getData } from "../../../services/api/workExperience/mock";
import { useState } from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const WorkExperienceComponent = () => {
  const [data] = useState(getData());

  return (
    <Section>
      <img src={suitcase} alt="Experiencia profissional" />
      <h3>Experiencia profissional</h3>
      <Ul>
        {data.map((item) => (
          <li key={item.company}>
            <div></div>
            <p>{item.company}</p>
            <p>{item.cargo}</p>
            <p>{format(item.initial, "MMM yyyy", { locale: ptBR })} - {format(item.final, "MMM  yyyy", { locale: ptBR })}</p>
            <p className="description">{item.description}</p>
          </li>
        ))}
      </Ul>
    </Section>
  );
};
