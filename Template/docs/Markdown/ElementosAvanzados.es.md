# Elementos Avanzados de Markdown

MkDocs y el tema Material soportan extensiones avanzadas de Markdown que te permiten crear contenido más rico e interactivo. Esta guía cubre las funcionalidades más útiles.

## Admonitions (Cajas de aviso)

Las admonitions son cajas destacadas para llamar la atención sobre información importante.

### Sintaxis básica

```markdown
!!! note "Título opcional"
    Este es el contenido de la nota.
    Puede tener múltiples líneas.
```

### Tipos disponibles

```markdown
!!! note
    Información general

!!! info
    Información adicional

!!! tip
    Consejos y recomendaciones

!!! success
    Mensajes de éxito

!!! warning
    Advertencias importantes

!!! danger
    Peligros y errores críticos

!!! example
    Ejemplos de código o uso

!!! question
    Preguntas frecuentes
```

!!! note
    Información general

!!! info
    Información adicional

!!! tip
    Consejos y recomendaciones

!!! success
    Mensajes de éxito

!!! warning
    Advertencias importantes

!!! danger
    Peligros y errores críticos

!!! example
    Ejemplos de código o uso

!!! question
    Preguntas frecuentes

### Admonitions colapsables

```markdown
??? note "Click para expandir"
    Este contenido está oculto por defecto.

???+ warning "Expandido por defecto"
    Este contenido está visible por defecto pero se puede colapsar.
```

**Ejemplo en acción:**

??? note "Click para expandir"
    Este contenido está oculto por defecto.

???+ warning "Expandido por defecto"
    Este contenido está visible por defecto pero se puede colapsar.

## Tarjetas personalizadas

En este proyecto, tenemos clases personalizadas para crear tarjetas:

```markdown
Este es un mensaje informativo.
{ .fh-info-card }

Esta es una advertencia importante.
{ .fh-warning-card }

Este es un mensaje de éxito.
{ .fh-success-card }

Este es un mensaje de error.
{ .fh-danger-card }
```

Las clases CSS personalizadas se definen en `stylesheets/custom-colors.css`.
{ .fh-info-card }

## Pestañas (Tabs)

Las pestañas permiten organizar contenido alternativo:

```markdown
=== "Python"
    ```python
    def saludar():
        print("Hola desde Python")
    ```

=== "JavaScript"
    ```javascript
    function saludar() {
        console.log("Hola desde JavaScript");
    }
    ```

=== "C#"
    ```csharp
    void Saludar() {
        Console.WriteLine("Hola desde C#");
    }
    ```
```

**Ejemplo en acción:**

=== "Python"

    ```python
    def saludar():
        print("Hola desde Python")
    ```

=== "JavaScript"

    ```javascript
    function saludar() {
        console.log("Hola desde JavaScript");
    }
    ```

=== "C#"

    ```csharp
    void Saludar() {
        Console.WriteLine("Hola desde C#");
    }
    ```

## Bloques de código avanzados

### Con título

````markdown
```python title="mi_script.py"
def calcular_suma(a, b):
    return a + b
```
````

**Ejemplo en acción:**

```python title="mi_script.py"
def calcular_suma(a, b):
    return a + b
```

### Resaltar líneas específicas

````markdown
```python hl_lines="2 3"
def ejemplo():
    linea_resaltada_1 = "Esta línea está resaltada"
    linea_resaltada_2 = "Esta también"
    linea_normal = "Esta no"
```
````

**Ejemplo en acción:**

```python hl_lines="2 3"
def ejemplo():
    linea_resaltada_1 = "Esta línea está resaltada"
    linea_resaltada_2 = "Esta también"
    linea_normal = "Esta no"
```

## Emojis

Usa códigos de emoji para agregar iconos:

```markdown
:smile: :heart: :rocket: :tada: :warning:
```

**Resultado:** 😊 ❤️ 🚀 🎉 ⚠️

