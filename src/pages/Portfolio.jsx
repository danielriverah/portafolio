export default function Portfolio() {
  return (
    <section class="p-8 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Portafolio</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <article class="border rounded p-4">
          <img src="/project-ejemplo.svg" alt="Proyecto de ejemplo" class="mb-4" />
          <h3 class="text-2xl font-semibold">Proyecto de Ejemplo</h3>
          <p class="mb-2">
            {/* Reemplaza con la descripción de tu proyecto */}
            Breve descripción del proyecto realizado.
          </p>
          <a
            href="#"
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Reemplaza con el enlace a tu proyecto */}
            Ver proyecto
          </a>
        </article>
      </div>
    </section>
  );
}
