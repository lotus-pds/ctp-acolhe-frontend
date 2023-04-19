import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Sucessfull } from "./pages/Successful";


export function Router(){
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/successful" element={<Sucessfull/>}/>
        </Routes>
    );
}