import { TERMS } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import StandardPage from "@/components/sections/StandardPage";

export const metadata = pageMeta({ title: TERMS.title, description: TERMS.description, path: "/terms/" });

export default function Page() {
  return <StandardPage page={TERMS} path="/terms/" />;
}
