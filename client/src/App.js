import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage/AuthPage";
import ShopPage from "./ShopPage/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AuthPage />} />
        <Route path={"/shop"} element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
