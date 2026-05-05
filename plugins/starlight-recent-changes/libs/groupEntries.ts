import type { MarkdownHeading } from "astro";
import GithubSlugger from 'github-slugger'
import type { ChangeEntry } from "../common/types";

const GROUP_BY: "day" | "month" | "year" = "month";
const MAX_ENTRIES = 1000;

export function formatGroupKey(date: string | Date): string {
  const value = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(value.getTime())) return String(date);

  let label: string;

  if (GROUP_BY === "month")
    label = value.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  else if (GROUP_BY === "year")
    label = value.toLocaleDateString("pt-BR", { year: "numeric" });
  else
    label = value.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function buildGroupedEntries(entries: ChangeEntry[]): Record<string, ChangeEntry[]> {
  return entries.slice(0, MAX_ENTRIES).reduce(
    (groups, entry) => {
      const key = formatGroupKey(entry.date);
      if (!groups[key]) groups[key] = [];
      groups[key].push(entry);
      return groups;
    },
    {} as Record<string, ChangeEntry[]>,
  );
}

export function toHeadings(grouped: Record<string, ChangeEntry[]>): MarkdownHeading[] {
  const slugger = new GithubSlugger()
  return Object.keys(grouped).map((label, i) => ({
    depth: 2,
    slug: slugger.slug(label),
    text: label,
  }));
}
