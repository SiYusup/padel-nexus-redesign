import { site } from "@/lib/site";

/** Wordmark: "padel" tipis, "Nexus" tebal miring, mengikuti logo resmi. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`leading-none tracking-tight ${className}`}>
      <span className="font-light">{site.wordmark.light}</span>
      <span className="font-bold italic">{site.wordmark.bold}</span>
    </span>
  );
}
