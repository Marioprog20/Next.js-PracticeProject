# Next.js Dashboard Practice Project

Una plantilla/práctica de panel administrativo construida con Next.js (App Router), TypeScript y Tailwind CSS. Incluye ejemplos de gestión de clientes y facturas, componentes UI reutilizables, rutas de ejemplo y pequeñas utilidades para acelerar el desarrollo de una dashboard.

## ¿Por qué es útil?

- Demo completa de una dashboard con páginas para clientes, facturas y panel de control.
- Arquitectura basada en Next.js App Router (carpeta `app/`) y componentes organizados bajo `ui/`.
- Incluye ejemplos útiles: formularios de creación/edición (`app/.../create`, `app/.../[id]/edit`), tablas y paginación.
- Pensado para aprendizaje y como base para proyectos reales: autenticación, fetch de datos y seed de ejemplo.

## Características destacadas

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Componentes UI reutilizables en `ui/`
- Rutas de ejemplo: `dashboard`, `customers`, `invoices`
- Script de seed/demo en `app/seed/route.ts`

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- pnpm (lockfile presente)

## Requisitos previos

- Node.js 18+ (recomendado)
- pnpm (se recomienda por la presencia de `pnpm-lock.yaml`)

## Cómo empezar (PowerShell)

Abre PowerShell en la raíz del proyecto y ejecuta:

```powershell
# Instalar dependencias
pnpm install

# Levantar en modo desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Ejecutar la app compilada
pnpm start
```

Scripts detectados en `package.json`:

- `dev`: `next dev --turbopack`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint .`

Nota: si usas npm o yarn puedes adaptar los comandos, pero se recomienda usar `pnpm` para consistencia con el lockfile.

## Estructura relevante del proyecto

- `app/` – Rutas y páginas (App Router)
- `ui/` – Componentes de interfaz reutilizables (botones, tablas, layout)
- `lib/` – Acciones, datos y utilidades compartidas
- `public/` – Activos estáticos

Explora `app/dashboard`, `app/invoices` y `app/customers` para ver ejemplos de implementación.

## Datos de ejemplo / Seed

Hay una ruta de seed en `app/seed/route.ts` para poblar datos de ejemplo. Revisa el código antes de ejecutarla en entornos reales.

## Dónde pedir ayuda

- Abre un issue en el repositorio: `https://github.com/Marioprog20/Next.js-PracticeProject/issues`
- Revisa el código en `app/`, `ui/` y `lib/` para entender cómo están organizadas las piezas.

## Contribuir

Las contribuciones son bienvenidas. Buenas formas de colaborar:

- Abrir un issue proponiendo la mejora o bug.
- Enviar un Pull Request con cambios pequeños y descritos claramente.
## Mantenedores

- Repositorio: `Marioprog20/Next.js-PracticeProject`
- Rama principal: `main`

## Calidad y pasos siguientes (rápido)

- Lint: `pnpm lint` (script disponible). No hay tests automatizados en este repo por ahora.
- Sugerencia: agregar `CONTRIBUTING.md` y tests unitarios/integración como próximos pasos.

