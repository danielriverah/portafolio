import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function FieldToolsPrivacy() {
  return (
    <LegalDocumentPlaceholder
      project="Field Tools"
      title="Política de privacidad"
      contact="soporte@devsrivera.com"
      plannedSections={[
        'Datos recolectados en dispositivos móviles y escritorios',
        'Sincronización selectiva y almacenamiento offline',
        'Medidas de seguridad para equipos en campo',
        'Procedimiento de baja y eliminación de información',
      ]}
    />
  );
}
