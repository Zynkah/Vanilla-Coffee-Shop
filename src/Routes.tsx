import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { VanillaPage } from "./pages/vanilla";
import { CoffeePage } from "./pages/coffee";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { CartPage } from "./pages/cart";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vanilla" element={<VanillaPage />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
