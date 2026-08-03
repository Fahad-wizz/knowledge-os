import {
    LayoutDashboard,
    FileText,
    Bot,
    Search,
    Settings
} from "lucide-react";

export const navigation = [
    {
        id: "home",
        label: "Home",
        icon: LayoutDashboard,
        path: "/home"
    },
    {
        id: "sources",
        label: "Sources",
        icon: FileText,
        path: "/sources"
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