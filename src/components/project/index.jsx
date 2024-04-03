import { FinishedComponent } from "./finished";
import { ProgressComponent } from "./progress";
import { Wrap } from "@/shared/styles/containers";

export const ProjectPageComponent = () => (
  <Wrap>
    <FinishedComponent />
    <ProgressComponent />
  </Wrap>
);

