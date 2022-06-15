import React, { useState } from "react";
import AmountExchange from "./components/AmountExchange";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AmountExchange />
    </div>
  );
};

export default App;
