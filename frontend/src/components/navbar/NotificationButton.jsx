import { Bell } from "lucide-react";

export default function NotificationButton() {

    return (

        <button
            className="
                rounded-xl
                p-2
                transition
                hover:bg-slate-800
            "
        >

            <Bell size={20} />

        </button>

    );

}