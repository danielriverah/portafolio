const PORTFOLIO_GROUPS = [
  {
    id: 'web-apps',
    title: 'Aplicaciones web',
    description:
      'Interfaces ricas en datos que conectan con APIs y paneles administrativos para equipos en crecimiento.',
    projects: [
      {
        slug: 'cosechasmega-panel',
        name: 'Panel Operativo Cosechas Mega',
        summary:
          'Dashboard para productores agrícolas con monitoreo en tiempo real, reportes descargables y roles por perfil.',
        stack: ['Preact', 'Tailwind CSS', 'Supabase'],
        links: {
          demo: '#',
          repo: '#',
        },
        dependsOn: ['cosechasmega-api'],
      },
      {
        slug: 'devsrivera-site',
        name: 'Portal Corporativo DevsRivera',
        summary:
          'Sitio público con generación de leads, blog técnico y formularios conectados a flujos de automatización.',
        stack: ['Astro', 'Contentful', 'Netlify'],
        links: {
          demo: '#',
          repo: '#',
        },
        dependsOn: ['devsrivera-automation'],
      },
    ],
  },
  {
    id: 'apis',
    title: 'APIs & servicios',
    description:
      'Capas de datos seguras y escalables que alimentan las aplicaciones web y móviles del ecosistema.',
    projects: [
      {
        slug: 'cosechasmega-api',
        name: 'API de Inventario Cosechas Mega',
        summary:
          'Servicio REST para gestionar lotes, órdenes de compra y trazabilidad de productos agrícolas.',
        stack: ['Node.js', 'Fastify', 'PostgreSQL'],
        links: {
          repo: '#',
          docs: '#',
        },
        dependsOn: [],
      },
      {
        slug: 'devsrivera-automation',
        name: 'Orquestador de Automatizaciones DevsRivera',
        summary:
          'Microservicio que sincroniza formularios, CRM y notificaciones en Slack para el equipo comercial.',
        stack: ['NestJS', 'BullMQ', 'Redis'],
        links: {
          repo: '#',
          docs: '#',
        },
        dependsOn: ['devsrivera-libraries'],
      },
    ],
  },
  {
    id: 'libraries',
    title: 'Librerías & SDKs',
    description:
      'Paquetes reutilizables que aceleran la integración de nuevas experiencias en proyectos internos y externos.',
    projects: [
      {
        slug: 'devsrivera-libraries',
        name: 'Kit UI DevsRivera',
        summary:
          'Colección de componentes accesibles y temas personalizables publicados como paquete privado de npm.',
        stack: ['TypeScript', 'Storybook', 'Rollup'],
        links: {
          docs: '#',
        },
        dependsOn: [],
      },
    ],
  },
  {
    id: 'apps',
    title: 'Aplicaciones móviles & desktop',
    description:
      'Experiencias multiplataforma para usuarios en campo, con soporte offline y sincronización inteligente.',
    projects: [
      {
        slug: 'cosechasmega-mobile',
        name: 'App móvil Cosechas Mega',
        summary:
          'Aplicación híbrida para registrar cosechas, adjuntar evidencia y trabajar sin conexión en zonas rurales.',
        stack: ['Ionic', 'Capacitor', 'SQLite'],
        links: {
          demo: '#',
        },
        dependsOn: ['cosechasmega-api'],
      },
      {
        slug: 'devsrivera-field-tools',
        name: 'Field Tools Desktop',
        summary:
          'Suite de utilidades para auditores con sincronización selectiva de catálogos desde la API principal.',
        stack: ['Electron', 'React', 'RxDB'],
        links: {
          demo: '#',
        },
        dependsOn: ['devsrivera-automation'],
      },
    ],
  },
];

const PROJECT_LOOKUP = PORTFOLIO_GROUPS.reduce((acc, group) => {
  group.projects.forEach((project) => {
    acc[project.slug] = project;
  });
  return acc;
}, {});

export default function Portfolio() {
  return (
    <section class="px-6 py-12 mx-auto max-w-6xl space-y-12">
      <header class="space-y-4 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Portafolio DevsRivera</p>
        <h1 class="text-4xl font-bold text-slate-900">Proyectos agrupados por capacidades</h1>
        <p class="text-slate-600 max-w-3xl mx-auto">
          Organizamos nuestras soluciones por tipo de entrega para ayudarte a comprender cómo las piezas se
          relacionan entre sí. Explora aplicaciones, APIs, librerías y apps que colaboran para ofrecer experiencias
          consistentes.
        </p>
      </header>

      <div class="space-y-16">
        {PORTFOLIO_GROUPS.map((group) => (
          <section key={group.id} class="space-y-8">
            <header class="space-y-2">
              <h2 class="text-2xl font-semibold text-slate-900">{group.title}</h2>
              <p class="text-slate-600">{group.description}</p>
            </header>

            <div class="grid gap-6 md:grid-cols-2">
              {group.projects.map((project) => (
                <article
                  key={project.slug}
                  id={project.slug}
                  class="border border-slate-200 rounded-xl shadow-sm p-6 space-y-4 bg-white"
                >
                  <div class="space-y-2">
                    <h3 class="text-xl font-semibold text-slate-900">{project.name}</h3>
                    <p class="text-sm text-slate-600">{project.summary}</p>
                  </div>

                  <div class="space-y-2">
                    <h4 class="text-xs font-semibold uppercase tracking-wide text-slate-500">Tecnologías clave</h4>
                    <ul class="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          class="bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.dependsOn.length > 0 && (
                    <div class="space-y-2">
                      <h4 class="text-xs font-semibold uppercase tracking-wide text-slate-500">Integraciones</h4>
                      <ul class="list-disc list-inside text-sm text-slate-600 space-y-1">
                        {project.dependsOn.map((dependency) => {
                          const related = PROJECT_LOOKUP[dependency];
                          return (
                            <li key={dependency}>
                              {related ? (
                                <a class="text-indigo-600 hover:underline" href={`#${dependency}`}>
                                  {related.name}
                                </a>
                              ) : (
                                dependency
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {project.links && (
                    <div class="flex flex-wrap gap-3 text-sm">
                      {Object.entries(project.links).map(([key, value]) => (
                        <a
                          key={key}
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-indigo-600 font-semibold hover:underline"
                        >
                          {key === 'demo' && 'Ver demo'}
                          {key === 'repo' && 'Repositorio'}
                          {key === 'docs' && 'Documentación'}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
