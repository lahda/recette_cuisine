import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import Template from "./components/Template";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home/>}/>
            {/* <Route path="cuisine/:type" element={<Cuisine/>}/> */}
            <Route path="Searched" element={<Searched/>}/>
            {/* <Route path="Recipe/:name" element = {<Recipe/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
