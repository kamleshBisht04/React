import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
