import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Successful } from "./pages/Successful";
import { Emotions } from "./pages/Emotions";


export function Router(props){
    const {setError, setConfig, config} = props;
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin setError={setError} setConfig={setConfig}/>}/>
            <Route path="/subscribe" element={<Subscribe setError={setError}/>}/>
            <Route path="/emotions" element={<Emotions config={config} setError={setError}/>}/>
            <Route path="/successful" element={<Successful/>}/>
        </Routes>
    );
}
