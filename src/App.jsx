import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ErrorPopup } from "./components/ErrorPopup";
import { useState } from 'react';

function App() {
  const [error, setError] = useState({
    visible: false,
    message: ''
  });

  return (
    <div>
      <ErrorPopup state={error} setState={setError}/>
      <BrowserRouter>
        <Router setState={setError}/>
      </BrowserRouter>
    </div>
  )
}

export default App
