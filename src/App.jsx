import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@components/header/Header";
import headerimg from "./assets/images/hero.webp";
import FormList from "@pages/FormList";
import TicketItem from "@pages/TicketItem";
import Index from "@pages/Index";
import Payment from "@pages/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <img src={headerimg} className="h-[250px] w-[100%]" />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tickets" element={<FormList />} />
          <Route path="/tickets/:id" element={<TicketItem />} />
          <Route path="/tickets/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
