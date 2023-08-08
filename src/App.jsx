import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ErrorPopup } from "./components/ErrorPopup";
import { Loading } from "./components/Loading";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <ErrorPopup/>
      <Loading className="z-1000"/>
    </div>
  )
}

export default App
