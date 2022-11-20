import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, DetailProduct, Invoice } from "@pages";
import { History } from "./components";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail-product/:id" element={<DetailProduct/>} />
        <Route path="/inv" element={<Invoice/>} />
        <Route path="/data" element={<History/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
