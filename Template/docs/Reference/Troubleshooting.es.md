# Solución de problemas

Problemas comunes y sus soluciones al trabajar con esta plantilla de MkDocs.

## Problemas de instalación

### Python no encontrado

**Error**: 

`python: command not found` o `mkdocs: command not found`

**Solución**:

- Instala Python desde [python.org](https://www.python.org/downloads/)
- Asegúrate de marcar "Add Python to PATH" durante la instalación
- Reinicia la terminal después de la instalación

### Errores de permisos de Pip

**Error**: 

`ERROR: Could not install packages due to an EnvironmentError: [Errno 13] Permission denied`

**Solución**:

- Windows: Ejecuta terminal como Administrador
- macOS/Linux: Usa `pip install --user` o `sudo pip install`

## Problemas del servidor

### Puerto ya en uso

**Error**: 

`OSError: [Errno 48] Address already in use`

**Solución**:

```bash
mkdocs serve -a 127.0.0.1:8001  # Usa puerto diferente
```

### Los cambios no se muestran

**Error**: 

Las modificaciones no aparecen en el navegador

**Solución**:

1. Actualización forzada: Ctrl+Shift+R (Windows/Linux) o Cmd+Shift+R (Mac)
2. Usa flag clean: `mkdocs serve --clean`
3. Limpia caché del navegador

## Errores al iniciar

### Plugin no encontrado

**Error**: 

`ERROR - Config value: 'plugins'. Error: The "plugin-name" plugin is not installed`

**Solución**:

```bash
pip install mkdocs-plugin-name
```

Plugins comunes:

```bash
pip install mkdocs-material mkdocs-i18n mkdocs-glightbox
```

### Errores de importación de módulos

**Error**: 

`ModuleNotFoundError: No module named 'xyz'`

**Solución**:

```bash
pip install --upgrade mkdocs-material
pip install -r requirements.txt  # Si está disponible
```

## Problemas de contenido

### No se muestran las imágenes

**Error**: 

Las imágenes muestran icono de imagen rota

**Soluciones**:

1. Verifica que la ruta de imagen sea correcta (sensible a mayúsculas)
2. Usa rutas relativas: `../docs_assets/images/archivo.png`
3. Asegúrate de que el archivo de imagen existe en `docs_assets/`
4. Verifica que la extensión del archivo coincida con el archivo real

### Enlaces internos rotos

**Error**: 

Los enlaces llevan a páginas 404

**Soluciones**:

1. Usa rutas relativas correctas
2. No incluyas extensión `.md` en enlaces
3. Termina enlaces de carpeta con `/`: `[Enlace](../Carpeta/Pagina/)`
4. Verifica ortografía y mayúsculas

### Selector de idioma no funciona

**Error**: 

Solo un idioma se muestra o el cambio falla

**Soluciones**:

1. Verifica que ambos archivos `.en.md` y `.es.md` existan
2. Verifica que `mkdocs.yml` tenga ambos idiomas configurados
3. Asegúrate de que ambos archivos tengan el mismo nombre base
4. Limpia caché del navegador

## Problemas de estilo

### Colores personalizados no se aplican

**Error**: 

Los cambios de color no aparecen

**Soluciones**:

1. Edita `docs/stylesheets/custom-colors.css` (no archivos fh-structural)
2. Verifica sintaxis CSS (punto y coma, dos puntos)
3. Actualización forzada del navegador
4. Verifica que el archivo esté enlazado en `mkdocs.yml`

### CSS personalizado no carga

**Error**: 

Los estilos personalizados no funcionan

**Solución**: 

Verifica `extra_css` en `mkdocs.yml`:
```yaml
extra_css:
  - stylesheets/custom-colors.css
  - stylesheets/tu-archivo-personalizado.css  # Tu archivo aquí
```

## Problemas de navegación

### Páginas no aparecen en navegación

**Error**: 

La página creada no se muestra en la barra lateral

**Soluciones**:

1. Asegúrate de que el archivo tenga extensión `.en.md` o `.es.md`
2. Verifica que el archivo esté dentro de la carpeta `docs/`
3. Agrega primer encabezado (`# Título`) al archivo
4. Reinicia `mkdocs serve`

### Orden de página incorrecto

**Error**: 

Las páginas aparecen en orden incorrecto

**Solución**: 

La navegación es alfabética por defecto. Para personalizar, agrega sección `nav` a `mkdocs.yml`:
```yaml
nav:
  - Inicio: index.md
  - Primeros Pasos:
    - InicioRápido: GettingStarted/QuickStart.md
  - Guía: Guide/Overview.md
```

## Problemas de componentes

### Componente personalizado no funciona

**Error**: 

`<fh-copy>` u otros componentes no funcionan

**Soluciones**:

1. Verifica que JavaScript esté cargado en `mkdocs.yml`
2. Abre consola del navegador (F12) para errores
3. Verifica que la sintaxis del componente coincida con la documentación
4. Asegúrate de que se proporcionen atributos requeridos

## Problemas de rendimiento

### Tiempos de construcción lentos

**Error**: 

`mkdocs build` tarda demasiado

**Soluciones**:

1. Usa `mkdocs serve` para desarrollo (más rápido)
2. Reduce número de imágenes grandes
3. Optimiza tamaños de imagen
4. Elimina plugins no usados de `mkdocs.yml`

### Tamaño de sitio grande

**Error**: 

La carpeta `site/` es muy grande

**Soluciones**:

1. Comprime imágenes antes de agregar
2. Usa formatos de imagen apropiados (WebP, PNG/JPG optimizados)
3. Elimina assets no usados de `docs_assets/`

## Obtener más ayuda

Si tu problema no está listado aquí:

1. Consulta la [Documentación de MkDocs](https://www.mkdocs.org/)
2. Revisa [Docs de Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
3. Busca [GitHub Issues](https://github.com/squidfunk/mkdocs-material/issues)
4. Verifica consola del navegador (F12) para errores de JavaScript
5. Revisa salida de terminal para mensajes de error detallados

## Comandos útiles

```bash
# Verificar versión de MkDocs
mkdocs --version

# Verificar plugins instalados
pip list | grep mkdocs

# Actualizar todos los paquetes de MkDocs
pip install --upgrade mkdocs-material mkdocs-i18n mkdocs-glightbox

# Validar configuración
mkdocs build --strict

# Limpiar caché de Python
find . -type d -name __pycache__ -exec rm -r {} +
```

## Lista de verificación de soluciones rápidas

Cuando algo falle, prueba estos en orden:

1. [ ] Actualización forzada del navegador (Ctrl+Shift+R)
2. [ ] Reiniciar `mkdocs serve`
3. [ ] Verificar terminal para mensajes de error
4. [ ] Verificar que el archivo fue guardado
5. [ ] Ejecutar `mkdocs serve --clean`
6. [ ] Verificar rutas de archivo y ortografía
7. [ ] Revisar cambios recientes (usar Git)
8. [ ] Actualizar dependencias: `pip install --upgrade mkdocs-material`

¡La mayoría de problemas pueden resolverse leyendo cuidadosamente los mensajes de error y verificando rutas de archivo!
