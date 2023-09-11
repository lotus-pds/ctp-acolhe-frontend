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
import { ScheduleRoomDay } from "./pages/ScheduleRoomDay";
import { ManageUsers } from "./pages/ManageUsers";
import { PostTae } from "./pages/PostTae";
import { ProfileTae } from "./pages/ProfileTae";
import { NotFound } from "./pages/NotFound";

export function Router(props) {
    const [courses, setCourses] = useState([]);

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
            <Route path="/cadastro" element={<OpenRoute><Subscribe courses={courses} /></OpenRoute>} />
            <Route path="/emocao" element={<PrivateRoute user={['Aluno']}><Emotions /></PrivateRoute>} />
            <Route path="/redefinir_senha" element={<OpenRoute><ForgotPassword /></OpenRoute>} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/redefinir_senha/:token" element={<OpenRoute><ResetPassword /></OpenRoute>} />
            <Route path="/redefinir_senha/sucesso" element={<OpenRoute><ResetSuccessfull /></OpenRoute>} />
            <Route path="/cadastro/sucesso" element={<OpenRoute><AccessConfirmation /></OpenRoute>} />
            <Route path="/posts" element={<PrivateRoute user={['Aluno']}><Posts path="/posts" /></PrivateRoute>} />
            <Route path="/calendario" element={<PrivateRoute user={['Aluno']}><MyCalendar path="/calendario" /></PrivateRoute>} />
            <Route path="/incidente/criacao" element={<PrivateRoute user={['Aluno']}><CreateIncident path="/incidente/criacao" /></PrivateRoute>} />
            <Route path="/adm/post/criacao" element={<PrivateRoute user={['Admin']}><CreatePosts path="/adm/post/criacao" /></PrivateRoute>} />
            <Route path="/adm/agendamento" element={<PrivateRoute user={['Admin']}><ScheduleRoom path="/adm/agendamento" /></PrivateRoute>} />
            <Route path="/adm/agendamento/:date" element={<PrivateRoute user={['Admin']}><ScheduleRoomDay path="/adm/agendamento/:date" /></PrivateRoute>} />
            <Route path="/adm/cadastro/gerenciamento" element={<PrivateRoute user={['Admin']}><ManageUsers path="/adm/cadastro/gerenciamento" /></PrivateRoute>} />
            <Route path="/adm/post" element={<PrivateRoute user={['Admin']}><PostTae path="/adm/post" /></PrivateRoute>} />
            {/**
            <Route path="/create-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><CreateIncident /></PrivateRoute>} />
            <Route path="/posts" element={<PrivateRoute user={['Aluno', 'Admin']}><Posts /></PrivateRoute>} />
            <Route path="/my-calendar" element={<MyCalendar />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create-incident" element={<CreateIncident />} />
            */}
            <Route path="/perfil" element={<PrivateRoute user={['Aluno']}><Profile courses={courses} path="/perfil" /></PrivateRoute>} />
            <Route path="/adm/perfil" element={<PrivateRoute user={['Admin']}><ProfileTae path="/adm/perfil" /></PrivateRoute>} />
            <Route path="/incidente" element={<PrivateRoute user={['Aluno']}><MyIncident path="/incidente" /></PrivateRoute>} />
            {/**
            <Route path="/my-incident" element={<MyIncident />} />
            <Route path="/profile" element={<Profile />} />
             */}
            <Route path="/cadastro/verificacao/:token" element={<EmailConfirmation />} />
            <Route path="/adm/incidente" element={<PrivateRoute user={['Admin']}><Incidents path="/adm/incidente"/></PrivateRoute>} />
            <Route path="/adm/posts" element={<PrivateRoute user={['Admin']}><PostTae path="/adm/posts" /></PrivateRoute>} />
            <Route path="/adm/incidente/:id" element={<PrivateRoute user={['Admin']}><AdmIncidentDetails path="/adm/incidente/:id" /></PrivateRoute>} />
            <Route path="/404" element={<NotFound />} />
        </Routes>
    );
}
