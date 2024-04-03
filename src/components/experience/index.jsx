import styled from "styled-components";
import { WorksComponent } from "./work";
import { SkillComponent } from "./skils";

export const ExperiencePageComponent = () => {
  return (
    <Wrap>
      <WorksComponent />
      <SkillComponent />
    </Wrap>
  );
};
export const Wrap = styled.div`
  display: flex;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
