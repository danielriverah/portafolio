import LegalDocumentLayout from './LegalDocumentLayout.jsx';

export default function LegalDocumentPlaceholder({ project, title, contact, plannedSections = [] }) {
  return (
    <LegalDocumentLayout
      project={project}
      title={title}
      intro="Este documento legal está en preparación. Publicaremos la versión completa en esta misma página."
    >
      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-slate-900">Estado del documento</h2>
        <p>
          Estamos finalizando el contenido oficial para {title.toLowerCase()} de {project}. Mientras tanto, esta
          leyenda sirve como referencia temporal y confirma que el documento formará parte del centro de confianza de
          DevsRivera.
        </p>
      </section>

      {plannedSections.length > 0 && (
        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-slate-900">Secciones previstas</h2>
          <ul class="list-disc pl-6 space-y-1">
            {plannedSections.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-slate-900">Contacto</h2>
        <p>
          Si necesitas información específica antes de la publicación oficial, escríbenos a{' '}
          <a class="text-indigo-600 font-semibold hover:underline" href={`mailto:${contact}`}>
            {contact}
          </a>
          . Nuestro equipo legal puede compartir borradores o resolver preguntas puntuales.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
