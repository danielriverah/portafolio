import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function CosechasMegaTerms() {
  return (
    <LegalDocumentPlaceholder
      project="Cosechas Mega"
      title="Términos y condiciones"
      contact="contacto@cosechasmega.com"
      plannedSections={[
        'Alcance del servicio y definiciones',
        'Responsabilidades de los administradores y técnicos de campo',
        'Lineamientos de disponibilidad y mantenimiento',
        'Limitación de responsabilidad y jurisdicción aplicable',
      ]}
    />
  );
}
