const PROJECT_POLICIES = [
  {
    id: 'cosechasmega',
    name: 'Cosechas Mega',
    description:
      'Suite digital para productores agrícolas que incluye paneles operativos, API de inventario y aplicaciones móviles.',
    documents: [
      { label: 'Política de privacidad', url: '/cosechasmega/privacidad' },
      { label: 'Términos y condiciones', url: '/cosechasmega/terminos' },
      { label: 'Licencia de uso', url: '/cosechasmega/licencia' },
    ],
    contact: 'contacto@cosechasmega.com',
  },
  {
    id: 'devsrivera',
    name: 'Portal DevsRivera',
    description:
      'Sitio institucional y herramientas de marketing que conectan con automatizaciones internas y CRM.',
    documents: [
      { label: 'Política de privacidad', url: '/devsrivera/privacidad' },
      { label: 'Términos y condiciones', url: '/devsrivera/terminos' },
      { label: 'Licencia de contenido', url: '/devsrivera/licencia' },
    ],
    contact: 'hola@devsrivera.com',
  },
  {
    id: 'field-tools',
    name: 'Field Tools',
    description:
      'Aplicaciones de escritorio y móviles enfocadas en auditorías de campo y sincronización selectiva de catálogos.',
    documents: [
      { label: 'Política de privacidad', url: '/field-tools/privacidad' },
      { label: 'Términos y condiciones', url: '/field-tools/terminos' },
      { label: 'Licencia de software', url: '/field-tools/licencia' },
    ],
    contact: 'soporte@devsrivera.com',
  },
];

export default function Privacy() {
  return (
    <section class="px-6 py-12 mx-auto max-w-5xl space-y-12">
      <header class="space-y-4 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Centro de confianza</p>
        <h1 class="text-4xl font-bold text-slate-900">Documentación legal por proyecto</h1>
        <p class="text-slate-600 max-w-3xl mx-auto">
          Cada producto de DevsRivera cuenta con políticas, términos y licencias propias. Usa esta página como punto de
          partida para acceder a la documentación correspondiente y mantener tus registros al día.
        </p>
      </header>

      <div class="space-y-8">
        {PROJECT_POLICIES.map((project) => (
          <article
            key={project.id}
            class="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 flex flex-col gap-4"
          >
            <div class="flex flex-col gap-1">
              <h2 class="text-2xl font-semibold text-slate-900">{project.name}</h2>
              <p class="text-sm text-slate-600">{project.description}</p>
            </div>

            <div class="grid sm:grid-cols-3 gap-4">
              {project.documents.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  class="border border-indigo-100 rounded-xl p-4 text-center hover:border-indigo-300 hover:shadow transition"
                >
                  <span class="block text-sm font-semibold text-indigo-600">{doc.label}</span>
                  <span class="block text-xs text-slate-500 mt-1">{doc.url}</span>
                </a>
              ))}
            </div>

            <footer class="text-xs text-slate-500">
              ¿Dudas sobre estos documentos? Escríbenos a{' '}
              <a class="text-indigo-600 font-semibold hover:underline" href={`mailto:${project.contact}`}>
                {project.contact}
              </a>
              .
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
