import {
    LayoutDashboard,
    FileText,
    Bot,
    Search,
    Settings
} from "lucide-react";

export const navigation = [

    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard"
    },

    {
        title: "Documents",
        icon: FileText,
        path: "/documents"
    },

    {
        title: "AI Chat",
        icon: Bot,
        path: "/chat"
    },

    {
        title: "Search",
        icon: Search,
        path: "/search"
    },

    {
        title: "Settings",
        icon: Settings,
        path: "/settings"
    }

];