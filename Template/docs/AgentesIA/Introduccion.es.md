# Agentes IA del ERP

Los **agentes de IA** son asistentes con los que hablas en lenguaje natural, como con un compañero. Consultan los datos reales del ERP con tus permisos, te los resumen o te hacen una gráfica, abren documentos y, cuando tienen herramientas para ello, crean o procesan documentos. Antes de las operaciones delicadas te piden confirmación.

## Los agentes

| Agente | En qué te ayuda |
|---|---|
| [**Bruce**](Bruce.md) | Ventas: pedidos, albaranes y facturas de clientes |
| [**Selina**](Selina.md) | Compras: pedidos, albaranes y facturas de proveedores |
| [**Bárbara**](Barbara.md) | Contabilidad y fiscalidad |
| [**Alfred**](Alfred.md) | Visión de conjunto: ventas, compras y tesorería, solo en consulta |
| [**Pamela**](Pamela.md) | Tesorería: cobros, pagos y remesas |
| [**Oswald**](Oswald.md) | Facturas de acreedor a partir del documento del proveedor |
| [**AHORAMind**](AhoraMind.md) | Dudas sobre cómo funciona el ERP |

Además, puedes [crear tus propios agentes](CrearAgente.md).

## Los asistentes de las pantallas

Algunas pantallas del ERP llevan su propio asistente de IA, que trabaja sobre lo que tienes delante:

| Asistente | Dónde trabaja |
|---|---|
| [**Gridito**](AsistentesPantalla.md#gridito-la-ia-de-las-rejillas) | Las rejillas: **Analizar con IA** y el filtro con IA |
| [**ReportDesigner**](AsistentesPantalla.md#reportdesigner-el-chat-del-disenador-de-informes) | El diseñador de informes |
| [**Configurador IA**](AsistentesPantalla.md#configurador-ia-el-chat-del-configurador-de-pantallas) | El configurador de pantallas |

## Antes de empezar

1. **La API de AHORA** tiene que estar instalada (servicio AHORA API) y su dirección puesta en el parámetro <fh-copy>API_URL</fh-copy>.
2. **Un administrador** abre **Administración > Configuración de IA**, escribe la clave del proveedor de IA y la prueba. En una instalación nueva todos los agentes vienen con Claude, así que basta con la clave de Anthropic. Todo esto se explica en [Modelos de IA](Modelos.md).

!!! warning "Una cuenta de pago de la API, no una suscripción"
    La clave tiene que ser de una cuenta de la **API** del proveedor (Anthropic u OpenAI) con un método de pago. Una suscripción a Claude o a ChatGPT no sirve: cubre el chat de su web, no el uso de la API. El proveedor cobra solo por lo que se usa.

## Cómo se habla con un agente

- Pulsa **Agentes** en la barra superior del ERP y elige el agente. AHORAMind también está en el panel de **Ayuda**.
- Escribe lo que necesitas tal como lo dirías, o díctalo con el micrófono: [Dictar por voz en el chat](Voz.md).
- Cada usuario ve los agentes que le permite su grupo de seguridad: [Restringir los agentes por grupo de seguridad](Seguridad.md).
- Un agente puede buscar en Internet si se lo activas: [Agentes con búsqueda en Internet](Internet.md).

!!! tip "Sé concreto"
    Cuanto más concreta es la petición, mejor la resuelve: mejor *«facturas de EXTRANJERO de octubre»* que *«facturas»*. Si algo es ambiguo, por ejemplo un número de pedido que existe en varios años, el agente te pregunta cuál.
