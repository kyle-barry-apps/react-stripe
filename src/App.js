import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Store from "./pages/Store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
