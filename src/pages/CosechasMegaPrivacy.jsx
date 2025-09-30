import { h } from 'preact';

export default function CosechasMegaPrivacy() {
  return (
    <section class="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <header class="space-y-2">
        <h1 class="text-3xl font-bold text-gray-900">Política de Privacidad de Cosechas Mega</h1>
        <p class="text-gray-600">
          Esta página describe cómo Cosechas Mega protege la información de las personas usuarias de la aplicación.
        </p>
      </header>

      <article class="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Cosechas Mega ha sido diseñada para ofrecer una experiencia sencilla y segura. No recopilamos, almacenamos ni
          compartimos información personal identificable de quienes usan la aplicación. Tampoco utilizamos servicios de 
          ni herramientas de terceros que rastreen a las personas usuarias.
        </p>

        <p>
          Todos los datos que se muestran dentro de la aplicación permanecen en el dispositivo y únicamente se utilizan
          para prestar las funciones básicas del producto. Si en el futuro llegamos a implementar nuevas
          características que requieran recopilar información adicional, actualizaremos esta política y notificaremos a
          las personas usuarias con antelación.
        </p>

        <p>
          Si tienes preguntas sobre esta política de privacidad, puedes escribirnos a
          <a class="text-indigo-600 font-medium" href="mailto:contacto@cosechasmega.com"> drh_river@hotmail.com</a>.
        </p>
      </article>
    </section>
  );
}
