import { PRIVACY } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import StandardPage from "@/components/sections/StandardPage";

export const metadata = pageMeta({ title: PRIVACY.title, description: PRIVACY.description, path: "/privacy-policy/" });

export default function Page() {
  return <StandardPage page={PRIVACY} path="/privacy-policy/" />;
}
