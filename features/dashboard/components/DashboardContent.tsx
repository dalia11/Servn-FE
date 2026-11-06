import Link from "next/link";
import { getDashboardServices } from "@/services/dashboardservice";
import RateButton from "@/components/ui/rate-btn";

export default async function DashboardContent() {
  const servicesCleaning = await getDashboardServices();

  return (
    <div>
    <section className="py-8">
    <h1 className="font-semibold text-xl"> Choose a cleaning Service </h1>
    <ul className="space-y-3 mt-8">
      {servicesCleaning.slice(0, 5).map((service) => (
        <li key={service.id}>
          <Link href={`/servicepost/${service.id}`}>
            {service.title}
          </Link>
          <RateButton votes={service.rating} voteId={service.id}/>
        </li>
      ))}
    </ul>
    </section>
    <section>
    <h1 className="font-semibold text-xl"> Choose a plumbing service </h1>
        <ul className="space-y-3 mt-8">
      {servicesCleaning.slice(0, 5).map((service) => (
        <li key={service.id}>
          <Link href={`/servicepost/${service.id}`}>
            {service.title}
          </Link>
          <RateButton votes={service.rating} voteId={service.id}/>
        </li>
      ))}
    </ul>
    </section>
    </div>

  );
}