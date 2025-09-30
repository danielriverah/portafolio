export default function Home() {
  return (
    <section class="flex flex-col gap-12 p-8 mx-auto max-w-5xl">
      <header class="text-center flex flex-col gap-4">
        <p class="uppercase tracking-[0.35em] text-sm text-slate-500">DevsRivera</p>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900">
          Desarrolladores Rivera: soluciones digitales que impulsan tu visión
        </h1>
        <p class="text-lg text-slate-600">
          Somos un colectivo de desarrolladores apasionados por construir productos web
          modernos, accesibles y orientados a resultados. Acompañamos a startups y empresas en
          cada etapa del ciclo de vida de sus aplicaciones, desde la estrategia hasta el soporte
          continuo.
        </p>
      </header>

      <section class="grid gap-8 md:grid-cols-3">
        <article class="bg-white shadow rounded-lg p-6 text-center flex flex-col gap-3">
          <h2 class="text-xl font-semibold text-slate-800">Consultoría Técnica</h2>
          <p class="text-slate-600 text-sm">
            Evaluamos tu producto, diseñamos la arquitectura adecuada e impulsamos decisiones
            tecnológicas acertadas para acelerar tus lanzamientos.
          </p>
        </article>
        <article class="bg-white shadow rounded-lg p-6 text-center flex flex-col gap-3">
          <h2 class="text-xl font-semibold text-slate-800">Desarrollo a Medida</h2>
          <p class="text-slate-600 text-sm">
            Creamos experiencias web robustas y escalables que reflejan la identidad de tu marca
            y satisfacen las necesidades reales de tus usuarios.
          </p>
        </article>
        <article class="bg-white shadow rounded-lg p-6 text-center flex flex-col gap-3">
          <h2 class="text-xl font-semibold text-slate-800">Acompañamiento Continuo</h2>
          <p class="text-slate-600 text-sm">
            Monitoreamos, optimizamos y evolucionamos tus plataformas para que sigan entregando
            valor con el paso del tiempo.
          </p>
        </article>
      </section>

      <section class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-slate-900">Tecnología al servicio de las personas</h2>
          <p class="text-slate-600">
            Trabajamos con herramientas modernas como React, Preact, Node.js y servicios en la
            nube para entregar soluciones eficientes. Nuestro enfoque se basa en la colaboración
            constante con nuestros clientes y la iteración rápida para validar ideas.
          </p>
          <p class="text-slate-600">
            Además de construir productos, compartimos conocimiento mediante talleres, mentorías y
            documentación clara que empodera a los equipos internos.
          </p>
        </div>
        <div class="bg-slate-900 text-white p-6 rounded-xl flex flex-col gap-4">
          <h3 class="text-xl font-semibold">¿Listo para colaborar?</h3>
          <p class="text-sm text-slate-200">
            Cuéntanos sobre tu proyecto y descubramos juntos cómo llevarlo al siguiente nivel con
            DevsRivera.
          </p>
          <a
            href="mailto:hola@devsrivera.com"
            class="self-start bg-white text-slate-900 font-medium px-4 py-2 rounded hover:bg-slate-100"
          >
            Escríbenos
          </a>
        </div>
      </section>
    </section>
  );
}
