import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
