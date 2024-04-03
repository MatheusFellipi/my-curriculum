import { Img, Section, Ul, Wrap } from "./styles";
import photo from "../../../assets/img/mt-photo.jpeg";
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
    <Wrap>
      <Section>
        <div>
          <Img src={photo} alt="Matheus Fellipi Ribeiro de Oliveira" />
        </div>
        <p>Matheus Fellipi Ribeiro de Oliveira</p>
      </Section>
      <Section>
        <h3>Sobre mim</h3>
        <p className="description">
          Desenvolvedor front end com mais de três anos de experiência na
          criação de interfaces visuais usando tecnologias React.js/React
          Native. Comprometido em fornecer código de alta qualidade usando
          soluções de Design System, typescript, IHC(Interação
          Humano-Computador) com foco em Experiência do Usuário (UX). Hábil na
          resolução de problemas. Busco melhorar continuamente meu conhecimento
          técnico para permanecer na vanguarda das tendências do setor. Na
          posição de desenvolvedor front-end busco utilizar minha experiência
          para a criação de sites visualmente atraentes e funcionais
        </p>

        <h4>Hobies</h4>
        <p>Desenhar | ler | assistir | jogar | rpg de mesa </p>

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
    </Wrap>
  );
};
