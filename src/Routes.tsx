import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { VanillaPage } from "./pages/vanilla";
import { CoffeePage } from "./pages/coffee";
import { ContactPage } from "./pages/contact";
import { CartPage } from "./pages/cart";
import { ProfilePage } from "./pages/profile";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vanilla" element={<VanillaPage />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
