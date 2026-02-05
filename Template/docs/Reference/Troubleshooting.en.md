# Troubleshooting

Common issues and their solutions when working with this MkDocs template.

## Installation issues

### Python not found

**Error**: 

`python: command not found` or `mkdocs: command not found`

**Solution**:

- Install Python from [python.org](https://www.python.org/downloads/)
- Ensure "Add Python to PATH" is checked during installation
- Restart terminal after installation

### Pip permission errors

**Error**: 

`ERROR: Could not install packages due to an EnvironmentError: [Errno 13] Permission denied`

**Solution**:

- Windows: Run terminal as Administrator
- macOS/Linux: Use `pip install --user` or `sudo pip install`

## Server issues

### Port already in use

**Error**: 

`OSError: [Errno 48] Address already in use`
 
**Solution**:

```bash
mkdocs serve -a 127.0.0.1:8001  # Use different port
```

### Changes not showing

**Error**: 

Modifications don't appear in the browser

**Solution**:

1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Use clean flag: `mkdocs serve --clean`
3. Clear browser cache

## Build errors

### Plugin not found

**Error**: 

`ERROR - Config value: 'plugins'. Error: The "plugin-name" plugin is not installed`

**Solution**:

```bash
pip install mkdocs-plugin-name
```

Common plugins:

```bash
pip install mkdocs-material mkdocs-i18n mkdocs-glightbox
```

### Module import errors

**Error**: 

`ModuleNotFoundError: No module named 'xyz'`

**Solution**:

```bash
pip install --upgrade mkdocs-material
pip install -r requirements.txt  # If available
```

## Content issues

### Images not displaying

**Error**: 

Images show broken image icon

**Solutions**:

1. Check image path is correct (case-sensitive)
2. Use relative paths: `../docs_assets/images/file.png`
3. Ensure image file exists in `docs_assets/`
4. Check file extension matches actual file

### Broken internal links

**Error**: 

Links lead to 404 pages

**Solutions**:

1. Use correct relative paths
2. Don't include `.md` extension in links
3. End folder links with `/`: `[Link](../Folder/Page/)`
4. Check spelling and case

### Language switcher not working

**Error**: 

Only one language shows or switching fails

**Solutions**:

1. Verify both `.en.md` and `.es.md` files exist
2. Check `mkdocs.yml` has both languages configured
3. Ensure both files have same base name
4. Clear browser cache

## Style issues

### Custom colors not applying

**Error**: 

Color changes don't appear

**Solutions**:

1. Edit `docs/stylesheets/custom-colors.css` (not fh-structural files)
2. Check CSS syntax (semicolons, colons)
3. Hard refresh browser
4. Verify file is linked in `mkdocs.yml`

### Custom CSS not loading

**Error**: 

Custom styles don't work

**Solution**: 

Verify `extra_css` in `mkdocs.yml`:
```yaml
extra_css:
  - stylesheets/custom-colors.css
  - stylesheets/your-custom-file.css  # Your file here
```

## Navigation issues

### Pages not appearing in navigation

**Error**: 

Created page doesn't show in sidebar

**Solutions**:

1. Ensure file has `.en.md` or `.es.md` extension
2. Check file is inside `docs/` folder
3. Add first heading (`# Title`) to file
4. Restart `mkdocs serve`

### Wrong page order

**Error**: 

Pages appear in wrong order

**Solution**: 

Navigation is alphabetical by default. To customize, add `nav` section to `mkdocs.yml`:
```yaml
nav:
  - Home: index.md
  - Getting Started:
    - QuickStart: GettingStarted/QuickStart.md
  - Guide: Guide/Overview.md
```

## Component issues

### Custom component not working

**Error**: 

`<fh-copy>` or other components don't function

**Solutions**:

1. Check JavaScript is loaded in `mkdocs.yml`
2. Open browser console (F12) for errors
3. Verify component syntax matches documentation
4. Ensure required attributes are provided

## Performance Issues

### Slow Build Times

**Error**: 

`mkdocs build` takes too long

**Solutions**:

1. Use `mkdocs serve` for development (faster)
2. Reduce number of large images
3. Optimize image sizes
4. Remove unused plugins from `mkdocs.yml`

### Large Site Size

**Error**: 

`site/` folder is very large

**Solutions**:

1. Compress images before adding
2. Use appropriate image formats (WebP, optimized PNG/JPG)
3. Remove unused assets from `docs_assets/`

## Getting More Help

If your issue isn't listed here:

1. Check the [MkDocs Documentation](https://www.mkdocs.org/)
2. Review [Material for MkDocs Docs](https://squidfunk.github.io/mkdocs-material/)
3. Search [GitHub Issues](https://github.com/squidfunk/mkdocs-material/issues)
4. Check browser console (F12) for JavaScript errors
5. Review terminal output for detailed error messages

## Useful Commands

```bash
# Check MkDocs version
mkdocs --version

# Check installed plugins
pip list | grep mkdocs

# Update all MkDocs packages
pip install --upgrade mkdocs-material mkdocs-i18n mkdocs-glightbox

# Validate configuration
mkdocs build --strict

# Clear Python cache
find . -type d -name __pycache__ -exec rm -r {} +
```

## Quick Fixes Checklist

When something breaks, try these in order:

1. [ ] Hard refresh browser (Ctrl+Shift+R)
2. [ ] Restart `mkdocs serve`
3. [ ] Check terminal for error messages
4. [ ] Verify file was saved
5. [ ] Run `mkdocs serve --clean`
6. [ ] Check file paths and spelling
7. [ ] Review recent changes (use Git)
8. [ ] Update dependencies: `pip install --upgrade mkdocs-material`

Most issues can be resolved by carefully reading error messages and checking file paths!
