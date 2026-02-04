# Nuestros componentes

Al desarrollar la ayuda es útil utilizar componentes reutilizables, por eso tenemos dentro de la carpeta `docs/fh-structural/javascript/components` un montón de ellos.

Insertarlos es tan fácil como añadirlos directamente en el archivo markdown, como en este ejemplo, porque markdown lo interpretará como un componente HTML.

```md
Mi párrafo <my-component its="attributes"></my-component> continúo mi párrafo.
```

## Copy

Cuando se hace clic, copiará el texto escrito dentro al portapapeles del usuario y mostrará un mensaje de copiado.

Si no se añade ninguna clase, aplicará los [estilos de enlace](#link-class), pero puedes usar la clase que quieras.

```html
<fh-copy>Mi texto</fh-copy>
```

**Ejemplo:**

<fh-copy>Mi texto</fh-copy>

## Modal

Cuando se hace clic, mostrará el bloque deseado como un modal. Normalmente se usa para mostrar bloques de código grandes o imágenes.

Para que este componente funcione correctamente, debes asignar al bloque que quieres mostrar como modal un ID que empiece por `"fhmodal_"`, para que quede oculto por defecto con nuestros estilos y solo se muestre al hacer clic.

````html
<fh-modal class="button" modal_id="fhmodal_Your_Id" modal_title="Your_Title">Mi texto</fh-modal>

...

```js { #fhmodal_Your_Id }
console.log("test");
```
````

**Ejemplo:**

<fh-modal class="button" modal_id="fhmodal_Your_Id" modal_title="Your_Title">Mi texto</fh-modal>

| Atributo    | Descripción                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| modal_id    | Debe ser el mismo id que tenga el bloque para que el componente pueda identificarlo |
| modal_title | Será el título que se muestre en la parte superior al abrir el modal                |

!!! info "Consejo"
    Además, para hacer el código de la página más legible, deberías colocar siempre el bloque del modal al final de la página.

## Popover

Mostrará una imagen como un popover (al hacer clic) o como un tooltip (al pasar el ratón por encima), dependiendo de la imagen.

```html
<fh-popover class="button" mode="My_Mode" src="My_Image">Mi texto</fh-popover>
```

**Ejemplo:**

<fh-popover class="button" mode="tooltip" src="../docs_assets/delete/Ejemplo.png">Mi texto</fh-popover>

| Atributo | Descripción                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| mode     | Debe ser `"tooltip"` o `"popover"` dependiendo de si quieres que se muestre al pasar el ratón o al hacer clic |
| src      | La URL de la imagen (debe estar guardada en su carpeta `docs_assets`)                                         |

## Navegación a Flexygo

Cuando se hace clic, abrirá esa página de Flexygo en una nueva pestaña. Si la ayuda proviene de un Flexygo, la abrirá directamente en ese Flexygo; si proviene de la página `docs.flexygo.com`, abrirá un modal para que escribas tu propia URL de Flexygo.

```html
<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">Configuración de RedSys</flx-navbutton>
```

**Ejemplo:**

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">Configuración de RedSys</flx-navbutton>

!!! info "Consejo"
    Puedes copiar directamente un `flx-navbutton` de Flexygo con sus atributos y funcionará sin más, porque solo requiere esos mismos atributos.

## Propagador de texto

Un input que, cuando cambia su valor, reemplazará el texto de todos los elementos que tengan la clase indicada en su atributo `selector` por el valor actual del input.

El valor del input se guardará en el almacenamiento, así que si el usuario recarga la página o vuelve más tarde, se mantendrá.

````html
<fh-namepropagator selector="my_own_class" placeholder="The_Initial_Text"></fh-namepropagator>

Esto se reemplazará por el valor del input → <span class="my_own_class"></span> ← Esto se reemplazará por el valor del input

```js { .my_own_class }
Esto se reemplazará por el valor del input → fhnamepropagator ← Esto se reemplazará por el valor del input
```
````

**Ejemplo:**

<fh-namepropagator selector="my_own_class" placeholder="The_Initial_Text"></fh-namepropagator>

Esto se reemplazará por el valor del input → <span class="my_own_class"></span> ← Esto se reemplazará por el valor del input

```js { .my_own_class }
Esto se reemplazará por el valor del input → fhnamepropagator ← Esto se reemplazará por el valor del input
```

!!! info "Consejo"
    También sustituirá partes de bloques de código que tengan la clase del selector, pero para que reemplace una parte concreta necesitas escribir ahí `fhnamepropagator`.

```js { #fhmodal_Your_Id }
execProcessParams(processname: string, objectname: string, objectwhere: string, defaults: any, module: JQuery, button: JQuery, callBack?: any) {
    if ((<FlxModuleElement>$(module)[0]).componentString.includes('flx-edit')) {
        let edit = <FlxEditElement>module.find('flx-edit')[0];
        edit.validateSQLProperties();
    }

    if (!button || !button.is(':disabled')) {

        if (module.find('form').valid()) {

            //We check for possible combo with values that should be saved before object itself
            this.checkAndSaveNewComboValues(module);

            $('.execProcessButton').prop('disabled', true);

            let props = module.find('[property]');
            let params = new Array();
            if (props.length > 0) {

                for (var i = 0; i < props.length; i++) {
                    let prop: any = $(props[i])[0];
                    let edit = (<flexygo.ui.wc.FlxEditElement>module.find('flx-edit:first')[0]);
                    if (!edit.data[prop.property].DetachedFromDB) {
                        params.push({ 'key': prop.property, 'value': prop.getValue() });
                    }
                }
                flexygo.nav.execProcess(processname, objectname, objectwhere, defaults, params, 'new', true, button, callBack);
            } else {
                flexygo.msg.error(flexygo.localization.translate('flxmodule.noparams'))
            }

            $('.execProcessButton').prop('disabled', false);
        }
        else {
            flexygo.msg.warning(flexygo.localization.translate('flxmodule.requiredrunning'))
        }

    }

}
```