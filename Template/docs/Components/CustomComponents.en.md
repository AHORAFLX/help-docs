# Our components

When developing help it's usefull to use reusable components, that's why we have inside the docs/fh-structural/javascript/components folder a bunch of them.

To insert them is as easy as adding them in the markdown file directly like in this example because markdown will interpret that as an html component.

```md
My paragraph <my-component its="attributes"></my-component> continue my paragraph.
```

## Copy

When clicked it will copy the text written inside of it to the users clipboard and show a copied message.

If no class is added it will apply [link styles](../CustomClasses/#link), but you can use whatever class you want.

```html
<fh-copy>My text</fh-copy>
```

**Example:**

<fh-copy>My text</fh-copy>

## Modal

When clicked it will show the desired block as a modal, it's normally used to show large block codes or images.

For this component to work properly you need to set the block you want to show as a modal an ID that starts with "fhmodal_" so it get's hidden by default with our styles and only get's shown when clicked.

````html
<fh-modal class="button" modal_id="fhmodal_Your_Id" modal_title="Your_Title">My text</fh-modal>

...

```js { #fhmodal_Your_Id }
console.log("test");
```
````

**Example:**

<fh-modal class="button" modal_id="fhmodal_Your_Id" modal_title="Your_Title">My text</fh-modal>

| Attribute | Description |
| --------- | ----------- |
| modal_id | Must be the same id as the one the block's got so it gets identified by the component |
| modal_title | This will be the title displayed on top when displaying the modal |

!!! info "Advice"
    Also to make page code more readable you should always set modal block at the end of the page.

## Popover

It will display an image as a popover (on click) or tooltip (on hover) depending on the image

```html
<fh-popover class="button" mode="My_Mode" src="My_Image">My text</fh-popover>
```

**Example:**

<fh-popover class="button" mode="tooltip" src="../docs_assets/delete/Ejemplo.png">My text</fh-popover>

| Attribute | Description |
| --------- | ----------- |
| mode | Must be "tooltip" or "popover" depending if you want it to show on hover or popover |
| src | The URL of the image (must be saved on its docs_assets folder) |

## Navigation to flexygo

When clicked it will open in a new page that flexygo page, if help comes from a flexygo it will just open it in that flexygo if it's from the docs.flexygo.com page it will open a modal to writte you own flexygo URL.

```html
<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">RedSys settings</flx-navbutton>
```

**Example:**

<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">RedSys settings</flx-navbutton>

!!! info "Advice"
    You can directly copy a flexygo flx-navbutton with its attributs and it will just work, cause it just requires the same attributes.

## Text propagator

An input that when its value is changed it will replace every elements text that's got the class indicated in its selector attribute for the input current value.

The input value will get saved in storage so if the user reloads or comes again it persists.

````html
<fh-namepropagator selector="my_own_class" placeholder="The_Initial_Text"></fh-namepropagator>

That will get replaced by input value → <span class="my_own_class"></span> ← That will get replaced by input value

```js { .my_own_class }
That will get replaced by input value → fhnamepropagator ← That will get replaced by input value
```
````

**Example:**

<fh-namepropagator selector="my_own_class" placeholder="The_Initial_Text"></fh-namepropagator>

That will get replaced by input value → <span class="my_own_class"></span> ← That will get replaced by input value

```js { .my_own_class }
That will get replaced by input value → fhnamepropagator ← That will get replaced by input value
```

!!! info "Advice"
    It will also substitute parts of code blocks that has the selector class, but for it to replace a certain part you need to writte there fhnamepropagator

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

## Next steps

Now that you know about custom components:

1. **Apply custom styling** - Learn [Custom classes](CustomClasses.md) for special visual effects
2. **Build your site** - Check [Building your site](../Deployment/BuildingYourSite.md) to compile for production