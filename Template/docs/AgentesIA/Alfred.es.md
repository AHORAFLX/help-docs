# Alfred - Agente maestro

![Alfred](../docs_assets/images/AgentesIA/alfred-tarjeta.png){ width="160" align=right }

Alfred es el agente **maestro** del ERP: te da una visión de conjunto del negocio cruzando **ventas facturadas, compras facturadas y tesorería** en una sola conversación. Le preguntas con tus palabras y te contesta con los datos reales de tu ERP, en tablas o en gráficos. También te abre o te imprime lo que necesitas ver.

> Adelante, por favor. ¿En qué puedo servirle?

Está pensado para dirección y gerencia, o para quien necesita cifras de varias áreas sin cambiar de agente. Te trata de usted. Lo encuentras en la lista de agentes del chat, con el nombre **Alfred**.

Alfred no sustituye a los agentes de cada área, los complementa. Para trabajar a fondo en una de ellas:

| Si necesitas… | Usa a |
|---|---|
| Pedidos, albaranes y facturas de clientes | [Bruce](Bruce.md) |
| Pedidos, albaranes y facturas de proveedores | [Selina](Selina.md) |
| Registrar cobros y pagos o crear remesas | [Pamela](Pamela.md) |
| Asientos, cuentas, IVA y modelos fiscales | [Bárbara](Barbara.md) |
| Crear facturas de acreedor a partir del documento | [Oswald](Oswald.md) |

## Qué puede hacer por ti

### Consultar

Alfred consulta el ERP antes de darte una cifra. Si la petición está clara, consulta directamente, sin pedirte permiso.

| Le preguntas por… | Por ejemplo |
|---|---|
| Ventas facturadas | *«¿Cuánto llevamos facturado en ventas este año?»* |
| Compras facturadas | *«Dame el total de compras del último trimestre»* |
| Lo que te deben | *«¿Cuánto nos deben los clientes?»* |
| Lo que debes | *«¿Cuánto debemos a proveedores?»* |
| Clientes y proveedores | *«Lista los 10 proveedores con mayor facturación»* |
| Vencimientos y remesas | *«Muéstrame las remesas del último mes»* |
| Ejercicios contables | *«¿Está abierto el ejercicio actual?»* |
| Balances | *«¿Qué balances puedo consultar?»* |

Si le pides un **resumen ejecutivo** (*«¿cómo estamos?»*), junta en una respuesta las ventas, las compras, los cobros pendientes y los pagos pendientes.

También hace **gráficos** con lo que consulta: *«Genera una gráfica comparando ventas y compras por mes»*.

!!! tip "Tres botones para empezar"
    El chat de Alfred trae tres botones con preguntas ya escritas: **Resumen Ejecutivo**, **Ventas vs Compras** y **Cobros y Pagos**.

### Abrir e imprimir en el ERP

| Le pides… | Alfred… |
|---|---|
| *«Abre la factura de cliente 1234»* | Abre esa factura en su pantalla |
| *«Abre la cartera de cobros»* | Abre la cartera, sin filtros |
| *«Abre los pagos pendientes del proveedor García»* | Abre la cartera de pagos filtrada |
| *«Ábreme el balance de situación de 2025»* | Abre el balance calculado de ese ejercicio completo |
| *«Imprime las facturas de proveedor de octubre»* | Las imprime |

Abre e imprime clientes, proveedores, facturas de cliente, facturas de proveedor, cuentas bancarias, cobros, pagos y remesas, de uno en uno o en colección. Además, abre ejercicios contables y balances.

Si pides abrir una cartera o una colección sin decir ningún filtro, la abre entera.

## Qué te pide confirmar

**Qué documento es.** La numeración se reinicia cada año, así que un mismo número puede existir en varios años y series. Si le pides *«abre la factura 25»* y hay varias, Alfred te las lista todas, con su Id, número, fecha y cliente o proveedor, y te pregunta cuál. Nunca elige él, ni siquiera la más reciente. Lo mismo hace si varios clientes o proveedores tienen un nombre parecido.

**Si quieres ver la pantalla o el dato.** Si no está claro si le pides abrir algo en el ERP o una respuesta en el chat, te lo pregunta.

!!! tip "Habla de lo que te ha enseñado"
    Si Alfred te acaba de enseñar una lista, puedes decir *«abre la segunda»* o *«imprime esa»*: usa el documento de esa lista, sin volver a buscarlo.

## Lo que Alfred no hace

- **No crea ni cambia nada.** Solo consulta, abre, imprime y hace gráficos.
- **No ve pedidos ni albaranes.** Te manda a [Bruce](Bruce.md) para ventas y a [Selina](Selina.md) para compras.
- **No sabe el saldo de los bancos.** Las cuentas bancarias no traen saldo: si se lo preguntas, te lo dice y te da la lista de cuentas (banco, IBAN y cuenta contable).
- **No da los importes de un balance** en el chat: te dice qué balances hay y te abre el que quieras, calculado para el ejercicio completo.
- **No abre remesas de pago.** Las abre de cobro; las de pago solo las consulta.
- **No lleva la contabilidad.** Para asientos, cuentas, libro de IVA o modelos fiscales te manda a [Bárbara](Barbara.md).
- **No inventa cifras.** Si una consulta no devuelve nada, te lo dice.

Si no le dices cuántos, los listados traen como mucho 50 filas. Si quieres ver la consulta que ha hecho, pídesela.

## Modelo y claves

Alfred funciona con un modelo de **Claude** (Anthropic) o de **OpenAI**. En una instalación nueva viene con Claude Sonnet. El modelo y las claves los cambia un administrador en **Administración > Configuración de IA**: mira [Modelos de IA](Modelos.md).

Por defecto Alfred no busca en Internet. Para activarlo, mira [Agentes con búsqueda en Internet](Internet.md).
