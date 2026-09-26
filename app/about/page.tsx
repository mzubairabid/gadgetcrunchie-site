import { ABOUT } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import StandardPage from "@/components/sections/StandardPage";
import { personLd } from "@/lib/schema";
export const metadata = pageMeta({ title: ABOUT.title, description: ABOUT.description, path: "/about/" });

export default function Page() {
  return <StandardPage page={ABOUT} path="/about/" extraLd={[personLd]} />;
}
