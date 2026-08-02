import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { navigation } from "@/config/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    function handleLogout() {

        logout();

        navigate("/login");

    }

    return (

        <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-900">

            {/* Logo */}

            <div className="border-b border-slate-800 p-6">

                <h1 className="text-2xl font-bold">

                    🧠 KnowledgeOS

                </h1>

                <p className="mt-1 text-sm text-slate-400">

                    Private AI Workspace

                </p>

            </div>

            {/* Navigation */}

            <nav className="flex-1 p-4">

                <div className="space-y-2">

                    {navigation.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>

                                    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`

                                }
                            >

                                <Icon size={20} />

                                {item.label}

                            </NavLink>

                        );

                    })}

                </div>

            </nav>

            {/* Footer */}

            <div className="border-t border-slate-800 p-4">

                <div>

                    <p className="font-semibold">

                        {user?.fullName}

                    </p>

                    <p className="text-sm text-slate-400">

                        {user?.email}

                    </p>

                </div>

                <button
                    onClick={handleLogout}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 transition hover:bg-red-700"
                >

                    <LogOut size={18}/>

                    Logout

                </button>

            </div>

        </aside>

    );

}