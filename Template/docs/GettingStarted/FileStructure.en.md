# Project Structure

This guide explains how to properly structure and maintain an MkDocs Material documentation project following our organizational standards.

## Main Folder Structure

Your MkDocs project must follow this structure:

```
project-root/
├── docs/                     # Main documentation folder
│   ├── index.en.md           # Markdown files in English
│   ├── index.es.md           # Markdown files in Spanish
│   ├── docs_assets/          # Documentation resources
│   │   ├── images/           # Image files
│   │   ├── fonts/            # Font files
│   │   └── fh-structural/    # ⚠️ DO NOT MODIFY - Structural resources
│   ├── javascripts/          # JavaScript files
│   │   ├── cultures/         # Translation files
│   │   ├── fh-structural/    # ⚠️ DO NOT MODIFY - Core JS components
│   │   └── *.js              # Your custom JavaScript files
│   └── stylesheets/          # CSS files
│       ├── custom-colors.css # ✅ Edit this file to customize colors
│       ├── fh-structural/    # ⚠️ DO NOT MODIFY - Core styles
│       └── *.css             # Your custom CSS files
├── overrides/                 # ⚠️ DO NOT MODIFY - Custom templates
│   ├── 404.html
│   ├── main.html
│   └── partials/
├── mkdocs.yml                # Main configuration file
└── site/                     # ⚠️ DO NOT UPLOAD - Auto-generated site output
```

## Documentation Files (.md)

### Location

All `.md` files must be placed inside the `docs/` folder or its subdirectories. These are the only files that will appear in the navigation menu.

!!! info "Hidden folders"
    Folders like `javascripts/`, `stylesheets/`, and `docs_assets/` will not appear in the navigation because they do not contain `.md` files, but it is **essential** that they remain there.

### Translations

To translate these files, simply create both an `.es.md` file containing the Spanish version and an `.en.md` file containing the English version.

!!! warning "Location"
    The `.es.md` file and the `.en.md` file must be in the same folder. Do not create one folder per language.

## Customization

### Colors

To customize the colors in your documentation, you must edit the file `docs/stylesheets/custom-colors.css`.

It is divided into two sections (**basic colors** and **advanced colors**). The advanced ones usually should not be modified, since they use the context variables from the basic ones, but if certain chosen colors start looking wrong, they can be adjusted.

### Structural Files

The following folders contain the main structural files that keep consistency across all our documentation projects and must not be modified:

* `docs/stylesheets/fh-structural/`
* `docs/javascripts/fh-structural/`
* `docs/docs_assets/fh-structural/`
* `overrides/`

**If you need to change functionality**:

* Create a new custom file outside the `fh-structural` folders
* Override specific behaviors in your custom files
* Never edit files directly inside the `fh-structural` folders, because if you update the template they may be overwritten

### Custom Styles or JS

1. Create your custom CSS or JS file in `docs/stylesheets/` or `docs/javascripts/` respectively
2. Add it to `mkdocs.yml` under the `extra_css` or `extra_javascript` section
3. Add it **after** the comment: `# Your project styles/js files here ↓`

**Examples**:

=== "Styles"
    ```yaml
    extra_css:
    # Basic styles for every documentation project
    - stylesheets/fh-structural/base.css
    # ... other basic files ...
    # Your project styles files here ↓
    - stylesheets/my-custom-styles.css  # ← Add your files here
    ```

=== "Javascripts"
    ```yaml
    extra_javascript:
    # Basic styles for every documentation project
    - javascripts/fh-structural/base.css
    # ... other basic files ...

    # Your project js files here ↓
    - javascripts/my-custom-js.js  # ← Add your JS files here
    ```

### Translations in JS Files

For these translations, there is a `translate` function. You only need to pass the translation key and add the corresponding translations in `docs/javascripts/cultures/en.js` and `docs/javascripts/cultures/es.js`.

=== "your_file.js"
    ```js
    const my_message = `Juanjo ${translate('my_key')}`;
    alert(my_message);
    ```

=== "cultures/es.js"
    ```js
    FH_CULTURES.en = {
        // FH Structural JS Translations
        copied: "Copied to clipboard",
        // More basic function translations...
        // Your JS translations here ↓
        my_key: "My translation" # ← Add your English translation here
    }
    ```

=== "cultures/en.js"
    ```js
    FH_CULTURES.es = {
        // FH Structural JS Translations
        copied: "Copiado en el portapapeles",
        // More basic function translations...


        // Your JS translations here ↓
        my_key: "Mi traducción" # ← Add your Spanish translation here
    }
    ```

!!! info "Categories"
    We don’t organize these by categories because the help section should not have as many translations as Flexygo or other applications
## Next steps

Now that you understand the project structure:

1. **Start writing** - Learn [Basic markdown](../Components/BasicMarkdown.md) to create your first content
2. **Add advanced features** - Explore [Advanced markdown](../Components/AdvancedMarkdown.md) for tabs, admonitions, and diagrams
3. **Customize appearance** - Check [Custom components](../Components/CustomComponents.md) for interactive elements

### Category translations

Categories, as they are not divided by language folders, are not automatically translated. To add translations, you must add them to the **nav_translations** section in mkdocs.yml like this:

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