import "./App.css";
import UsingFetch from "./components/UsingFetch";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AsyncAwait from "./components/AsyncAwait ";
import ButtonClick from "./components/ButtonClick";

function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/fetch" element={<UsingFetch/>}/>
  <Route path="/asyn" element={<AsyncAwait/>}/>
  <Route path="/btn" element={<ButtonClick/>}/>


</Routes>
    </>


   
  );
}

export default App;
