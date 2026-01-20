# Estructura visual

Hay tres secciones de la ayuda que se generan automáticamente, la [barra de navegación](#1-barra-de-navegacion), el [bloque de contenido](#2-bloque-de-contenido) y el [menú de subnavegación](#3-menu-de-subnavegacion)

![Docs Sections](/docs_assets/delete/docs-sections.png)

## 1 - Barra de navegación

La barra de navegación se genera automáticamente a partir de los ficheros markdown y las carpetas que contengan algún .md (estas sirven de agrupación).

En la imagen se observa que, por cada opción del menú, hay dos archivos (uno por idioma), pero el nombre visible en la navegación lo define el primer título de cada archivo. Así, "index.es.md" aparece como "Introduction to Flexygo".

![Navigation bar](/docs_assets/delete/navigation-bar.png)

## 2 - Bloque de contenido

Este bloque muestra el contenido del archivo Markdown en HTML. Además, es posible usar código HTML dentro del Markdown si es necesario (aunque se recomienda moderación para mantener la coherencia).

Aquí aprovechamos para explicar la extensión de los archivos:  
Los archivos **.es.md** contienen la versión en español y los **.en.md** la versión en inglés. Para añadir traducciones a una sección, basta con crear ambos archivos con el mismo nombre base.

![Navigation bar](/docs_assets/delete/main-block.png)

## 3 - Menú de subnavegación

Este menú permite navegar directamente a los apartados internos de la página en la que te encuentras, identificados por títulos de segundo o tercer nivel (# o ##, estos últimos se anidan debajo de los primeros).

Aunque es menos útil en páginas cortas, facilita mucho la lectura en documentos extensos.  

Ten en cuenta que, por configuración, solo se muestran aquí los títulos de nivel # y ##. Los de cuarto nivel (##) o superior no aparecerán en este menú.
{ .fh-warning-card }

![Menú de subnavegación](/docs_assets/delete/right-bar.png)