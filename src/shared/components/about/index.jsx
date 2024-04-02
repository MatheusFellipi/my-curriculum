import { Img, Section, Ul } from "./styles";
import photo from "../../../assets/img/foto.jpeg";
import linkdin from "../../../assets/svg/linkedin-svgrepo-com.svg";
import github from "../../../assets/svg/github-svgrepo-com.svg";

export const AboutComponent = () => {
  const REDESOCIAL = [
    {
      url: "https://www.linkedin.com/in/matheusfellipiribeiro/",
      icon: linkdin,
    },
    {
      url: "https://github.com/MatheusFellipi",
      icon: github,
    },
  ];

  return (
    <>
      <Section>
        <div>
          <Img src={photo} alt="Matheus Fellipi Ribeiro de Oliveira" />
        </div>
        <p>Matheus Fellipi Ribeiro de Oliveira</p>
        <p>Brasileiro</p>
        <Ul>
          {REDESOCIAL.map((item) => (
             <li key={item.url}>
             <a href={item.url}>
               <img src={item.icon} alt="" />
             </a>
           </li>
          ))}
        </Ul>
      </Section>
      <Section>
        <h4>Sobre mim</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          autem eveniet, nemo provident repellat illum ratione cumque
          voluptatibus sequi ad culpa aut. Quidem, possimus incidunt rerum
          corrupti dolorum quam iure!
        </p>

        <h6>Hobies</h6>
        <ul>
          <li></li>
        </ul>
      </Section>
    </>
  );
};
