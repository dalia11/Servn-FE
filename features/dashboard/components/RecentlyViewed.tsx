import Link from "next/link";
import { getRecentlyViewed } from "@/services/dashboardservice";

export default async function RecentlyViewed() {
  const recentCookies = await getRecentlyViewed();

  return (
    <div>
    <section className="py-8">
    <h1 className="font-semibold text-xl"> Recently Viewed </h1>
    <ul className="space-y-3 mt-8">
      {recentCookies.slice(0, 5).map((cookie) => (
        <li key={cookie.name}>
          <Link href={`/servicepost/${cookie.name}`}>
            {cookie.value}
          </Link>
        </li>
      ))}
    </ul>
    </section>
    </div>

  );
}