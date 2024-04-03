import { REDESOCIAL } from "./const";
import { Section, Ul } from "./styles";
import print from "@/assets/svg/print-svgrepo-com.svg";

export const AboutComponent = () => {
  return (
    <Section>
      <h3>Sobre mim</h3>
      <p className="description">
        Desenvolvedor front end com mais de três anos de experiência na criação
        de interfaces visuais usando tecnologias React.js/React Native.
        Comprometido em fornecer código de alta qualidade usando soluções de
        Design System, typescript, IHC(Interação Humano-Computador) com foco em
        Experiência do Usuário (UX). Hábil na resolução de problemas. Busco
        melhorar continuamente meu conhecimento técnico para permanecer na
        vanguarda das tendências do setor. Na posição de desenvolvedor front-end
        busco utilizar minha experiência para a criação de sites visualmente
        atraentes e funcionais
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
        <li onClick={() => window.print()}>
          <img src={print} alt="Tirar um print do currículo" />
        </li>
      </Ul>
    </Section>
  );
};
