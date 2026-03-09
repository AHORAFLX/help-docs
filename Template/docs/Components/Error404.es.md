# Página de error 404

Esta página explica cómo crear tu propia skin de la 404 y desplegarla en `ayuda.ahora.es` para poder modificar los colores que esta página utiliza por defecto:

![](../docs_assets/delete/404-page.png)

## Crear tu propia skin

Para añadir una skin de producto nueva, actualiza dos archivos de la carpeta `404-error-page`:

1. En `404-error.js`, añade tu código de producto en el array `codes`.
2. En `404-error.css`, crea tu clase CSS con el formato `.skin-theproduct`.

Con eso, si el usuario introduce una URL mal escrita dentro de tu proyecto, se redirigirá a tu proyecto y la página de error 404 tendrá tus propios colores.

!!! info "Product Code"
    El código de producto en `codes` debe ser el mismo que el nombre de tu carpeta en la URL, siempre en minúsculas.

    - `ayuda.ahora.es/flexygo` → `flexygo`
    - `ayuda.ahora.es/crm` → `crm`

```js
// 404-error.js
const codes = ['flexygo', 'theproduct'];
```

```css
/* 404-error.css */
.skin-theproduct {
    --accent:       #123456;
    --accent-hover: #0f2f4a;
    --code-glow:    rgba(18, 52, 86, 0.25);
}
```

Qué modifica cada variable:

- `--accent`: color principal usado en el número 404 y en el fondo del botón.
- `--accent-hover`: color de fondo del botón al pasar el ratón.
- `--code-glow`: color del brillo/sombra usado alrededor de la caja 404, el número y el botón.

Cómo funciona:

- El script lee el primer segmento de la URL (ejemplo: `/theproduct/404` → `theproduct`).
- Añade `skin-theproduct` como clase al body.
- Si el código existe en `codes`, el botón redirige a `/<code>`.

## Despliegue en ayuda.ahora.es

Cuando tus cambios estén listos, debes acceder al servidor web y reemplazar los archivos actuales dentro de `E:\WEBS\ayuda.ahora.es\404` por tus archivos modificados.

![](../docs_assets/delete/save-404.png)