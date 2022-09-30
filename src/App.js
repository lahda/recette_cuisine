import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Categories from "./components/Categories";
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import Searched from "./pages/Searched";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="cuisine/:type" element={<Cuisine/>}/>
          <Route path="Search" element={<Search/>}/>
          <Route path="Searched" element={<Searched/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
