import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import headerimg from "./Assets/Images/hero-824e4df4.webp";
import FormList from "./Components/Bus/FormList";
import Index from "./Pages/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <img src={headerimg} className="h-[250px] w-[100%]" />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Bus" element={<FormList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
