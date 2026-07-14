# DT Growth Partners - Sitio Web Corporativo

Este repositorio contiene la web corporativa de **DT Growth Partners**, una consultora de crecimiento orientada a performance, desarrollo web y automatizaciones.

## Características

- **Sitio web corporativo** construido con React + TypeScript
- **Diseño responsive** con Tailwind CSS
- **Componentes reutilizables** usando shadcn/ui
- **Internacionalización** con soporte para ES/EN
- **Optimizado para SEO** y rendimiento

## Traducciones

El proyecto soporta i18n mediante un `LanguageContext` (ES/EN). Revisa `src/context/LanguageContext.tsx` para las claves y traducciones.

## Tecnologías

La aplicación usa las siguientes tecnologías:

- **Vite** - Build tool y servidor de desarrollo
- **React + TypeScript** - Framework frontend
- **Tailwind CSS** - Framework de estilos
- **shadcn/ui** - Librería de componentes
- **Node.js / npm** - Entorno de desarrollo

## Instalación y Desarrollo

### Prerrequisitos

- Node.js (>=16)
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview

# Linting
npm run lint
```

## Contacto

- **Empresa**: DT Growth Partners
- **Email**: info@dtgrowthpartners.com
- **Ubicación**: Cartagena, Colombia

## Notas

- El archivo `.gitignore` excluye `node_modules`, `dist` y logs
- El proyecto está configurado para ejecutarse en el puerto 8080 por defecto
