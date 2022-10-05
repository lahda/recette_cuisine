import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Categories from "./components/Categories";
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence/>
        <Search/>
        <Categories/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="cuisine/:type" element={<Cuisine/>}/>
          <Route path="Search" element={<Search/>}/>
          <Route path="Searched" element={<Searched/>}/>
          <Route path="Recipe/:name" element = {<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
