import LegalDocumentPlaceholder from '../components/LegalDocumentPlaceholder.jsx';

export default function CosechasMegaLicense() {
  return (
    <LegalDocumentPlaceholder
      project="Cosechas Mega"
      title="Licencia de uso"
      contact="contacto@cosechasmega.com"
      plannedSections={[
        'Derechos de instalación y número de dispositivos autorizados',
        'Restricciones de ingeniería inversa y redistribución',
        'Política de actualizaciones y módulos adicionales',
        'Procedimiento para la terminación de la licencia',
      ]}
    />
  );
}
