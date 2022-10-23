import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import ListProducts from "./components/ListProducts";
import Product from "./components/Product";
import { IProduct } from "./models";
import { dispatch } from "./store/store";
import { requestGetList } from "./utils/scripts";


function App() {
  useEffect(() => {
    requestGetList({callBack: (list: IProduct[]) => dispatch({type: 'getProducts', list})})
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Favorites />
				<Routes>
					<Route path="/" element={<ListProducts />} />
					<Route path="/product/:id" element={<Product />} />
				</Routes>
      </main>
    </div>
  );
}

export default App;
