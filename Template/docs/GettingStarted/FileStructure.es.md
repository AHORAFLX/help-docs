# Estructura del Proyecto

Esta guía explica cómo estructurar y mantener correctamente un proyecto de documentación MkDocs Material siguiendo nuestros estándares organizativos.

## Estructura Principal de Carpetas

Tu proyecto MkDocs debe seguir esta estructura:

```
project-root/
├── docs/                     # Carpeta principal de documentación
│   ├── index.en.md           # Archivos markdown en inglés
│   ├── index.es.md           # Archivos markdown en español
│   ├── docs_assets/          # Recursos para la documentación
│   │   ├── images/           # Archivos de imágenes
│   │   ├── fonts/            # Archivos de fuentes
│   │   └── fh-structural/    # ⚠️ NO MODIFICAR - Recursos estructurales
│   ├── javascripts/          # Archivos JavaScript
│   │   ├── cultures/         # Archivos de traducción
│   │   ├── fh-structural/    # ⚠️ NO MODIFICAR - Componentes JS principales
│   │   └── *.js              # Tus archivos JavaScript personalizados
│   └── stylesheets/          # Archivos CSS
│       ├── custom-colors.css # ✅ Edita este archivo para personalizar colores
│       ├── fh-structural/    # ⚠️ NO MODIFICAR - Estilos principales
│       └── *.css             # Tus archivos CSS personalizados
├── overrides/                 # ⚠️ NO MODIFICAR - Plantillas personalizadas
│   ├── 404.html
│   ├── main.html
│   └── partials/
├── mkdocs.yml                # Archivo de configuración principal
└── site/                     # ⚠️ NO SUBIR - Sitio generado auto-generado
```

## Archivos de Documentación (.md)

### Ubicación

Todos los archivos `.md` deben colocarse dentro de la carpeta `docs/` o sus subdirectorios. Estos son los únicos archivos que aparecerán en el menú de navegación.

!!! info "Carpetas Ocultas"
    Carpetas como `javascripts/`, `stylesheets/` y `docs_assets/` no aparecerán en la navegación porque no contienen archivos `.md`, pero son **esenciales** que se encuentren ahí.

### Traducciones

Para traducir estos archivos basta con crear tanto un archivo `.es.md` que contendrá la versión en español como uno `.en.md` que contendrá la inglesa.

!!! warning "Ubicación"
    El archivo `.es.md` y el `en.md` deben encontrarse en la misma carpeta, no se debe crear una carpeta por idioma.

## Personalización

### Colores

Para personalizar los colores en tu documentación debes editar e archivo `docs/stylesheets/custom-colors.css`.

Se encuentra dividido en dos secciones (**colores básicos** y **colores avanzados**), los segundos normalmente no se deberán modificar ya que usan las variables de contexto de los básicos, pero en el caso de que por algún color escogido se empicen a ver mal se puede modificar.

### Archivos Estructurales

Las siguientes carpetas contienen archivos estructurales principales que mantienen la consistencia entre todos nuestros proyectos de documentación y no deben ser modificados:

- `docs/stylesheets/fh-structural/`
- `docs/javascripts/fh-structural/`
- `docs/docs_assets/fh-structural/`
- `overrides/`

**Si necesitas modificar funcionalidad**:

- Crea un nuevo archivo personalizado fuera de las carpetas `fh-structural`
- Sobrescribe comportamientos específicos en tus archivos personalizados
- Nunca edites directamente archivos dentro de las carpetas `fh-structural` ya que si actualizas la plantilla se pueden sobreescribir

### Estilos o JS Personalizados

1. Crea tu archivo CSS o JS personalizado en `docs/stylesheets/` o `docs/javascripts/` respectivamente
2. Agrégalo a `mkdocs.yml` en la sección `extra_css` o `extra_javascript`
3. Agrégalo **después** del comentario: `# Your project styles/js files here ↓`

**Ejemplos**:

=== "Styles"
    ```yaml
    extra_css:
    # Basic styles for every documentation project
    - stylesheets/fh-structural/base.css
    # ... otros archivos básicos ...
    
    # Your project styles files here ↓
    - stylesheets/my-custom-styles.css  # ← Agrega tus archivos aquí
    ```

=== "Javascripts"
    ```yaml
    extra_javascript:
    # Basic styles for every documentation project
    - javascripts/fh-structural/base.css
    # ... otros archivos básicos ...
    
    # Your project js files here ↓
    - javascripts/my-custom-js.js  # ← Agrega tus archivos aquí
    ```

### Traducciones en ficheros JS

Para esta traducciones existe la función translate a la que tan solo se le debe pasar la clave a traducir y agregar sus respectivas traducciones en `docs/javascripts/cultures/en.js` y `docs/javascripts/cultures/es.js`.

=== "tu_fichero.js"
    ```js
    const mi_mensaje = `Juanjo ${translate('mi_clave')}`;
    alert(mi_mensaje);
    ```

=== "cultures/es.js"
    ```js
    FH_CULTURES.en = {
        // FH Structural JS Translations
        copied: "Copied to clipboard",
        // Más traucciones de funciones básicas...

        // Your JS translations here ↓
        mi_clave: "My translation" # ← Agrega tu traduccion en inglés aquí
    }
    ```

=== "cultures/en.js"
    ```js
    FH_CULTURES.es = {
        // FH Structural JS Translations
        copied: "Copiado en el portapapeles",
        // Más traucciones de funciones básicas...

        // Your JS translations here ↓
        mi_clave: "Mi traducción" # ← Agrega tu traduccion en español aquí
    }
    ```

!!! info "Categorías"
    No lo organizamos por categorías ya que la ayuda no debería contener tantas traducciones como flexygo u otras aplicaciones.

## Siguientes pasos

Ahora que entiendes la estructura del proyecto:

1. **Comienza a escribir** - Aprende [Markdown básico](../Components/BasicMarkdown.md) para crear tu primer contenido
2. **Añade funcionalidades avanzadas** - Explora [Markdown avanzado](../Components/AdvancedMarkdown.md) para pestañas, admoniciones y diagramas
3. **Personaliza la apariencia** - Revisa [Componentes personalizados](../Components/CustomComponents.md) para elementos interactivos

### Traducciones de categorías

Las categorías, al no dividirse por carpetas según idioma, no se traducen automaticamente. Por ello para agregar traducciones hay que añadirlas a la sección **nav_translations** de mkdocs.yml y agregarlo tal que así:

!!! warning "Key name"
    The key of the category to translate will be the exact same as the folder name, if it include spaces it must contain them

```yaml
 - i18n:
      docs_structure: suffix
      languages:
        - locale: en
          default: true
          name: English
          build: true
        - locale: es
          name: Español
          build: true
          # Here goes every menu translation for Spanish ↓
          nav_translations:
            My category: Mi categoría
            Other category: Otra categoría
            ...
```