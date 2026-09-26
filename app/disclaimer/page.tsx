import { DISCLAIMER } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import StandardPage from "@/components/sections/StandardPage";

export const metadata = pageMeta({ title: DISCLAIMER.title, description: DISCLAIMER.description, path: "/disclaimer/" });

export default function Page() {
  return <StandardPage page={DISCLAIMER} path="/disclaimer/" />;
}
