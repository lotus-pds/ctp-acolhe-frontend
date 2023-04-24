import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Sucessfull } from "./pages/Sucessfull";
import { Emotions } from "./pages/Emotions";


export function Router(props){
    const {setState} = props;
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin setState={setState}/>}/>
            <Route path="/subscribe" element={<Subscribe setState={setState}/>}/>
            <Route path="/emotions" element={<Emotions/>}/>
            <Route path="/sucessfull" element={<Sucessfull/>}/>
        </Routes>
    );
}