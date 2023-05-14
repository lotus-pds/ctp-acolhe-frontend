import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ErrorPopup } from "./components/ErrorPopup";
import { useState, useEffect } from 'react';
import { Loading } from "./components/Loading";

let countLoading = 0;

export const addCountLoading = () => {
  countLoading = countLoading + 1;
  console.log(countLoading);
};

export const removeCountLoading = () => {
  countLoading = countLoading - 1;
  console.log(countLoading);
}

function App() {
  const [error, setError] = useState({
    visible: false,
    message: ''
  });

  useEffect(() => {
    if (countLoading == 0 || countLoading == 1) {
      if (countLoading == 0) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    } 
    console.log('kkkkkkk');
  }, [countLoading]);

  return (
    <div>
      <ErrorPopup error={error} setError={setError} />
      <Loading open={loading} />
      <BrowserRouter>
        <Router setError={setError} />
      </BrowserRouter>
    </div>
  )
}

export default App
