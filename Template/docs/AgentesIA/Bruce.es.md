# Bruce - Agente de Ventas

![Bruce](../docs_assets/images/AgentesIA/bruce-avatar.png){ width="96" align=right }

Bruce es el agente del **circuito de ventas**: pedidos, albaranes y facturas de clientes, clientes y artículos. Le preguntas en lenguaje normal y te contesta con los datos reales del ERP, te hace una gráfica, te abre los documentos y, si se lo pides, albaranea, factura o actualiza.

> Hola, ¿en qué puedo ayudarte hoy?

Está pensado para comerciales, responsables de facturación y dirección. Lo encuentras en la lista de agentes del chat (mira [Agentes IA del ERP](Introduccion.md)).

## Qué puede hacer

| Le pides… | Bruce… |
|---|---|
| Una consulta | Busca en los datos de ventas y te da la respuesta o el listado |
| Una gráfica | Te la dibuja en el chat, en barras verticales u horizontales |
| Abrir o imprimir | Abre o imprime un documento, un cliente, un artículo o una colección filtrada |
| Albaranear o facturar | Genera el albarán o la factura de los pedidos y albaranes que le digas |
| Actualizar | Actualiza albaranes y facturas |
| Dar de alta | Crea clientes y artículos |

Bruce trabaja **con tu usuario**: solo ve los clientes, series y almacenes a los que tienes acceso en el ERP.

## Consultas y gráficas

Ve los pedidos con sus líneas, los albaranes, las facturas (también las de deudor y los anticipos), los clientes con sus contactos, los artículos con su stock por almacén y las series de venta. Algunos ejemplos:

- *«Muéstrame los pedidos pendientes de facturar»*
- *«Dame todos los datos del pedido 1234»*
- *«Pedidos pendientes de albaranear entre el 20 de abril y el 20 de mayo»*
- *«Total de facturación del último mes, ordenado por cliente»*
- *«Lista las facturas por fecha de actualización e indica cuáles están actualizadas»*
- *«Dime el total facturado en facturas de deudor este mes»*
- *«Importe total de anticipos en el último año»*
- *«Cuenta los artículos pedidos y albaraneados en el último mes»*
- *«¿Cuánto stock disponible tengo del artículo TORNILLO-M8 en cada almacén?»*
- *«Genera una gráfica con la facturación de cada cliente en el último mes»*

Cuando le pides un listado de documentos, te da de cada uno su **Id**, su serie, su número, la fecha, el estado y el cliente. Con el Id puedes pedirle después que actúe sobre uno de la lista: *«factura el segundo»*, *«abre el 29»*.

!!! tip "Si el número se repite"
    La numeración se reinicia cada año, así que el pedido 5 puede existir en varios años o series. Si le das un número que coincide con varios documentos, Bruce te enseña todos y te pregunta cuál. No elige él.

Bruce no te enseña la consulta SQL que ha usado, pero si se la pides te la da.

## Abrir e imprimir

Bruce abre en el ERP un **pedido**, un **albarán**, una **factura**, un **cliente** o un **artículo**, o una **colección** de cualquiera de ellos con el filtro que le digas. También los imprime.

- *«Abre los clientes de tipo Nacional»*
- *«Abre las facturas del tercer trimestre de 2024»*
- *«Abre los pedidos del cliente EXTRANJERO»*
- *«Imprime la factura 52 de la serie A»*

Si le das un nombre en vez de un código, lo busca antes. Para abrir un solo registro, los datos tienen que identificar uno solo; si no, te pregunta.

## Albaranear, facturar y actualizar

Bruce sigue el circuito de ventas del ERP:

| Acción | Sobre qué | Qué tiene que cumplir |
|---|---|---|
| **Albaranear** un pedido | Pedidos en estado PENDIENTE | Puedes indicarle la fecha del albarán; si no, sale con la de hoy |
| **Facturar** un pedido | Pedidos en estado PENDIENTE, sin albaranes | La factura sale siempre con la fecha de hoy |
| **Facturar** un albarán | Albaranes que no estén facturados | |
| **Actualizar** un albarán | Albaranes en estado ALBARAN | |
| **Actualizar** una factura | Facturas en estado FACTURA NO ACTUALIZADA | |

Te dice el resultado documento a documento: el Id del albarán o la factura que ha generado o, si alguno ha fallado, el motivo.

- *«Albaranea el pedido 26 con fecha 15 de noviembre»*
- *«Factura los albaranes pendientes de EXTRANJERO»*
- *«Actualiza la factura 52»*

!!! warning "Un documento por cada pedido o albarán"
    Bruce genera un albarán por cada pedido y una factura por cada albarán. **No agrupa** varios pedidos en un albarán ni varios albaranes en una factura, ni parte un documento en varios. Eso hazlo desde el ERP.

## Dar de alta clientes y artículos

- *«Crea el cliente FICTICIO con NIF 12345678Z»*
- *«Crea el artículo TORNILLO-M8, tornillo inoxidable de métrica 8»*

Para un **cliente** necesita al menos el nombre y el NIF; si no le dices el tipo, lo crea como Nacional. Si ya hay un cliente con ese NIF, no crea otro: te dice cuál es.

Para un **artículo** necesita el código y la descripción. Si no le das el código, te lo pide o te propone uno a partir de la descripción.

Al terminar te da el código del registro creado, pero no lo abre: pídeselo si quieres verlo.

## Qué te pide confirmar

| Si le pides… | Bruce… |
|---|---|
| Albaranear, facturar o actualizar **un solo documento** | Lo hace sin preguntar |
| Hacerlo con **varios documentos a la vez** | Te enseña cuáles son y te pregunta *«¿Quieres continuar?»* antes de tocar nada |
| Algo sobre un número que existe en varios años o series | Te enseña los candidatos y te pregunta cuál |

La confirmación vale para esos mismos documentos y durante 15 minutos. Si tardas más o cambias la lista, te la vuelve a pedir.

!!! warning "Con un solo documento, actúa"
    Si solo quieres saber si se puede hacer algo, díselo así: *«¿se puede facturar el pedido 26? Solo pregunto»*. Bruce mirará su estado sin facturarlo. Lo que genera Bruce no se deshace desde el chat.

## Lo que Bruce no hace

- **Lotes.** No albaranea ni factura pedidos con artículos que llevan lote, y no factura ni actualiza albaranes con lotes sin asignar. Te lo dice: asigna el lote y haz la operación desde el ERP.
- **Bloqueos.** Si el documento o el cliente están bloqueados, no sigue. Desbloquéalos en el ERP.
- **Facturas que no puede actualizar.** Las de otra empresa y las de una serie que exige fecha de hoy si la factura no es de hoy: hay que renumerarlas con fecha de hoy en el ERP.
- **Fecha de la factura al facturar un pedido.** Siempre es la de hoy; si le pides otra, te avisa de que el ERP no lo permite.
- **Modificar o borrar.** No cambia los datos de pedidos, albaranes, facturas, clientes ni artículos, ni los borra.
- **Otros temas.** Solo habla del circuito de ventas del ERP. Para compras, habla con [Selina](Selina.md).

Las consultas devuelven como mucho 50 filas si no le pides más. Por defecto, Bruce **no busca en Internet**: mira [Agentes con búsqueda en Internet](Internet.md).

## Modelo y claves

En una instalación nueva, Bruce trabaja con **Claude Sonnet**. Puede usar un modelo de Claude (Anthropic) o de OpenAI: el modelo y las claves de los proveedores los gestiona un administrador. Lo tienes en [Modelos de IA](Modelos.md).
