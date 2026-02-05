# Construir y Desplegar con Mike

Aprende cómo gestionar despliegues de documentación versionada usando Mike.

## Descripción general

Mike es una herramienta de gestión de versiones para MkDocs que te permite mantener múltiples versiones de tu documentación. Permite:

1. Construir documentación para versiones específicas
2. Gestionar múltiples versiones simultáneamente
3. Almacenar versiones en la rama `gh-pages`
4. Hacer commit automático de cambios (pero nunca push)
5. Proporcionar selección de versiones para usuarios

!!! important "Almacenamiento en Rama Git"
    Todas las versiones desplegadas se almacenan en la rama **`gh-pages`** de tu repositorio. Mike crea y gestiona esta rama automáticamente.

!!! warning "Push Manual Requerido"
    Mike hace commit de los cambios en la rama `gh-pages` pero **nunca hace push automáticamente**. Debes hacer push manualmente para publicar tus cambios.

## Instalación

Instala Mike usando pip:

```bash
pip install mike
```

## Desplegar Nuevas Versiones

### Desplegar una nueva versión

Para desplegar una nueva versión de tu documentación:

```bash
mike deploy <version> <alias>
```

**Ejemplo**: Desplegar versión 1.0.0 como latest:

```bash
mike deploy 1.0.0 latest
```

Este comando:

- Construye tu documentación
- Crea/actualiza la versión 1.0.0 en la rama `gh-pages`
- Asigna el alias "latest" a esta versión
- Hace commit de los cambios (pero no hace push)

### Desplegar y actualizar versión predeterminada

Para desplegar y establecer como la versión predeterminada (mostrada cuando los usuarios visitan por primera vez):

```bash
mike deploy <version> <alias> --update-aliases
```

**Ejemplo**:

```bash
mike deploy 2.0.0 latest --update-aliases
```

## Actualizar Versiones Existentes

### Actualizar contenido de versión

Para reconstruir y actualizar una versión existente:

```bash
mike deploy <version> --update-aliases
```

**Ejemplo**: 

Actualizar versión 1.0.0:

```bash
mike deploy 1.0.0 --update-aliases
```

!!! tip
    Usa `--update-aliases` para mantener los aliases existentes intactos al actualizar.

### Cambiar aliases de versión

Reasignar aliases a diferentes versiones:

```bash
mike alias <version> <nuevo-alias>
```

**Ejemplo**: 

Mover alias "latest" a versión 2.0.0:

```bash
mike alias 2.0.0 latest
```

## Eliminar Versiones

### Eliminar una versión específica

Para eliminar una versión del despliegue:

```bash
mike delete <version>
```

**Ejemplo**: Eliminar versión 0.9.0:

```bash
mike delete 0.9.0
```

### Eliminar múltiples versiones

Eliminar varias versiones a la vez:

```bash
mike delete <version1> <version2> <version3>
```

**Ejemplo**:

```bash
mike delete 0.8.0 0.9.0 1.0.0-beta
```

!!! warning
    La eliminación es inmediata y remueve la versión de la rama `gh-pages`. Siempre verifica antes de eliminar.

## Gestionar Versiones

### Listar todas las versiones

Ver todas las versiones desplegadas:

```bash
mike list
```

Ejemplo de salida:

```
1.0.0 [latest]
1.1.0
2.0.0 [stable]
```

### Establecer versión predeterminada

Establecer qué versión ven los usuarios por defecto:

```bash
mike set-default <version>
```

**Ejemplo**: Establecer versión 2.0.0 como predeterminada:

```bash
mike set-default 2.0.0
```

## Entender la Rama gh-pages

Mike almacena todas las versiones en la rama **`gh-pages`** de tu repositorio en archivos html que será la web de la documentación con su respectivo selector de versiones:

```
rama gh-pages
├── 1.0.0/
│   ├── index.html
│   ├── assets/
│   └── ...
├── 1.1.0/
│   ├── index.html
│   ├── assets/
│   └── ...
├── 2.0.0/
│   ├── index.html
│   ├── assets/
│   └── ...
└── versions.json    # Metadatos de versión
```

## Problemas Comunes

### Mike no encontrado

**Error**: 

`mike: command not found`

**Solución**:

```bash
pip install mike
```

### Permiso denegado en gh-pages

**Error**: 

`Permission denied when pushing to gh-pages`

**Solución**:

- Asegúrate de tener acceso de escritura al repositorio
- Verifica tus credenciales de Git

### Las versiones no se muestran

**Problema**: 

Las versiones desplegadas no aparecen en el sitio

**Solución**:

1. Verifica que hiciste push de la rama `gh-pages`:
   ```bash
   git push origin gh-pages
   ```
2. Verifica que GitHub Pages esté habilitado en la configuración del repositorio
3. Asegúrate de que GitHub Pages esté configurado para usar la rama `gh-pages`

## Siguientes pasos

- [Solución de problemas](../Reference/Troubleshooting.md) - Resuelve problemas comunes de despliegue
