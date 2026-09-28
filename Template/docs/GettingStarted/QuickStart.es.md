# Inicio rápido

Esta guía cubre los pasos básicos para configurar y previsualizar el sitio de documentación.

## Paso 1: Verificar instalación de Python

Comprueba si Python está instalado:

=== "Windows"
    ```powershell
    python --version
    ```
    !!! warning "Al instalar"
        Si Python no está instalado, descárgalo desde [python.org](https://www.python.org/downloads/) y asegúrate de marcar **Add Python to PATH** durante la instalación.

=== "macOS"
    ```bash
    python3 --version
    ```
    
    Si no está instalado, instala usando Homebrew:
    ```bash
    brew install python3
    ```

=== "Linux"
    ```bash
    python3 --version
    ```
    
    Si no está instalado:
    ```bash
    sudo apt update
    sudo apt install python3 python3-pip
    ```

## Paso 2: Descargar la plantilla

Descarga la plantilla del proyecto:

<button class="button" onclick="downloadTemplateZip()">Descargar ZIP</button>

Extrae el archivo ZIP en una ubicación donde quieras trabajar en tu documentación (ej: `C:\Proyectos\MisDocs` o `~/Proyectos/MisDocs`).

## Paso 3: Instalar MkDocs

Abre una terminal/símbolo del sistema en la carpeta de la plantilla e instala MkDocs con todas las dependencias requeridas:

```bash
pip install -r requirements.txt
```

Esto instalará MkDocs y todos los plugins necesarios con las versiones correctas especificadas en el archivo `requirements.txt`.

## Paso 4: Navegar a tu proyecto

En la terminal, ve a la carpeta de tu plantilla extraída:

```bash
cd ruta/a/tu/plantilla
```

Por ejemplo:
```bash
cd C:\Proyectos\MisDocs\Template
```

## Paso 5: Iniciar previsualización

Ejecuta el servidor de desarrollo:

```bash
mkdocs serve
```

Deberías ver una salida como:
```
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  Documentation built in 0.52 seconds
INFO    -  [12:34:56] Serving on http://127.0.0.1:8000/
```

!!! warning "Si esto no funciona"
    Si al ejecutar este comando te aparece un **error** revisa **[problemas comunes](#problemas-comunes)**.

## Paso 6: Ver tu sitio

Abre tu navegador y ve a:

```
http://127.0.0.1:8000/
```

¡Deberías ver la página de inicio de la documentación! El sitio se recargará automáticamente cada vez que guardes cambios en cualquier archivo.

## Paso 7: Edita lo que quieras

1. Abre el archivo `docs/index.es.md` o crea un nuevo archivo `.es.md` en una carpeta dentro de `docs`
2. Modifica lo que queiras en él
3. Guarda el archivo
4. ¡Observa cómo tu navegador se actualiza automáticamente con el cambio!

## Siguientes pasos

Ahora que todo funciona:

1. **Entiende la navegación** - Aprende sobre [Configuración de navegación](VisualStructure.md) para ver cómo se generan los menús
2. **Explora la estructura de archivos** - Revisa [Organización general](FileStructure.md) para la estructura de carpetas y convenciones
3. **Comienza a escribir** - Lee [Markdown básico](../Components/BasicMarkdown.md) para crear tu primer contenido

## Problemas comunes

### Comando no reconocido

Si te aparece el error **command not found** quiere decir o que no has hecho la instalación con <fh-copy>pip install -r requirements.txt</fh-copy> o que no tienes agregado el **path** de python. En cuyo caso deberás añadir el path de python en tu dispositivo o ejecutar los comandos de mkdocs precedidos de <fh-copy>python -m</fh-copy> tal que así:

```bash
python -m mkdocs serve
```

!!! warning "Al usar python-m"
    En el caso de que por cualquier razón decidas no agregar el path de python debes saber que tendrás que añadir este prefijo en cualquier otro comando pythion, como bien lo es el uso del plugin mike.

### ¿Puerto ya en uso o socket no permitido?

Si te da cualquiera de estos dos errores deberas añadir el puerto en el que quieres ejecutarlo, normalmente con ejecutar el comando tal que así deberías solucionarse:

```bash
mkdocs serve -a 127.0.0.1:8001
```

### ¿Errores de módulo no encontrado?

Asegúrate de haber instalado todas las dependencias:
```bash
pip install -r requirements.txt
```

En el caso de que no exista en tu proyecto por cualquier razón crealo con el siguiente contenido y vuelve a ejecutar el comando de arriba.

```html { .no-language }
mkdocs==1.6.1
mkdocs-material==9.6.14
mkdocs-glightbox==0.5.2
mkdocs-static-i18n==1.3.0
mkdocs-get-deps==0.2.0
mkdocs-material-extensions==1.3.1
```

### ¿Los cambios no se muestran?

Prueba con el flag clean:
```bash
mkdocs serve --clean
```