import DashboardLayout from "@/layouts/DashboardLayout";

import WelcomeSection from "@/features/dashboard/components/WelcomeSection";
import UploadCard from "@/features/documents/components/UploadCard";
import QuickSearchCard from "@/features/dashboard/components/QuickSearchCard";
import RecentDocuments from "@/features/dashboard/components/RecentDocuments";

export default function DashboardPage() {

    return (

        <DashboardLayout>

            <WelcomeSection />

            <div className="grid gap-6 md:grid-cols-2">

                <UploadCard />

                <QuickSearchCard />

            </div>

            <div className="mt-6">

                <RecentDocuments />

            </div>

        </DashboardLayout>

    );

}