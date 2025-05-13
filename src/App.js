import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready()
  });

  return (
    <div className="App">
      <Button onClick={onToggleButton}>Toggle</Button>
      <Header />
      <h3 className="App-title">Welcome to My React App</h3>
      <div className="App-logo-wrap">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Routes>
        <Route path={"webapp"} element={<ProductList />}/>
        <Route path={"form"} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
