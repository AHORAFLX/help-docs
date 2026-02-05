# Estructura visual

Hay tres secciones de la ayuda que se generan automáticamente, la [barra de navegación](#1-barra-de-navegacion), el [bloque de contenido](#2-bloque-de-contenido) y el [menú de subnavegación](#3-menu-de-subnavegacion)

![Docs Sections](../docs_assets/delete/docs-sections.png)

## 1 - Barra de navegación

La barra de navegación se genera automáticamente a partir de los ficheros markdown y las carpetas que contengan algún .md (estas sirven de agrupación).

En la imagen se observa que, por cada opción del menú, hay dos archivos (uno por idioma), pero el nombre visible en la navegación lo define el primer título de cada archivo. Así, "index.es.md" aparece como "Introduction to Flexygo".

![Navigation bar](../docs_assets/delete/navigation-bar.png)

### Ordenación de la navegación

Por defecto, los elementos de navegación se ordenan **alfabéticamente** según los nombres de archivos y carpetas. MkDocs escanea automáticamente la carpeta `docs/` y organiza todo alfabéticamente.

Si quieres controlar el orden exacto de las páginas y secciones en la barra lateral, puedes definir una estructura `nav` personalizada en `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - GettingStarted:
    - QuickStart: GettingStarted/QuickStart.md
    - VisualStructure: GettingStarted/VisualStructure.md
    - FileStructure: GettingStarted/FileStructure.md
  - Components:
    - BasicMarkdown: Components/BasicMarkdown.md
    - AdvancedMarkdown: Components/AdvancedMarkdown.md
  - Deployment:
    - BuildingYourSite: Deployment/BuildingYourSite.md
```

**Elegir entre ordenación automática y manual:**

- **Automática (sin sección `nav`)**: Simple de mantener, las páginas aparecen alfabéticamente. Mejor para proyectos pequeños o cuando el orden alfabético funciona bien.
- **Manual (sección `nav` definida)**: Control total sobre el orden y la jerarquía. Mejor para proyectos grandes o cuando necesitas una ruta de aprendizaje específica.

!!! info
    Puedes mezclar ambos enfoques: definir `nav` para algunas secciones y dejar que otras se generen automáticamente.

## 2 - Bloque de contenido

Este bloque muestra el contenido del archivo Markdown en HTML. Además, es posible usar código HTML dentro del Markdown si es necesario (aunque se recomienda moderación para mantener la coherencia).

Aquí aprovechamos para explicar la extensión de los archivos:  
Los archivos **.es.md** contienen la versión en español y los **.en.md** la versión en inglés. Para añadir traducciones a una sección, basta con crear ambos archivos con el mismo nombre base.

![Navigation bar](../docs_assets/delete/main-block.png)

## 3 - Menú de subnavegación

Este menú permite navegar directamente a los apartados internos de la página en la que te encuentras, identificados por títulos de segundo o tercer nivel (## o ###, estos últimos se anidan debajo de los primeros).

Aunque es menos útil en páginas cortas, facilita mucho la lectura en documentos extensos.

!!! warning
    Ten en cuenta que, por configuración, solo se muestran aquí los títulos de nivel ## y ###. Los de cuarto nivel (####) o superior no aparecerán en este menú.

![Menú de subnavegación](../docs_assets/delete/right-bar.png)

## Siguientes pasos

Ahora que entiendes la estructura visual:

1. **Aprende la organización de archivos** - Lee [Organización general](FileStructure.md) para entender la estructura del proyecto
2. **Comienza a escribir** - Revisa [Markdown básico](../Components/BasicMarkdown.md) para escribir tu primera página
3. **Añade funcionalidades avanzadas** - Explora [Markdown avanzado](../Components/AdvancedMarkdown.md) para pestañas, admoniciones y diagramas