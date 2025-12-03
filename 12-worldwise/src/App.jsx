import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesProvider";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
polyfillCountryFlagEmojis();

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
