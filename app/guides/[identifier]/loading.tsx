export default function GuideProfileLoading() {
  return (
    <div className="space-y-8" aria-live="polite" aria-busy="true">
      <div className="rounded-3xl border border-slate-200 bg-surface p-6 shadow-soft sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="aspect-[4/5] animate-pulse rounded-2xl bg-slate-200/70" />
          <div className="space-y-3">
            <div className="h-4 w-1/4 animate-pulse rounded bg-slate-200/70" />
            <div className="h-8 w-1/2 animate-pulse rounded bg-slate-200/70" />
            <div className="h-3 w-full animate-pulse rounded bg-slate-200/70" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200/70" />
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`guide-gallery-${index}`}
            className="aspect-[4/3] animate-pulse rounded-xl bg-slate-200/70"
          />
        ))}
      </div>
    </div>
  );
}
