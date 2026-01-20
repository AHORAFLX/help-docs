# Sintaxis Básica de Markdown

Markdown es un lenguaje de marcado ligero que te permite escribir contenido formateado usando una sintaxis simple y legible. Esta guía cubre los elementos esenciales que necesitas para crear documentación profesional.

## Encabezados

Los encabezados organizan tu contenido en secciones jerárquicas:

```markdown
# Encabezado de nivel 2
## Encabezado de nivel 3
## Encabezado de nivel 4
```

El nivel 1 (`#`) generalmente se reserva para el título del documento, que se muestra en la barra de navegación.
{ .fh-info-card }

## Formato de texto

## Énfasis básico

```markdown
**Texto en negrita**
*Texto en cursiva*
***Texto en negrita y cursiva***
~~Texto tachado~~
`Código en línea`
```

**Resultado:**
- **Texto en negrita**
- *Texto en cursiva*
- ***Texto en negrita y cursiva***
- ~~Texto tachado~~
- `Código en línea`

## Párrafos y saltos de línea

Para crear un nuevo párrafo, deja una línea en blanco entre dos bloques de texto.

Para un salto de línea sin párrafo nuevo, termina la línea con dos espacios.

## Listas

## Listas desordenadas

```markdown
- Primer elemento
- Segundo elemento
  - Sub-elemento 1
  - Sub-elemento 2
- Tercer elemento
```

**Resultado:**
- Primer elemento
- Segundo elemento
  - Sub-elemento 1
  - Sub-elemento 2
- Tercer elemento

## Listas ordenadas

```markdown
1. Primer paso
2. Segundo paso
3. Tercer paso
   1. Sub-paso A
   2. Sub-paso B
```

**Resultado:**
1. Primer paso
2. Segundo paso
3. Tercer paso
   1. Sub-paso A
   2. Sub-paso B

## Enlaces

## Enlaces externos

```markdown
[Texto del enlace](https://www.ejemplo.com)
[Enlace con título](https://www.ejemplo.com "Título al pasar el ratón")
```

## Enlaces internos

```markdown
[Ir a otra sección](#nombre-de-la-sección)
[Ir a otro documento](../OtraCarpeta/OtraSeccion.es.md)
```

Los enlaces internos son sensibles a mayúsculas y espacios (convertidos a guiones).
{ .fh-warning-card }

## Imágenes

```markdown
![Texto alternativo](/ruta/a/imagen.png)
![Imagen con título](/ruta/a/imagen.png "Título de la imagen")
```

**Ejemplo:**
```markdown
![Logo](/docs_assets/images/logo.png)
```

## Bloques de código

## Código en línea

Usa comillas invertidas simples: \`codigo\` produce `codigo`

## Bloques de código con resaltado de sintaxis

Usa tres comillas invertidas seguidas del lenguaje:

````markdown
```python
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Mundo"))
```
````

**Resultado:**

```python
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Mundo"))
```

Lenguajes soportados: `python`, `javascript`, `java`, `csharp`, `sql`, `bash`, `json`, `xml`, `yaml`, etc.

## Citas

Usa el símbolo `>` para crear citas:

```markdown
> Esta es una cita.
> Puede tener múltiples líneas.
>
> Y múltiples párrafos.
```

**Resultado:**
> Esta es una cita.
> Puede tener múltiples líneas.
>
> Y múltiples párrafos.

## Tablas

```markdown
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Fila 1    | Dato 1    | Dato 2    |
| Fila 2    | Dato 3    | Dato 4    |
```

**Resultado:**

| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Fila 1    | Dato 1    | Dato 2    |
| Fila 2    | Dato 3    | Dato 4    |

## Alineación de columnas

```markdown
| Izquierda | Centro | Derecha |
|:----------|:------:|--------:|
| Texto     | Texto  | Texto   |
```

## Líneas horizontales

Crea separadores visuales con tres o más guiones:

```markdown
---
```

**Resultado:**

---

## Listas de tareas

```markdown
- [x] Tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente
```

**Resultado:**
- [x] Tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente

## Notas de pie de página

```markdown
Este es un texto con una nota[^1].

[^1]: Esta es la nota al pie.
```

## Escapar caracteres especiales

Si necesitas mostrar un carácter especial de Markdown literalmente, usa la barra invertida `\`:

```markdown
\* Este asterisco no creará una lista
\# Este no será un encabezado
```

## HTML embebido

Markdown permite usar HTML cuando necesitas más control:

```html
<div style="background-color: #f0f0f0; padding: 10px;">
  <p>Contenido HTML personalizado</p>
</div>
```

Usa HTML con moderación para mantener el contenido legible en formato Markdown.
{ .fh-warning-card }

## Próximos pasos

Ahora que conoces la sintaxis básica, aprende sobre:

- [Elementos avanzados de Markdown](ElementosAvanzados.es.md) - Extensiones y funcionalidades adicionales
- [Estilos y componentes personalizados](../Estilos/ComponentesPersonalizados.es.md) - Elementos visuales especiales
- [Buenas prácticas de escritura](../BuenasPracticas/EscrituraEfectiva.es.md) - Consejos para contenido claro

Con esta base, ya puedes crear documentación completa y profesional.
{ .fh-success-card }
