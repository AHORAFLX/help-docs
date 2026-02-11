# Our CSS classes { .fh-title-with-image }

![Ahora ERP](../docs_assets/images/logos/AHORA-white.svg){ .fh-image-of-title style="filter: brightness(0) saturate(100%) invert(100%) sepia(10%) saturate(5563%) hue-rotate(305deg) brightness(105%) contrast(81%);" }

There are multiple classes that you can use to style directly help sections or components and make it more cohesive.

## Title with images

```md
# Paco { .fh-title-with-image }

![Ahora ERP](../docs_assets/images/AhoraERP/ahora.svg){ .fh-image-of-title }
```

!!! info "Example"
    To see an example just look at the title of this section

## Link

```md
My text <span class="link">the link</span> continue my text
```

My text <span class="link">the link</span> continue my text

## Button

```md
<span class="button">The button</span>
```

<span class="button">The button</span>

## YouTube videos

```html
<div class="video-wrapper">  
    <iframe src="Your_URL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
```

<div class="video-wrapper">  
    <iframe src="https://www.youtube.com/embed/DtL_giO-EB8?si=JqKHdr7AF19jc2xr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

!!! warning "Embed URL"
    You need to know that to embed a video you need to get the embed URL not the normal one, to do that follow [this steps](https://support.google.com/youtube/answer/171780?hl=en-GB).

## Dark and light images

```md
![](/URL/DE/LA/IMAGEN.PNG#only-light "Tu_Descrip"){data-gallery="light"}
![](/URL/DE/LA/IMAGEN.PNG#only-dark "Tu_Descrip"){data-gallery="dark"}
```

Toggle between dark and light mode to see different images:

![](../docs_assets/delete/Ejemplo.png#only-light){data-gallery="light"}
![](../docs_assets/images/logos/AHORA-white.svg#only-dark){data-gallery="dark" width="200px"}

!!! warning "Gallery"
    The part of this that makes images only visible in one mode is the "#only-light/dark" but to avoid the user navigating through hidden images when it has clicked one you must add the attribute data-gallery="light/dark".

## Code block with no language header

```md
    ```js { .no-language }
    mycode();
    ```
```

```js { .no-language }
    mycode();
```

## Next steps

Now that you know about custom classes:

1. **Build your site** - Learn how to [build your site](../Deployment/BuildingYourSite.md) for production