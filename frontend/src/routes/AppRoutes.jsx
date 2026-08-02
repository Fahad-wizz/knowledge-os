import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import ProtectedRoute from "./ProtectedRoutes";

export default function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route
                path="/dashboard"
                element={<ProtectedRoute>
                            <DashboardPage/>
                        </ProtectedRoute>}
            />

        </Routes>

    );

}