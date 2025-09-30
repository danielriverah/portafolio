import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function FieldToolsLicense() {
  return (
    <LegalDocumentPlaceholder
      project="Field Tools"
      title="Licencia de software"
      contact="soporte@devsrivera.com"
      plannedSections={[
        'Asignación de licencias por dispositivo',
        'Condiciones de sublicenciamiento para contratistas',
        'Uso aceptable de módulos offline',
        'Proceso para transferir o revocar licencias',
      ]}
    />
  );
}
