import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Categories from "./components/Categories";
import Cuisine from "./pages/Cuisine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="cuisine" element={<Cuisine/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
