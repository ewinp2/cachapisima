import "./App.css";
import { Navbar } from "./componentes/Navbar/Navbar";
import { SectionComponent } from "./componentes/SectionComponent/SectionComponent";
import { SectionComponentTwo } from "./componentes/SectionComponentTwo/SectionComponentTwo";
import { SectionComponentThree } from "./componentes/SectionComponentThree/SectionComponentThree";
import { SectionComponentFour } from "./componentes/SectionComponentFour/SectionComponentFour";
function App() {
  return (
    <>
      <Navbar />
      <SectionComponent />
      <SectionComponentTwo />
      <SectionComponentThree />
      <SectionComponentFour />
    </>
  );
}

export default App;
