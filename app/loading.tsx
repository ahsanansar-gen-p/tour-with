export default function Loading() {
  return (
    <div className="space-y-8" aria-live="polite" aria-busy="true">
      <div className="h-64 animate-pulse rounded-3xl bg-slate-200/70" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`loading-card-${index}`}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-surface p-4 shadow-soft"
          >
            <div className="h-36 animate-pulse rounded-xl bg-slate-200/70" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200/70" />
              <div className="h-3 w-full animate-pulse rounded bg-slate-200/70" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-slate-200/70" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
