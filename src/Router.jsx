import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Successful } from "./pages/Successful";
import { Emotions } from "./pages/Emotions";
import { PrivateRoute } from "./pages/PrivateRoute";
import { RememberPassword } from "./pages/RememberPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { ResetSuccessfull } from "./pages/ResetSuccessfull";
import { AccessConfirmation } from "./pages/AccessConfirmation";
import { EmailConfirmation } from "./pages/EmailConfirmation";


export function Router(props){
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/emotions" element={<PrivateRoute user={['Aluno']} alternative='/successful'><Emotions/></PrivateRoute>}/>
            <Route path="/remember-password" element={<RememberPassword/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/reset-successfull" element={<ResetSuccessfull/>}/>
            <Route path="/access-confirmation" element={<AccessConfirmation/>}/>
            <Route path="/successful" element={<PrivateRoute user={['Aluno', 'Admin']}><Successful/></PrivateRoute>}/>
            <Route path="/subscribe/verification/:token" element={<EmailConfirmation/>}/>
        </Routes>
    );
}
