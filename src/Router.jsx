import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Successful } from "./pages/Successful";
import { Emotions } from "./pages/Emotions";


export function Router(props){
    const {setError} = props;
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin setError={setError}/>}/>
            <Route path="/subscribe" element={<Subscribe setError={setError}/>}/>
            <Route path="/emotions" element={<Emotions setError={setError}/>}/>
            <Route path="/successful" element={<Successful/>}/>
        </Routes>
    );
}