Lista completa en: [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

## Iconos de Material Design

El tema Material incluye miles de iconos:

```markdown
:material-account-circle: Usuario
:material-alert-circle: Alerta
:material-check-circle: Éxito
:material-information: Información
```

Explora todos los iconos en: [Material Design Icons](https://pictogrammers.com/library/mdi/)

## Botones

Crea botones con enlaces:

```markdown
[Botón primario](#){ .md-button }
[Botón destacado](#){ .md-button .md-button--primary }
```

**Ejemplo en acción:**

[Botón primario](#){ .md-button }
[Botón destacado](#){ .md-button .md-button--primary }

## Listas de definición

```markdown
Término 1
:   Definición del término 1

Término 2
:   Definición del término 2
:   Puede tener múltiples definiciones
```

**Ejemplo en acción:**

MkDocs
:   Generador de sitios estáticos para documentación de proyectos

Material Theme
:   Tema popular y moderno para MkDocs
:   Incluye muchas funcionalidades avanzadas listas para usar

## Abreviaciones

Define abreviaciones que mostrarán tooltips:

```markdown
El HTML es un lenguaje de marcado.
El CSS controla el estilo.

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
```

Al pasar el ratón sobre HTML o CSS, verás su significado completo.

## Marcado de teclado

Muestra teclas y combinaciones:

```markdown
Presiona ++ctrl+alt+del++ para abrir el administrador de tareas.
Usa ++cmd+space++ en Mac para buscar.
```

**Ejemplo en acción:**

Presiona ++ctrl+alt+del++ para abrir el administrador de tareas.

Usa ++cmd+space++ en Mac para buscar.

Guardar archivo: ++ctrl+s++

## Grids y columnas

Organiza contenido en columnas usando HTML y clases personalizadas:

```html
<div class="grid cards" markdown>

- :material-clock-fast: **Rápido**

    ---

    Construcción y recarga rápida del sitio
    
- :material-check-bold: **Confiable**

    ---

    Documentación estable y consistente

</div>
```

**Ejemplo en acción:**

<div class="grid cards" markdown>

- :material-clock-fast: **Rápido**

    ---

    Construcción y recarga rápida del sitio
    
- :material-check-bold: **Confiable**

    ---

    Documentación estable y consistente
    
- :material-shield-check: **Seguro**

    ---

    Documentación versionada y controlada

</div>

O usando un layout simple con dos columnas:

```html
<div class="two-columns" markdown>

<div markdown>

### Ventajas

- Fácil de usar
- Rápido de configurar
- Gratis y open source

</div>

<div markdown>

### Características

- Búsqueda integrada
- Responsive design
- Múltiples temas

</div>

</div>
```

Para usar el layout de dos columnas, agrega este CSS en tu archivo `custom-colors.css`:

```css
.two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

@media screen and (max-width: 76.1875em) {
    .two-columns {
        grid-template-columns: 1fr;
    }
}
```
{ .fh-info-card }

### Diagramas con Mermaid

Crea diagramas de flujo, secuencia, etc.:

````markdown
```mermaid
graph LR
    A[Inicio] --> B{¿Condición?}
    B -->|Sí| C[Acción 1]
    B -->|No| D[Acción 2]
    C --> E[Fin]
    D --> E
```
````

**Ejemplo en acción:**

```mermaid
graph LR
    A[Inicio] --> B{¿Condición?}
    B -->|Sí| C[Acción 1]
    B -->|No| D[Acción 2]
    C --> E[Fin]
    D --> E
```

### Tipos de diagramas

**Diagrama de secuencia:**

```mermaid
sequenceDiagram
    participant Usuario
    participant Sistema
    participant BaseDatos
    Usuario->>Sistema: Login
    Sistema->>BaseDatos: Validar credenciales
    BaseDatos-->>Sistema: Credenciales OK
    Sistema-->>Usuario: Acceso concedido
```

**Diagrama de estados:**

```mermaid
stateDiagram-v2
    [*] --> Borrador
    Borrador --> Revisión
    Revisión --> Aprobado
    Revisión --> Rechazado
    Rechazado --> Borrador
    Aprobado --> Publicado
    Publicado --> [*]
```

Otros tipos disponibles:
- **Flowchart**: Diagramas de flujo
- **Sequence**: Diagramas de secuencia
- **Gantt**: Cronogramas
- **Class**: Diagramas de clases
- **State**: Diagramas de estados
- **ER**: Diagramas entidad-relación

## Anotaciones de contenido

Agrega notas emergentes al contenido:

```markdown
Este texto tiene una anotación.(1)
{ .annotate }

1.  :material-information: Esta es la anotación que aparece al lado.
```

**Ejemplo en acción:**

MkDocs (1) es un generador de sitios estáticos especialmente diseñado para documentación (2).
{ .annotate }

1.  :material-book-open-page-variant: MkDocs es rápido, simple y completamente personalizable.
2.  :material-file-document: Usa archivos Markdown para crear páginas HTML profesionales.

## Snippets (Fragmentos reutilizables)

Incluye contenido de otros archivos:

```markdown
--8<-- "ruta/al/fragmento.md"
```

Útil para:
- Reutilizar contenido común
- Incluir bloques de código externos
- Mantener ejemplos actualizados

## Atributos personalizados

Agrega clases, IDs y atributos a elementos:

```markdown
![Imagen](imagen.png){ width="300" }

[Enlace](url){ target="_blank" rel="noopener" }

Párrafo con clase personalizada
{ .mi-clase-css }
```

**Ejemplo en acción:**

[Abrir en nueva pestaña](https://www.mkdocs.org){ target="_blank" rel="noopener" .md-button }

Texto con estilo personalizado usando la clase fh-info-card.
{ .fh-info-card }

## Variables y macros

Define variables reutilizables en `mkdocs.yml`:

```yaml
extra:
  version: "2.0"
  company: "Mi Empresa"
```

Úsalas en Markdown:

```markdown
Versión actual: {{ version }}
Desarrollado por {{ company }}
```

## Próximos pasos

Con estas herramientas avanzadas, tu documentación será más rica e interactiva:

- [Estilos personalizados](../Estilos/EstilosPersonalizados.es.md) - Personaliza la apariencia
- [Componentes reutilizables](../Estilos/ComponentesPersonalizados.es.md) - Crea elementos consistentes
- [Organización del contenido](../Organizacion/EstructuraCarpetas.es.md) - Estructura tu documentación

Experimenta con estas funcionalidades para crear documentación excepcional.
{ .fh-success-card }
