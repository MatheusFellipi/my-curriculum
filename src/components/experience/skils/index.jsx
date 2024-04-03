import { Section } from "./styles";
import star from "../../../assets/svg/star-svgrepo-com.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { getDataSkill } from "../const";

export const SkillComponent = () => {
  const [data] = useState(getDataSkill())
  return (
    <Section>
      <img src={star} alt="Skill" />
      <h3>Skill</h3>
      {data.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <ProgressBar
            bgColor="#f5f5f5"
            labelColor="#000"
            baseBgColor="#585858"
            completed={item.experiencia}
          />
        </div>
      ))}
    </Section>
  );
};
