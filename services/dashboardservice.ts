import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";

export interface Service {
  id: number;
  title: string;
  description: string,
  "rating": number
}

export async function getDashboardServices(): Promise<Service[]> {
    "use cache";
    cacheLife("days");
    cacheTag("Services");
    //updateTage("Services")

  const response = await fetch(
    "https://dummyjson.com/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  const data = await response.json();
  return data.products;
}
export async function getServicePost(id: any): Promise<Service> {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    notFound();
  }
  const data = await response.json();
  return data;
}
export async function getRecentlyViewed(){
  const cookieStore = await cookies()
  const data = cookieStore.getAll();
    
  return data;
}