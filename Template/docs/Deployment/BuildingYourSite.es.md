# Construir tu sitio

Aprende cómo construir tu sitio de documentación para despliegue.

## Descripción general

MkDocs compila tus archivos Markdown en un sitio web HTML estático. El proceso de construcción:

1. Convierte Markdown a HTML
2. Aplica el tema Material
3. Genera navegación
4. Optimiza assets
5. Crea una carpeta `site/` con el sitio web completo

## Fundamentos de construcción

### Comando de construcción

Desde la raíz de tu proyecto, ejecuta:

```bash
mkdocs build
```

Salida:
```
INFO    -  Cleaning site directory
INFO    -  Building documentation to directory: site
INFO    -  Documentation built in 0.82 seconds
```

La carpeta `site/` ahora contiene tu sitio web completo.

### Construcción limpia

Fuerza una construcción fresca:

```bash
mkdocs build --clean
```

Esto elimina la carpeta `site/` existente antes de reconstruir.

## Salida de construcción

Después de construir, tu estructura de proyecto incluye:

```
project-root/
├── docs/              # Archivos fuente
├── mkdocs.yml        # Configuración
└── site/             # Sitio web generado ← Sube esto
    ├── index.html
    ├── en/
    ├── es/
    ├── assets/
    ├── javascripts/
    ├── stylesheets/
    └── sitemap.xml
```

!!! info
    Sube solo la carpeta `site/` a tu servidor web.

## Previsualizar antes de construir

Siempre previsualiza antes de construir para despliegue:

```bash
mkdocs serve
```

Verifica:
- [ ] Todas las páginas cargan correctamente
- [ ] Las imágenes se muestran correctamente
- [ ] Los enlaces funcionan (sin errores 404)
- [ ] Ambos idiomas funcionan
- [ ] La navegación es correcta

## Modo estricto

Construye con modo estricto para detectar errores:

```bash
mkdocs build --strict
```

Esto falla la construcción si:
- Los enlaces apuntan a páginas inexistentes
- No se pueden encontrar imágenes
- Los plugins reportan advertencias

!!! tip
    Usa modo estricto en pipelines CI/CD para aseguramiento de calidad.

## Problemas comunes de construcción

### Imágenes faltantes

**Error**: 

`WARNING - Doc file 'page.md' contains a link './image.png', but the file is not in the docs directory`

**Solución**: 

- Verifica que la ruta de la imagen sea correcta
- Asegúrate de que la imagen existe en `docs_assets/`
- Usa la ruta relativa correcta

### Enlaces rotos

**Error**: 

`WARNING - Doc file 'page.md' contains a link './other.md' which does not exist in the docs directory`

**Solución**:

- Verifica que la página enlazada existe
- Verifica ortografía y sensibilidad a mayúsculas
- Asegúrate de que la extensión `.en.md` o `.es.md` sea correcta

### Errores de plugin

**Error**: 

`ERROR - Config value: 'plugins'. Error: The "somePlugin" plugin is not installed`

**Solución**:

```bash
pip install mkdocs-somePlugin
```

## Siguientes pasos

- [Solución de problemas](../Reference/Troubleshooting.md) - Resuelve problemas comunes de construcción
