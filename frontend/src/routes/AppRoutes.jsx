import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import DashboardPage from "@/features/dashboard/components/DashboardPage";
import ProtectedRoute from "./ProtectedRoutes";
import SearchPage from "@/pages/Search/SearchPage";
import ChatPage from "@/pages/Chat/ChatPage";
import DocumentsPage from "@/pages/Documents/DocumentsPage";
import SettingsPage from "@/pages/Settings/SettingsPage";

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

            <Route
                path="/documents"
                element={<ProtectedRoute>
                            <DocumentsPage/>
                        </ProtectedRoute>}
            />

            <Route
                path="/chat"
                element={<ProtectedRoute>
                            <ChatPage/>
                        </ProtectedRoute>}
            />

            <Route
                path="/search"
                element={<ProtectedRoute>
                            <SearchPage/>
                        </ProtectedRoute>}
            />

            <Route
                path="/settings"
                element={<ProtectedRoute>
                            <SettingsPage/>
                        </ProtectedRoute>}
            />

        </Routes>

    );

}