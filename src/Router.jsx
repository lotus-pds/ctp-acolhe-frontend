import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Successful } from "./pages/Successful";
import { Emotions } from "./pages/Emotions";
import { PrivateRoute } from "./pages/PrivateRoute";


export function Router(props){
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/emotions" element={<PrivateRoute><Emotions/></PrivateRoute>}/>
            <Route path="/successful" element={<PrivateRoute><Successful/></PrivateRoute>}/>
        </Routes>
    );
}
