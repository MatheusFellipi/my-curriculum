import styled from "styled-components";
import { FinishedComponent } from "./finished";
import { ProgressComponent } from "./progress";

export const ProjectPageComponent = () => (
  <Wrap>
    <FinishedComponent />
    <ProgressComponent />
  </Wrap>
);

export const Wrap = styled.div`
  display: flex;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
