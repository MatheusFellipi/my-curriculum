import { Section, Ul } from "./styles";
import lamp4 from "@/assets/svg/lamp4-svgrepo-com.svg";

export const EducationComponent = () => {
  return (
    <Section>
      <img src={lamp4} alt="Educação e certificação" />
      <h3>Educação e certificação</h3>

      <Ul>
        <li>
          <div></div>
          <p>Instituto Federal Goiano - Campus Morrinhos</p>
          <span>Bacharelado, Ciências da computação</span>
          <p>jan de 2018 - dez de 2024</p>
        </li>
      </Ul>
    </Section>
  );
};
