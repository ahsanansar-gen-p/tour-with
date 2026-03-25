export default function TourDetailsLoading() {
  return (
    <div className="space-y-8" aria-live="polite" aria-busy="true">
      <div className="h-[320px] animate-pulse rounded-3xl bg-slate-200/70 sm:h-[420px]" />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`tour-section-${index}`}
              className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft"
            >
              <div className="h-5 w-1/3 animate-pulse rounded bg-slate-200/70" />
              <div className="mt-4 h-3 w-full animate-pulse rounded bg-slate-200/70" />
              <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-slate-200/70" />
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
          <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200/70" />
          <div className="mt-4 h-3 w-full animate-pulse rounded bg-slate-200/70" />
          <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-slate-200/70" />
        </div>
      </div>
    </div>
  );
}
