import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function FieldToolsTerms() {
  return (
    <LegalDocumentPlaceholder
      project="Field Tools"
      title="Términos y condiciones"
      contact="soporte@devsrivera.com"
      plannedSections={[
        'Ámbito de uso por cuadrillas y supervisores',
        'Requisitos mínimos de hardware y conectividad',
        'Soporte, mantenimiento y garantías limitadas',
        'Resolución de disputas y leyes aplicables',
      ]}
    />
  );
}
