import Link from "next/link";
import { getServicePost } from "@/services/dashboardservice";

export default async function ServicePostContent(id: any) {

  const service = await getServicePost(id.id);

  return (
    <div>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
    </div>
  );
}