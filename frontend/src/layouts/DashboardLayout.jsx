import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children }) {

    return (

        <div className="flex min-h-screen bg-slate-950 text-white">

            <Sidebar />

            <div className="flex flex-1 flex-col">

                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-8">

                    {children}

                </main>

            </div>

        </div>

    );

}