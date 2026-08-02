import { useAuth } from "@/context/AuthContext";

export default function WelcomeSection() {

    const { user } = useAuth();

    return (

        <section className="mb-8">

            <h1 className="text-4xl font-bold tracking-tight">

                Welcome back, {user?.fullName} 👋

            </h1>

            <p className="mt-2 text-slate-400">

                Search, upload and chat with your private knowledge base.

            </p>

        </section>

    );

}