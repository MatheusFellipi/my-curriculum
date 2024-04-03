import { Wrap } from "@/shared/styles/containers";
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
