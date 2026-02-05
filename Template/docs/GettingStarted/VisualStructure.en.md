# Visual Structure

There are three sections of the help that are automatically generated: the [navigation bar](#1-navigation-bar), the [content block](#2-content-block), and the [sub-navigation menu](#3-sub-navigation-menu)

![Docs Sections](../docs_assets/delete/docs-sections.png)

## 1 - Navigation bar

The navigation bar is automatically generated from the markdown files and folders that contain any .md file (these serve as grouping).

In the image, you can see that for each menu option, there are two files (one per language), but the visible name in the navigation is defined by the first title of each file. Thus, "index.es.md" appears as "Introduction to Flexygo".

![Navigation bar](../docs_assets/delete/navigation-bar.png)

### Navigation ordering

By default, navigation items are ordered **alphabetically** based on file and folder names. MkDocs automatically scans the `docs/` folder and organizes everything alphabetically.

If you want to control the exact order of pages and sections in the sidebar, you can define a custom `nav` structure in `mkdocs.yml`:

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

**Choosing between automatic and manual ordering:**

- **Automatic (no `nav` section)**: Simple to maintain, pages appear alphabetically. Best for small projects or when alphabetical order works well.
- **Manual (`nav` section defined)**: Full control over order and hierarchy. Best for larger projects or when you need a specific learning path.

!!! info
    You can mix both approaches: define `nav` for some sections and let others be auto-generated.

## 2 - Content block

This block displays the content of the Markdown file in HTML. Additionally, it is possible to use HTML code within Markdown if necessary (although moderation is recommended to maintain coherence).

Here we take the opportunity to explain the file extensions:  
The **.es.md** files contain the Spanish version and the **.en.md** files contain the English version. To add translations to a section, simply create both files with the same base name.

![Navigation bar](../docs_assets/delete/main-block.png)

## 3 - Sub-navigation menu

This menu allows you to navigate directly to the internal sections of the page you are on, identified by second or third level headings (## or ###, the latter are nested below the former).

Although it is less useful on short pages, it greatly facilitates reading on extensive documents.

!!! warning
    Keep in mind that, by configuration, only level ## and ### headings are shown here. Fourth level headings (####) or higher will not appear in this menu.

![Sub-navigation menu](../docs_assets/delete/right-bar.png)

## Next steps

Now that you understand the visual structure:

1. **Learn file organization** - Read [File organization](FileStructure.md) to understand the project structure
2. **Start writing** - Check [Basic markdown](../Components/BasicMarkdown.md) to write your first page
3. **Add advanced features** - Explore [Advanced markdown](../Components/AdvancedMarkdown.md) for tabs, admonitions, and diagrams
