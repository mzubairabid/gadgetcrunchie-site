import { CONTACT } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import StandardPage from "@/components/sections/StandardPage";

export const metadata = pageMeta({ title: CONTACT.title, description: CONTACT.description, path: "/contact/" });

export default function Page() {
  return <StandardPage page={CONTACT} path="/contact/" />;
}
