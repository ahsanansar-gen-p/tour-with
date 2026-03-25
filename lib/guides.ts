import guidesData from "@/data/guides.json";
import type { Guide } from "@/types/guide";

const guides = guidesData as Guide[];

function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

function slugify(value: string): string {
  return normalizeText(value)
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideById(id: string): Guide | undefined {
  return guides.find((guide) => guide.id === id);
}

export function getGuideSlug(guide: Guide): string {
  return slugify(guide.name);
}

export function getGuideByIdentifier(identifier: string): Guide | undefined {
  const normalized = normalizeText(identifier);

  return guides.find((guide) => {
    return (
      normalizeText(guide.id) === normalized ||
      normalizeText(getGuideSlug(guide)) === normalized
    );
  });
}

export function getGuideHref(guide: Guide): string {
  return `/guides/${getGuideSlug(guide)}`;
}
