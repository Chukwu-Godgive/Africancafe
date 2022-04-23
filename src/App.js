import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Home from './pages/Home/Home';
import HeaderSect from './pages/Home/HeaderSect';

function App() {
  return (
    <div>
        <Home />
        <HeaderSect />
    </div>
  );
}

export default App;
