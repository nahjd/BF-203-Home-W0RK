import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/home"
import Basket from "./pages/basket";
import Favorites from "./pages/favorites";


function App() {
  const [favorites, setFavorites] = useState([]);
  const [basket, setBasket] = useState([]);
  const [basketFav, setBasketFav] = useState({
    basket: [],
    favorites: []
  });


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/"
              element={<Home basketFavv={basketFav} setBasketFav={setBasketFav} />} />
            <Route path="basket" element={<Basket basketFav={basketFav} setBasketFav={setBasketFav} />} />
            <Route path="favorites" element={<Favorites basketFav={basketFav} setBasketFav={setBasketFav} />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
