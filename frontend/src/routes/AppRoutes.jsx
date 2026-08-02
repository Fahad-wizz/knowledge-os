import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoutes";
import SearchPage from "@/features/Search/SearchPage";
import ChatPage from "@/features/chat/ChatPage";
import DocumentsPage from "@/features/documents/pages/DocumentsPage";
import SettingsPage from "@/features/Settings/SettingsPage";

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