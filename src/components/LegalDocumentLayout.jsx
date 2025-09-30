export default function LegalDocumentLayout({ project, title, intro, children }) {
  return (
    <section class="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <header class="space-y-2">
        <p class="text-sm uppercase tracking-[0.3em] text-indigo-500">{project}</p>
        <h1 class="text-3xl font-bold text-slate-900">{title}</h1>
        {intro && <p class="text-slate-600">{intro}</p>}
      </header>

      <article class="space-y-6 text-slate-700 leading-relaxed">{children}</article>
    </section>
  );
}
