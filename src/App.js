import "./App.css";
import { Navbar } from "./componentes/Navbar/Navbar";
import { SectionComponent } from "./componentes/SectionComponent/SectionComponent";
import { SectionComponentTwo } from "./componentes/SectionComponentTwo/SectionComponentTwo";

function App() {
  return (
    <>
      <Navbar />
      <SectionComponent />
      <SectionComponentTwo />
    </>
  );
}

export default App;
