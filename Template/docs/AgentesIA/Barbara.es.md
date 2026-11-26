# Bárbara - Agente de Contabilidad y Fiscalidad

![Bárbara](../docs_assets/images/AgentesIA/barbara-tarjeta.png){ width="160" align=right }

Bárbara es la agente de **contabilidad y fiscalidad**. Le preguntas con tus palabras por ejercicios, cuentas, asientos, presupuestos, IVA o modelos fiscales, y te contesta con los datos de tu ERP. También te abre en el ERP lo que necesitas ver, sin que tengas que buscarlo.

> Hola, ¿qué quieres revisar de contabilidad o fiscalidad?

Está pensada para quien lleva la contabilidad: cierra ejercicios, revisa presupuestos o prepara los impuestos. La encuentras en la lista de agentes del chat, con el nombre **Barbara**.

Bárbara no lleva cobros, pagos, remesas ni bancos: eso es de [Pamela](Pamela.md).

## Qué puede hacer por ti

### Consultar

Bárbara consulta los datos reales del ERP antes de darte una cifra. No necesitas saber dónde está cada dato.

| Le preguntas por… | Por ejemplo |
|---|---|
| Ejercicios | *«¿Está abierto el ejercicio 2026?»* |
| Saldos y movimientos de una cuenta | *«¿Qué saldo tiene la 572 a 31 de marzo?»* |
| Asientos y apuntes | *«¿Cuál es el asiento de mayor importe de este año?»* |
| Plan contable | *«¿Qué subcuentas empiezan por 430?»* |
| Resultado del ejercicio | *«¿Cuánto llevamos de beneficio este año?»* |
| Presupuesto contable | *«¿Cómo va el presupuesto de la 600 en agosto?»* |
| Libro de IVA | *«¿Cuánto IVA soportado llevamos este trimestre?»* |
| Retenciones | *«¿Qué retención se le aplicó al proveedor García en su última factura?»* |
| Amortizaciones | *«¿Qué cuota de amortización tiene el ordenador nuevo este año?»* |
| Prorrata de IVA | *«¿Qué porcentaje de prorrata tenemos este ejercicio?»* |
| Periodificaciones y tipos de gasto | *«¿Qué periodificaciones tenemos este ejercicio?»* |
| Modelos fiscales | *«¿Cómo está el 303 del tercer trimestre?»* (ver [Modelos fiscales](#modelos-fiscales)) |

También hace **gráficos** con los datos que consulta: *«Hazme un gráfico de barras con el gasto mensual de la 628 este año»*.

!!! tip "Lo que tienes seleccionado en el ERP"
    Si no dices de qué año hablas, Bárbara usa el ejercicio que tienes seleccionado en el ERP, y te lo dice. Para otro, nómbralo: *«…del 2025»*.

### Abrir e imprimir en el ERP

| Le pides… | Bárbara… |
|---|---|
| *«Ábreme el asiento 15»* | Abre la gestión de asientos con ese asiento |
| *«Enséñame en el ERP los movimientos de la 430000001»* | Abre el extracto de la cuenta, con todos sus apuntes del ejercicio |
| *«Ábreme el balance de situación de 2025»* | Abre el balance calculado para ese ejercicio completo |
| *«Imprime los asientos 3, 4 y 5»* | Los imprime |
| *«Ábreme la ficha del inmovilizado de la furgoneta»* | Abre el elemento de amortización |

Abre asientos, cuentas, ejercicios, centros de coste, presupuestos, amortizaciones, balances (Balance de Situación, Pérdidas y Ganancias y Estado de Flujos de Efectivo), periodificaciones, líneas de gasto, apuntes de IVA manuales, plantillas de asiento, clientes y proveedores.

Imprime asientos y amortizaciones, uno o varios a la vez.

### Crear

Bárbara puede dar de alta dos cosas:

- **Una subcuenta** en un ejercicio: *«Crea la subcuenta 430000099 "Cliente varios" en 2026»*.
- **Un centro de coste**: *«Crea el centro de coste 001 "Administración"»*.

## Qué te pide confirmar

**La longitud de una subcuenta.** Una subcuenta con la longitud equivocada no se crea. Si le das un código más corto de lo que exige el ejercicio, Bárbara te propone el código completo, igual que lo completa el ERP cuando tecleas «430.99», y espera tu sí:

> La subcuenta tiene que tener 9 dígitos. ¿La creo como 430000099?

Nunca rellena con ceros por su cuenta. Con un centro de coste pasa lo mismo: si el código no tiene la longitud que pide el ERP, te dice cuántos caracteres hacen falta.

**De qué asiento es un apunte.** El número de apunte se repite en cada asiento. Si le pides *«abre el apunte 2»* sin decir de qué asiento, te lo pregunta.

## Modelos fiscales

Los modelos fiscales son un módulo aparte del ERP, y no todas las empresas lo tienen.

- **Con el módulo**, Bárbara consulta el estado de los modelos ya generados (generado, calculado, validado, presentado o anulado), los abre en su pantalla y los imprime de uno en uno.
- **Sin el módulo**, te avisa de que no está instalado. Si le preguntas cuánto sale el IVA del trimestre, lo calcula con el libro de IVA y te aclara que no es el importe de un modelo presentado.

Bárbara **no calcula, valida, presenta ni anula** un modelo fiscal. Si se lo pides, te dice que lo hagas tú y te ofrece abrirlo para que lo hagas desde ahí.

## Lo que Bárbara no hace

- **No genera asientos.** Si quieres meter uno con una plantilla, te abre las plantillas de asiento para que lo generes tú con el asistente del ERP.
- **No cierra ni reabre ejercicios**, ni amortiza o desamortiza elementos del inmovilizado.
- **No recalcula la prorrata de IVA.** Te dice su porcentaje; el recálculo se hace desde **Ejercicios** en el ERP.
- **No crea periodificaciones, líneas de gasto ni apuntes de IVA manuales.** Para un apunte de IVA manual te abre la pantalla en blanco y lo rellenas y guardas tú.
- **No imprime presupuestos** ni varios modelos fiscales a la vez: el ERP no tiene listado para eso. Te ofrece abrirlos.
- **No abre balances de un periodo parcial**: solo para el ejercicio completo.
- **No inventa cifras.** Si no puede consultar un dato, te lo dice.

## Modelo y claves

Bárbara funciona con un modelo de **Claude** (Anthropic) o de **OpenAI**. En una instalación nueva viene con Claude Sonnet. El modelo y las claves los cambia un administrador en **Administración > Configuración de IA**: mira [Modelos de IA](Modelos.md).

Por defecto Bárbara no busca en Internet. Para activarlo, mira [Agentes con búsqueda en Internet](Internet.md).
