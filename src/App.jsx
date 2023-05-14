import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ErrorPopup } from "./components/ErrorPopup";
import { useState, useEffect } from 'react';
import { Loading } from "./components/Loading";

function App() {

  return (
    <div>
      <ErrorPopup/>
      <Loading/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App
