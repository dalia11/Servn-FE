import Link from "next/link";
import { getDashboardServices } from "@/services/dashboardservice";

export default async function DashboardContent() {
  const services = await getDashboardServices();

  return (
    <ul className="space-y-3 mt-8">
      {services.slice(0, 5).map((service) => (
        <li key={service.id}>
          <Link href={`/service/${service.id}`}>
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}