import DashboardLayout from "@/layouts/DashboardLayout";

import WelcomeSection from "@/home/components/WelcomeSection";
import UploadSource from "@/features/sources/components/AddSourceDialog";
import HeroSearch from "@/home/components/HeroSearch";
import RecentSource from "@/home/components/RecentSource";

export default function HomePage() {

    return (

        <DashboardLayout>

            <WelcomeSection />

            <div className="grid gap-6 md:grid-cols-2">

                <UploadSource />

                <HeroSearch />

            </div>

            <div className="mt-6">

                <RecentSource />

            </div>

        </DashboardLayout>

    );

}