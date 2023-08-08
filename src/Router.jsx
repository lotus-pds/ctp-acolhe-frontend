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
import { CreatePosts } from "./pages/CreatePosts";
import { ScheduleRoom } from "./pages/ScheduleRoom";
import { ListIncident } from "./pages/ListIncident";
import { ManageStudents } from "./pages/ManageStudents";
import { PostTae } from "./pages/PostTae";
import { ProfileTae } from "./pages/ProfileTae";


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
            <Route path="/signin" element={<OpenRoute><Signin /></OpenRoute>} />
            <Route path="/subscribe" element={<OpenRoute><Subscribe courses={courses}/></OpenRoute>} />
            <Route path="/emotions" element={<PrivateRoute user={['Aluno']} alternative='/successful'><Emotions /></PrivateRoute>} />
            <Route path="/forgot-password" element={<OpenRoute><ForgotPassword /></OpenRoute>} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/reset-my-password/:token" element={<OpenRoute><ResetPassword /></OpenRoute>} />
            <Route path="/reset-successfull" element={<OpenRoute><ResetSuccessfull /></OpenRoute>} />
            <Route path="/access-confirmation" element={<OpenRoute><AccessConfirmation /></OpenRoute>} />
            <Route path="/create-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><CreateIncident /></PrivateRoute>} />
            <Route path="/posts" element={<PrivateRoute user={['Aluno', 'Admin']}><Posts /></PrivateRoute>} />
            <Route path="/my-calendar" element={<PrivateRoute user={['Aluno', 'Admin']}><MyCalendar /></PrivateRoute>} />
            <Route path="/create-posts" element={<CreatePosts />} />
            <Route path="/schedule-room" element={<ScheduleRoom />} />
            <Route path="/list-incident" element={<ListIncident />} />
            <Route path="/manage-students" element={<ManageStudents />} />
            <Route path="/post-tae" element={<PostTae />} />
            <Route path="/my-profile-tae" element={<ProfileTae />} />
            {/**
            <Route path="/create-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><CreateIncident /></PrivateRoute>} />
            <Route path="/posts" element={<PrivateRoute user={['Aluno', 'Admin']}><Posts /></PrivateRoute>} />
            <Route path="/my-calendar" element={<MyCalendar />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create-incident" element={<CreateIncident />} />
            */}
            <Route path="/profile" element={<PrivateRoute user={['Aluno', 'Admin']}><Profile courses={courses}/></PrivateRoute>} />
            <Route path="/my-incident" element={<PrivateRoute user={['Aluno', 'Admin']}><MyIncident /></PrivateRoute>} />
            {/**
            <Route path="/my-incident" element={<MyIncident />} />
            <Route path="/profile" element={<Profile />} />
             */}
            <Route path="/subscribe/verification/:token" element={<EmailConfirmation />} />
        </Routes>
    );
}
