import "./styles/app.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Home from "./componenets/Home";
import ViewportWarning from "./componenets/ViewportWarning";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        <ViewportWarning />
      </Router>
    </div>
  );
}

export default App;
