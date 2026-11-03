export interface Service {
  id: number;
  title: string;
}

export async function getDashboardServices(): Promise<Service[]> {
  const response = await fetch(
    "https://dummyjson.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  const data = await response.json();
  return data.posts;
}