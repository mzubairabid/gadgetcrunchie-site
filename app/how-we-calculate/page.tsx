import { METHODOLOGY } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import StandardPage from "@/components/sections/StandardPage";

export const metadata = pageMeta({ title: METHODOLOGY.title, description: METHODOLOGY.description, path: "/how-we-calculate/" });

export default function Page() {
  return <StandardPage page={METHODOLOGY} path="/how-we-calculate/" />;
}
