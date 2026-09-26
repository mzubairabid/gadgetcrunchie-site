import Link from "next/link";
import ToolGrid from "@/components/sections/ToolGrid";
import { TOOLS } from "@/lib/tools";

export default function NotFound() {
  return (
    <div className="container-site">
      <header className="pt-10 pb-6">
        <h1 className="h-page mb-3">This page doesn't exist</h1>
        <p className="lede">Older Gadget Crunchie articles have been removed. Web development guides now live on <a href="https://blog.mzadev.com/">blog.mzadev.com</a>. Here are the calculators instead.</p>
        <Link className="btn btn-primary mt-4" href="/">Go to the home page</Link>
      </header>
      <ToolGrid tools={TOOLS.slice(0, 6)} />
    </div>
  );
}
