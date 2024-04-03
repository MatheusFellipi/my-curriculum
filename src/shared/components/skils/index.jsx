import { Section } from "./styles";
import star from "../../../assets/svg/star-svgrepo-com.svg";

export const SkillComponent = () => {
  const skill = [
    {
      name: "github",
      experiencia: 60,
    },
    {
      name: "javascript",
      experiencia: 60,
    },
    {
      name: "react",
      experiencia: 50,
    },
    {
      name: "react native",
      experiencia: 50,
    },
    {
      name: "angular",
      experiencia: 50,
    },
    {
      name: "angular",
      experiencia: 50,
    },
    {
      name: "typescript",
      experiencia: 50,
    },
    {
      name: "Postgres",
      experiencia: 50,
    },
    {
      name: "node",
      experiencia: 50,
    },
    {
      name: "python",
      experiencia: 50,
    },
  ];

  return (
    <Section>
      <img src={star} alt="Skill" />
      <h3>Skill</h3>
      {skill.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
        </div>
      ))}
    </Section>
  );
};
