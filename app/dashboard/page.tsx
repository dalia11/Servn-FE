import DashboardContent from "@/features/dashboard/components/DashboardContent";
import RecentlyViewed from "@/features/dashboard/components/RecentlyViewed";
import { Suspense } from "react";

    
export default async function Dashboard() {

  return (
    <div className="space-y-8">
      <section className="space-y-4">

          <h1 className="text-center text-3xl font-semibold text-zinc-950 sm:text-5xl">
            Welcome to SERVN Dashboard
          </h1>
            <Suspense fallback={<p>Loading...</p>}>
                <DashboardContent />
            </Suspense>
            <div>
                <Suspense fallback={<p>Loading...</p>}>
                    <RecentlyViewed />
                </Suspense>
            </div>
      </section>
    </div>
  );
}
