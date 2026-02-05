# Building your site

Learn how to build your documentation site for deployment.

## Overview

MkDocs compiles your Markdown files into a static HTML website. The build process:

1. Converts Markdown to HTML
2. Applies the Material theme
3. Generates navigation
4. Optimizes assets
5. Creates a `site/` folder with the complete website

## Building basics

### Build command

From your project root, run:

```bash
mkdocs build
```

Output:
```
INFO    -  Cleaning site directory
INFO    -  Building documentation to directory: site
INFO    -  Documentation built in 0.82 seconds
```

The `site/` folder now contains your complete website.

### Clean build

Force a fresh build:

```bash
mkdocs build --clean
```

This removes the existing `site/` folder before rebuilding.

## Build output

After building, your project structure includes:

```
project-root/
├── docs/              # Source files
├── mkdocs.yml        # Configuration
└── site/             # Generated website ← Upload this
    ├── index.html
    ├── en/
    ├── es/
    ├── assets/
    ├── javascripts/
    ├── stylesheets/
    └── sitemap.xml
```

!!! info
    Upload only the `site/` folder to your web server.

## Preview before building

Always preview before building for deployment:

```bash
mkdocs serve
```

Check:
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Links work (no 404 errors)
- [ ] Both languages work
- [ ] Navigation is correct

## Strict mode

Build with strict mode to catch errors:

```bash
mkdocs build --strict
```

This fails the build if:
- Links point to non-existent pages
- Images can't be found
- Plugins report warnings

!!! tip
    Use strict mode in CI/CD pipelines for quality assurance.

## Common build issues

### Missing images

**Error**: 

`WARNING - Doc file 'page.md' contains a link './image.png', but the file is not in the docs directory`

**Solution**: 

- Check image path is correct
- Ensure image exists in `docs_assets/`
- Use correct relative path

### Broken links

**Error**: 

`WARNING - Doc file 'page.md' contains a link './other.md' which does not exist in the docs directory`

**Solution**:

- Verify linked page exists
- Check spelling and case sensitivity
- Ensure `.en.md` or `.es.md` extension is correct

### Plugin errors

**Error**: 

`ERROR - Config value: 'plugins'. Error: The "somePlugin" plugin is not installed`

**Solution**:

```bash
pip install mkdocs-somePlugin
```

## Next steps

- [Troubleshooting](../Reference/Troubleshooting.md) - Solve common build issues
