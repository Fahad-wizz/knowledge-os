import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children }) {

    return (

        <div className="min-h-screen bg-slate-950 text-white flex">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <TopNavbar />

                <main className="flex-1 p-8 overflow-auto">

                    {children}

                </main>

            </div>

        </div>

    );

}