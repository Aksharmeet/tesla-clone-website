import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header  from './components/header';
import Home from "./components/home"
import ModelS from "./components/pages/model-s";
import Model3 from "./components/pages/model-3";
import ModelX from "./components/pages/model-x";
import ModelY from "./components/pages/model-y";
import Shop from "./components/pages/shop";
import TeslaAccount from "./components/pages/tesla-account";

function App() {
  return (
    <div className="App">
   
    <Router>
    <Header/>
     <Routes>
       <Route exact path="/" element={<Home/>}></Route>
       <Route exact path="/Model%20S" element={<ModelS/>}></Route>
       <Route exact path="/Model%203" element={<Model3/>}></Route>
       <Route exact path="/Model%20X" element={<ModelX/>}></Route>
       <Route exact path="/Model%20Y" element={<ModelY/>}></Route>
       <Route exact path="/shop" element={<Shop/>}></Route>
       <Route exact path="/tesla-account" element={<TeslaAccount/>}></Route>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
