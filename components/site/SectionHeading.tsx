type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </header>
  );
}
