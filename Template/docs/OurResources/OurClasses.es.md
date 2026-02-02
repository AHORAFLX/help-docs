# Nuestras clases CSS { .flx-title-with-image }

![Ahora ERP](/docs_assets/images/logos/AHORA-white.svg){ .fh-image-of-title style="filter: brightness(0) saturate(100%) invert(100%) sepia(10%) saturate(5563%) hue-rotate(305deg) brightness(105%) contrast(81%);" }

Hay varias clases que puedes usar para dar estilo directamente a secciones o componentes de ayuda y hacer que el diseño sea más coherente.

## Título con imágenes

```md
# Paco { .flx-title-with-image }

![Ahora ERP](/docs_assets/images/AhoraERP/ahora.svg){ .fh-image-of-title }
```

!!! info "Ejemplo"
    Para ver un ejemplo, solo mira el título de esta sección

## Enlace

```md
Mi texto <span class="link">el enlace</span> continúo mi texto
```

Mi texto <span class="link">el enlace</span> continúo mi texto

## Botón

```md
<span class="button">El botón</span>
```

<span class="button">El botón</span>

## Vídeos de YouTube

```html
<div class="video-wrapper">  
    <iframe src="Tu_URL" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
```

<div class="video-wrapper">  
    <iframe src="https://www.youtube.com/embed/DtL_giO-EB8?si=JqKHdr7AF19jc2xr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

!!! warning "URL de inserción (Embed)"
    Debes saber que para insertar un vídeo necesitas obtener la URL de inserción (embed), no la URL normal. Para hacerlo, sigue [estos pasos](https://support.google.com/youtube/answer/171780?hl=en-GB).

## Imágenes en modo oscuro y claro

```md
![](/URL/DE/LA/IMAGEN.PNG#only-light "Tu_Descrip"){data-gallery="light"}
![](/URL/DE/LA/IMAGEN.PNG#only-dark "Tu_Descrip"){data-gallery="dark"}
```

Cambia entre el modo oscuro y el modo claro para ver imágenes diferentes:

![](/docs_assets/delete/Ejemplo.png#only-light){data-gallery="light"}
![](/docs_assets/images/logos/AHORA-white.svg#only-dark){data-gallery="dark" width="200px"}

!!! warning "Galería"
    La parte que hace que las imágenes solo sean visibles en un modo es “#only-light/dark”, pero para evitar que el usuario pueda navegar por imágenes ocultas cuando haya hecho clic en una, debes añadir el atributo data-gallery="light/dark".

## Bloque de código sin cabecera de lenguaje

````md
```js { .no-language }
mycode();
```
````

```js { .no-language }
mycode();
```