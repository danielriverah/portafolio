import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function DevsRiveraPrivacy() {
  return (
    <LegalDocumentPlaceholder
      project="Portal DevsRivera"
      title="Política de privacidad"
      contact="hola@devsrivera.com"
      plannedSections={[
        'Tipos de datos recolectados en formularios y analítica',
        'Uso de cookies y tecnologías de seguimiento',
        'Conservación y transferencia internacional de datos',
        'Derechos de titulares y mecanismos de solicitud',
      ]}
    />
  );
}
