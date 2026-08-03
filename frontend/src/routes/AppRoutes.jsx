import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import HomePage from "@/home/pages/HomePage";
import ProtectedRoute from "./ProtectedRoutes";
import SearchPage from "@/features/Search/pages/SearchPage";
import ChatPage from "@/features/chat/ChatPage";
import SettingsPage from "@/features/Settings/SettingsPage";
import SourcesPage from "@/features/sources/pages/SourcesPage";

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
                path="/home"
                element={<ProtectedRoute>
                            <HomePage/>
                        </ProtectedRoute>}
            />

            <Route
                path="/sources"
                element={<ProtectedRoute>
                            <SourcesPage/>
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