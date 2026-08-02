import {
    LayoutDashboard,
    FileText,
    Bot,
    Search,
    Settings
} from "lucide-react";

export const navigation = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard"
    },
    {
        id: "documents",
        label: "Documents",
        icon: FileText,
        path: "/documents"
    },
    {
        id: "chat",
        label: "AI Chat",
        icon: Bot,
        path: "/chat"
    },
    {
        id: "search",
        label: "Search",
        icon: Search,
        path: "/search"
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings,
        path: "/settings"
    }
];