const TEAM = [
  {
    name: 'Daniel Rivera Herrada',
    role: 'Líder técnico & Frontend Engineer',
    summary:
      'Especialista en interfaces accesibles, arquitectura frontend y adopción de metodologías ágiles para equipos multiculturales.',
    expertise: ['Preact', 'React', 'TypeScript', 'UI Engineering'],
    link: '#',
  },
  {
    name: 'María Fernanda López',
    role: 'Backend & Cloud Engineer',
    summary:
      'Diseña APIs escalables, automatiza despliegues y asegura la observabilidad de las plataformas en la nube.',
    expertise: ['Node.js', 'NestJS', 'AWS', 'CI/CD'],
    link: '#',
  },
  {
    name: 'Jorge Antonio Pérez',
    role: 'Product Designer & UX Researcher',
    summary:
      'Transforma necesidades de negocio en experiencias intuitivas mediante investigación, prototipado y pruebas con usuarios.',
    expertise: ['Design Systems', 'Figma', 'UX Research', 'Prototipado'],
    link: '#',
  },
];

export default function CV() {
  return (
    <section class="p-8 max-w-6xl mx-auto flex flex-col gap-8">
      <header class="text-center space-y-3">
        <h2 class="text-3xl font-bold text-slate-900">Currículums del equipo DevsRivera</h2>
        <p class="text-slate-600 max-w-3xl mx-auto">
          Conoce la experiencia y habilidades del equipo que da vida a tus proyectos. Cada CV resume
          la trayectoria profesional y las competencias clave que aportamos a las soluciones que
          construimos.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        {TEAM.map(({ name, role, summary, expertise, link }) => (
          <article
            key={name}
            class="bg-white shadow-sm rounded-xl border border-slate-200 p-6 flex flex-col gap-4"
          >
            <div>
              <h3 class="text-xl font-semibold text-slate-900">{name}</h3>
              <p class="text-sm uppercase tracking-wide text-indigo-500">{role}</p>
            </div>
            <p class="text-sm text-slate-600">{summary}</p>
            <div>
              <h4 class="text-sm font-semibold text-slate-700 mb-2">Especialidades</h4>
              <ul class="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <li
                    key={skill}
                    class="bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={link}
              class="text-indigo-600 text-sm font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver CV completo
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
