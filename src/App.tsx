import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ConsultoriaPage from "./components/ConsultoriaPage";
import Formacion from "./components/Formacion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoría" element={<ConsultoriaPage />} />
          <Route path="/formación" element={<Formacion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
