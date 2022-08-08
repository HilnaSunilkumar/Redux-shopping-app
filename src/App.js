import { Header } from "containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { ProductList } from "containers/ProductList";
import { ProductDetail } from "containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
