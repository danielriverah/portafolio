# portafolio

Sitio estático de portafolio construido con Preact y Tailwind CSS usando Vite.

## Estructura del sitio

- **Inicio** (`src/pages/Home.jsx`): breve presentación.
- **CV** (`src/pages/CV.jsx`): sección para tus datos profesionales.
- **Portafolio** (`src/pages/Portfolio.jsx`): listado de proyectos con imagen, descripción y enlace.

Cada archivo incluye comentarios `{/* ... */}` que indican dónde reemplazar la información con tus datos reales. Las imágenes de ejemplo (`public/profile.svg` y `public/project-ejemplo.svg`) son archivos SVG en blanco para que los sustituyas por tus propios recursos.

## Dependencias de código abierto

- **Preact** (MIT): biblioteca de UI ligera para construir componentes reutilizables.
- **@preact/preset-vite** (MIT): plugin que integra Preact con Vite y habilita JSX y recarga en caliente.
- **Tailwind CSS** (MIT): framework de utilidades CSS para estilizar rápidamente la interfaz.
- **PostCSS** (MIT) y **Autoprefixer** (MIT): procesan el CSS y añaden prefijos para compatibilidad entre navegadores.
- **Vite** (MIT): herramienta de desarrollo y empaquetado que genera la versión estática del sitio.

Todas estas librerías son de código abierto, lo que evita restricciones de licencia y facilita el mantenimiento a largo plazo.
