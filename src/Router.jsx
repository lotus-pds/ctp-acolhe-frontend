import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Subscribe } from "./pages/Subscribe";
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
import { OpenRoute } from "./pages/OpenRoutes";
import { useState, useEffect } from "react";
import { getCourses } from "./services/course";
import { Incidents } from "./pages/Incidents";
import { AdmIncidentDetails } from "./pages/AdmIncidentDetails";
import { CreatePosts } from "./pages/CreatePosts";
import { ScheduleRoom } from "./pages/ScheduleRoom";
import { ListIncident } from "./pages/ListIncident";
import { ManageStudents } from "./pages/ManageStudents";
import { PostTae } from "./pages/PostTae";
import { ProfileTae } from "./pages/ProfileTae";
import { NotFound } from "./pages/NotFound";

export function Router(props) {
    const[courses, setCourses] = useState([]);

    const localGetCourses = async () => {
        let response = await getCourses();
        setCourses(response?.data);
    }

    useEffect(() => {
        localGetCourses();
    }, []);

    return (
        <Routes>
            
            <Route exact path="/" element={<OpenRoute><Home /></OpenRoute>} />
            <Route path="/acesso" element={<OpenRoute><Signin /></OpenRoute>} />
            <Route path="/cadastro" element={<OpenRoute><Subscribe courses={courses}/></OpenRoute>} />
            <Route path="/emocao" element={<PrivateRoute user={['Aluno']}><Emotions /></PrivateRoute>} />
            <Route path="/redefinir_senha" element={<OpenRoute><ForgotPassword /></OpenRoute>} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/redefinir_senha/:token" element={<OpenRoute><ResetPassword /></OpenRoute>} />
            <Route path="/redefinir_senha/sucesso" element={<OpenRoute><ResetSuccessfull /></OpenRoute>} />
            <Route path="/cadastro/sucesso" element={<OpenRoute><AccessConfirmation /></OpenRoute>} />
            <Route path="/posts" element={<PrivateRoute user={['Aluno']}><Posts /></PrivateRoute>} />
            <Route path="/calendario" element={<PrivateRoute user={['Aluno']}><MyCalendar /></PrivateRoute>} />
            <Route path="/incidente/criacao" element={<PrivateRoute user={['Aluno']}><CreateIncident /></PrivateRoute>} />
            <Route path="/adm/post/criacao" element={<PrivateRoute user={['Admin']}><CreatePosts /></PrivateRoute>} />
            <Route path="/adm/agendamento" element={<PrivateRoute user={['Admin']}><ScheduleRoom /></PrivateRoute>} />
            <Route path="/adm/cadastro/gerenciamento" element={<PrivateRoute user={['Admin']}><ManageStudents /></PrivateRoute>} />
            <Route path="/adm/post" element={<PrivateRoute user={['Admin']}><PostTae /></PrivateRoute>} />
            <Route path="/adm/perfil" element={<PrivateRoute user={['Admin']}><ProfileTae /></PrivateRoute>} />
            {/**
            <Route path="/create-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><CreateIncident /></PrivateRoute>} />
            <Route path="/posts" element={<PrivateRoute user={['Aluno', 'Admin']}><Posts /></PrivateRoute>} />
            <Route path="/my-calendar" element={<MyCalendar />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create-incident" element={<CreateIncident />} />
            */}
            <Route path="/perfil" element={<PrivateRoute user={['Aluno']}><Profile courses={courses}/></PrivateRoute>} />
            <Route path="/incidente" element={<PrivateRoute user={['Aluno']}><MyIncident /></PrivateRoute>} />
            {/**
            <Route path="/my-incident" element={<MyIncident />} />
            <Route path="/profile" element={<Profile />} />
             */}
            <Route path="/cadastro/verificacao/:token" element={<EmailConfirmation />} />
            <Route path="/adm/incidente" element={<PrivateRoute user={['Admin']}><Incidents /></PrivateRoute>} />
            <Route path="/adm/incidente/:id" element={<PrivateRoute user={['Admin']}><AdmIncidentDetails /></PrivateRoute>} />
            <Route path="/404" element={<NotFound/>}/>
        </Routes>
    );
}
