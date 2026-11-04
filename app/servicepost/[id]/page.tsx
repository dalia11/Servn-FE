import ServicePostContent from "@/features/ServicePost/components/ServicePostContent";
import { Suspense } from "react";

export const instant = false;

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function ServicePost({ params }: Props) {
  const { id } = await params;

  return <ServicePostContent id={id} />;
}

export default function ServicePostPage({ params }: Props) {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <ServicePost params={params} />
      </Suspense>
    </main>
  );
}