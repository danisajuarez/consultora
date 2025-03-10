import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ConsultoriaPage from "./components/ConsultoriaPage";
import Formacion from "./components/Formacion";
import Lean360 from "./components/Lean360";
import Diagnostico360 from "./components/Diagnostico360";
import CasoDeExito from "./components/CasoDeExito";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoría" element={<ConsultoriaPage />} />
          <Route path="/formación" element={<Formacion />} />
          <Route path="/lean360°" element={<Lean360 />} />
          <Route path="/diagnóstico360°" element={<Diagnostico360 />} />
          <Route path="/casos-de-éxito" element={<CasoDeExito />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
