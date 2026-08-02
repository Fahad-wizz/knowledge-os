import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

import { navigation } from "@/config/navigation";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (

        <aside className="flex w-64 flex-col border-r border-slate-800 bg-slate-900">

            {/* Logo */}

            <div className="border-b border-slate-800 p-6">

                <h1 className="text-2xl font-bold">

                    🧠 KnowledgeOS

                </h1>

                <p className="mt-1 text-sm text-slate-400">

                    AI Workspace

                </p>

            </div>

            {/* Navigation */}

            <nav className="flex-1 space-y-2 p-4">

                {navigation.map(item => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>

                                `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors
                                ${
                                    isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800"
                                }`

                            }
                        >

                            <Icon size={20} />

                            {item.title}

                        </NavLink>

                    );

                })}

            </nav>

            {/* User */}

            <div className="border-t border-slate-800 p-4">

                <p className="font-semibold">

                    {user?.fullName}

                </p>

                <p className="text-sm text-slate-400">

                    {user?.email}

                </p>

                <button
                    onClick={handleLogout}
                    className="mt-4 flex w-full items-center gap-2 rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-700"
                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </aside>

    );

}