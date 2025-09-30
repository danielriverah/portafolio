import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function DevsRiveraLicense() {
  return (
    <LegalDocumentPlaceholder
      project="Portal DevsRivera"
      title="Licencia de contenido"
      contact="hola@devsrivera.com"
      plannedSections={[
        'Derechos de uso de material descargable',
        'Condiciones para redistribución o referencia pública',
        'Uso de marca e identidad visual',
        'Procedimiento de revocación de licencias',
      ]}
    />
  );
}
