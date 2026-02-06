# Construir y Desplegar con Mike

Aprende cómo gestionar despliegues de documentación versionada usando Mike.

## Descripción general

Mike es la herramienta de gestión de versiones que nos generará la página de documentación, toda en HTML para que sea directamente esa rama la que subir al servido, dentro de la rama `gh-pages`.

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

## Desplegar una nueva versión

Para desplegar una nueva versión de tu documentación:

```bash
mike deploy --update-aliases <version> latest
mike set-default <version>
```

**Ejemplo**: Desplegar versión 1.0 como latest:

```bash
mike deploy --update-aliases 1.0 latest
mike set-default 1.0
```

- El primer comando crea la nueva versión y asigna el alias "latest" para identificarla como la versión actual
- El segundo comando la establece como predeterminada, asegurando que los usuarios vean esta versión al visitar la URL base

## Actualizar versiones existentes

Para actualizar una versión existente:

```bash
mike deploy --update <version>
```

**Ejemplo**: 

Actualizar versión 1.0:

```bash
mike deploy --update 1.0
```

## Eliminar Versiones

### Eliminar una versión específica

Para eliminar una versión del despliegue:

```bash
mike delete <version>
```

**Ejemplo**: 

Eliminar versión 1.2:

```bash
mike delete 1.2
```

### Eliminar múltiples versiones

Eliminar varias versiones a la vez:

```bash
mike delete <version1> <version2> <version3>
```

**Ejemplo**:

Eliminar versiones 1.2, 1.3 y 1.4

```bash
mike delete 1.2 1.3 1.4
```

## Listar todas las versiones

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

## Entender la Rama gh-pages

Mike almacena todas las versiones en la rama **`gh-pages`** de tu repositorio como archivos html que desplegarán el sitio web de documentación con su selector de versiones ya implementado:

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
