import { AboutPageComponent } from "@/components/about";
import { ProjectPageComponent } from "@/components/project";
import { ExperiencePageComponent } from "@/components/experience";

function App() {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <AboutPageComponent />
      <ExperiencePageComponent/>
      <ProjectPageComponent />
    </div>
  );
}

export default App;
