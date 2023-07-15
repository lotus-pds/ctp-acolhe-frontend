import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
import { Successful } from "./pages/Successful";
import { Emotions } from "./pages/Emotions";
import { PrivateRoute } from "./pages/PrivateRoute";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { ResetSuccessfull } from "./pages/ResetSuccessfull";
import { AccessConfirmation } from "./pages/AccessConfirmation";
import { EmailConfirmation } from "./pages/EmailConfirmation";
import { Posts } from "./pages/Posts";
import { MyCalendar } from "./pages/MyCalendar";
import { CreateIncident } from "./pages/CreateIncident";
import { MyIncident } from "./pages/MyIncident";
import { Profile } from "./pages/Profile";
import { Terms } from "./pages/Terms";


export function Router(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/emotions" element={<PrivateRoute user={['Aluno']} alternative='/successful'><Emotions /></PrivateRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/reset-my-password/:token" element={<ResetPassword />} />
            <Route path="/reset-successfull" element={<ResetSuccessfull />} />
            <Route path="/access-confirmation" element={<AccessConfirmation />} />
            <Route path="/successful" element={<PrivateRoute user={['Aluno', 'Admin']}><Successful /></PrivateRoute>} />   
            <Route path="/posts" element={<PrivateRoute user={['Aluno', 'Admin']}><Posts /></PrivateRoute>} />
            <Route path="/my-calendar" element={<PrivateRoute user={['Aluno', 'Admin']}><MyCalendar /></PrivateRoute>} />
            <Route path="/create-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><CreateIncident /></PrivateRoute>} />
            <Route path="/my-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><MyIncident /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute user={['Aluno', 'Admin']}><Profile /></PrivateRoute>} />
            <Route path="/subscribe/verification/:token" element={<EmailConfirmation />} />
        </Routes>
    );
}
