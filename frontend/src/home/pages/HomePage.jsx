import DashboardLayout from "@/layouts/DashboardLayout";

import useDashboard from "../hooks/useDashboard";

import WelcomeSection from "../components/WelcomeSection";
import HeroSearch from "../components/HeroSearch";
import QuickActions from "../components/QuickActions";
import KnowledgeStats from "../components/KnowledgeStats";
import RecentSources from "../components/RecentSources";

export default function HomePage() {

    const {

        data,

        isLoading,

        error

    } = useDashboard();

    if (isLoading) {

        return (

            <DashboardLayout>

                <p>

                    Loading dashboard...

                </p>

            </DashboardLayout>

        );

    }

    if (error) {

        return (

            <DashboardLayout>

                <p className="text-red-500">

                    Failed to load dashboard.

                </p>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="space-y-10">

                <WelcomeSection />

                <HeroSearch />

                <QuickActions />

                <KnowledgeStats
                    dashboard={data}
                />

                <RecentSources
                    sources={data.recentSources}
                />

            </div>

        </DashboardLayout>

    );

}