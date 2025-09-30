import LegalDocumentLayout from '../components/LegalDocumentLayout.jsx';

export default function CosechasMegaPrivacy() {
  return (
    <LegalDocumentLayout
      project="Cosechas Mega"
      title="Política de privacidad"
      intro="Esta política describe cómo la suite Cosechas Mega maneja la información personal de productores y equipos en campo. Última actualización: 10 de enero de 2024."
    >
      <section class="space-y-2">
        <h2 class="text-xl font-semibold text-slate-900">1. Información que procesamos</h2>
        <p>
          La aplicación móvil y el panel operativo almacenan en el dispositivo información sobre lotes, cosechas y
          actividades programadas. Solo cuando el usuario sincroniza manualmente, estos datos viajan de forma cifrada a
          los servicios de DevsRivera para respaldos y coordinación con el API de inventario.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-xl font-semibold text-slate-900">2. Finalidad del procesamiento</h2>
        <p>
          Utilizamos los datos recopilados para habilitar reportes productivos, sincronización entre equipos y
          auditorías internas. No comercializamos información con terceros ni la usamos para campañas publicitarias.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-xl font-semibold text-slate-900">3. Conservación y eliminación</h2>
        <p>
          Los datos permanecen en servidores ubicados en la Unión Europea con respaldos cifrados. Puedes solicitar la
          eliminación definitiva de tus registros escribiendo a{' '}
          <a class="text-indigo-600 font-semibold hover:underline" href="mailto:privacidad@cosechasmega.com">
            privacidad@cosechasmega.com
          </a>
          . Responderemos en un máximo de 10 días hábiles.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-xl font-semibold text-slate-900">4. Derechos de los usuarios</h2>
        <p>
          Puedes acceder, rectificar o descargar la información asociada a tu cuenta desde el panel web. También puedes
          oponerte al procesamiento contactando a nuestro equipo de soporte y se suspenderá la sincronización mientras
          se revisa tu solicitud.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-xl font-semibold text-slate-900">5. Cambios a esta política</h2>
        <p>
          Notificaremos dentro de la aplicación y vía correo a los administradores registrados cada vez que actualicemos
          esta política. Mantendremos un historial de versiones para consulta en el centro de confianza de DevsRivera.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
