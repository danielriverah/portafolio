import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function DevsRiveraTerms() {
  return (
    <LegalDocumentPlaceholder
      project="Portal DevsRivera"
      title="Términos y condiciones"
      contact="hola@devsrivera.com"
      plannedSections={[
        'Servicios ofrecidos y obligaciones de uso',
        'Propiedad intelectual del contenido publicado',
        'Limitación de responsabilidad sobre integraciones externas',
        'Legislación aplicable y resolución de disputas',
      ]}
    />
  );
}
