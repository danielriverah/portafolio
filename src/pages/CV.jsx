export default function CV() {
  return (
    <section class="p-8 max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Currículum Vitae</h2>
      <div class="flex flex-col items-center gap-4">
        <img src="/profile.svg" alt="Foto de perfil" class="w-32 h-32 rounded-full" />
        <h3 class="text-2xl font-semibold">Daniel Rivera Herrada</h3>
        <p class="text-center">
          {/* Reemplaza con una breve descripción personal */}
          Desarrollador web con pasión por crear experiencias intuitivas.
        </p>
      </div>
      <section class="mt-8">
        <h4 class="text-xl font-semibold">Experiencia</h4>
        <ul class="list-disc ml-5">
          <li>
            {/* Reemplaza con tu experiencia laboral */}
            Empresa Ficticia — Desarrollador Frontend (2022 - Actualidad)
          </li>
        </ul>
      </section>
      <section class="mt-4">
        <h4 class="text-xl font-semibold">Educación</h4>
        <ul class="list-disc ml-5">
          <li>
            {/* Reemplaza con tu formación académica */}
            Universidad de Ejemplo — Ingeniería Informática (2018 - 2022)
          </li>
        </ul>
      </section>
      <section class="mt-4">
        <h4 class="text-xl font-semibold">Habilidades</h4>
        <ul class="list-disc ml-5">
          {/* Agrega o modifica las habilidades según tu perfil */}
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>
    </section>
  );
}
