import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllGuides,
  getGuideByIdentifier,
  getGuideHref,
  getGuideSlug,
} from "@/lib/guides";

type GuideProfilePageProps = {
  params: Promise<{ identifier: string }>;
};

export function generateStaticParams() {
  return getAllGuides().flatMap((guide) => [
    { identifier: guide.id },
    { identifier: getGuideSlug(guide) },
  ]);
}

export async function generateMetadata({
  params,
}: GuideProfilePageProps): Promise<Metadata> {
  const { identifier } = await params;
  const guide = getGuideByIdentifier(identifier);

  if (!guide) {
    return {
      title: "Guide Not Found",
      description: "The requested guide profile could not be found.",
    };
  }

  return {
    title: `${guide.name} - Tour Guide`,
    description: guide.description,
  };
}

export default async function GuideProfilePage({
  params,
}: GuideProfilePageProps) {
  const { identifier } = await params;
  const guide = getGuideByIdentifier(identifier);

  if (!guide) {
    notFound();
  }

  const socialLinks = [
    { id: "instagram", label: "Instagram", href: guide.socials?.instagram },
    { id: "facebook", label: "Facebook", href: guide.socials?.facebook },
    { id: "tiktok", label: "TikTok", href: guide.socials?.tiktok },
  ].filter(
    (link): link is { id: string; label: string; href: string } =>
      Boolean(link.href)
  );

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-surface p-6 shadow-soft sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={guide.image}
              alt={guide.name}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 320px"
              quality={84}
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Tour Guide Profile
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {guide.name}
            </h1>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-800">
              Experience: {guide.experience}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              {guide.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Explore Tours
              </Link>
              <Link
                href={getGuideHref(guide)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Share Profile Link
              </Link>
            </div>
            {socialLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900">Gallery</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guide.gallery.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={image}
                alt={`${guide.name} gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                quality={74}
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
