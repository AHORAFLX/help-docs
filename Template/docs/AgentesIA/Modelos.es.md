# Modelos de IA: Claude y OpenAI

Cada agente del ERP trabaja con un **modelo de IA**, que es el que entiende lo que le pides y decide qué herramientas usar. Puedes usar modelos de dos proveedores:

- **Anthropic**: los modelos **Claude** (Haiku, Sonnet, Opus…);
- **OpenAI**: los modelos **GPT** (GPT-5.4 mini, GPT-5.5, GPT-6…).

Cada agente tiene el suyo, así que puedes combinarlos: por ejemplo, Claude para los agentes que más trabajan y un modelo más económico para los que solo consultan.

Esto vale también para los **asistentes de las pantallas** del ERP, que son agentes como los demás:

| Asistente | Dónde trabaja |
|---|---|
| **Gridito** | La IA de las rejillas: **Analizar con IA** y el filtro con IA |
| **ReportDesigner** | El chat del diseñador de informes |
| **Configurador IA** | El chat del configurador de pantallas |

Cada uno usa el modelo que tenga puesto y la clave de su proveedor, igual que los agentes del chat.

## Configuración de IA: el primer paso

Todo lo que hace falta para empezar está en una sola pantalla: **Administración > Configuración de IA**. Solo la ven y la abren los administradores.

![Configuración de IA en el menú de Administración](../docs_assets/images/AgentesIA/configuracion-ia-menu.png)

Tiene dos pestañas:

- **Claves**: la clave de cada proveedor y, si se usa, la dirección de la pasarela de Anthropic.
- **Agentes**: todos los agentes, también los estándar y los asistentes de las pantallas, con su modelo, si pueden buscar en Internet y si está puesta la clave de su proveedor.

![Configuración de IA: las claves de los proveedores](../docs_assets/images/AgentesIA/configuracion-ia-claves.png)

Para empezar a usar la IA:

1. En **Claves**, escribe la clave de tu proveedor.
2. Pulsa **Probar claves**. El ERP pregunta al proveedor si la clave vale, sin ningún coste.
3. Pulsa **Recomendados de Claude** o **Recomendados de OpenAI**, según el proveedor que uses. Los agentes estándar pasan a los modelos recomendados de ese proveedor; tus agentes propios no se tocan.

![Configuración de IA: el modelo de cada agente](../docs_assets/images/AgentesIA/configuracion-ia-agentes.png)

Los cambios valen al momento, sin reiniciar el ERP.

| Recomendados | Agentes del chat | Asistentes de las pantallas y AHORAMind |
|---|---|---|
| **Claude** | Claude Sonnet, esfuerzo medio | Claude Haiku, esfuerzo bajo |
| **OpenAI** | GPT-5.5, esfuerzo bajo | GPT-5.4 mini, esfuerzo bajo |

## Las claves de cada proveedor

Cada proveedor necesita su clave. Se ponen en la pestaña **Claves** de **Configuración de IA**, y se guardan en estos parámetros de la configuración general del ERP:

| Proveedor | Parámetro | Dónde se saca la clave |
|---|---|---|
| OpenAI | <fh-copy>AI_TOKEN</fh-copy> | platform.openai.com/api-keys |
| Anthropic | <fh-copy>AI_TOKEN_ANTHROPIC</fh-copy> | console.anthropic.com (empieza por `sk-ant-`) |

Solo hace falta la clave de los proveedores cuyos modelos uses. Si a un asistente de pantalla le falta la clave de su proveedor, su chat y **Analizar con IA** no aparecen.

Si tu empresa usa varias delegaciones, una delegación puede tener su propia clave: en la pestaña **Claves** ves las de todas, y cada usuario usa la de su delegación si la hay.

!!! tip "El chat te la pide"
    Si abres el chat de un agente y falta la clave del proveedor de su modelo, la pantalla de configuración del chat te dice qué clave necesita, de qué proveedor y dónde sacarla, y la guarda en su parámetro.

![El chat pide la clave de Anthropic que falta](../docs_assets/images/AgentesIA/modelos-clave.png)

### Pasarela de Anthropic (opcional)

Si tu empresa accede a los modelos de Claude a través de una pasarela propia en lugar de directamente, indica su dirección completa (empieza por `https://`) en <fh-copy>AI_URL_ANTHROPIC</fh-copy>. Si lo dejas vacío, se usa la de Anthropic.

## Cambiar el modelo de un agente

El modelo de cualquier agente se cambia en la pestaña **Agentes** de **Configuración de IA**. Los agentes del chat también lo tienen en su **ficha**, en el campo **Modelo IA**. Los cambios llegan solos a la API en menos de un minuto.

![Modelo en la ficha del agente](../docs_assets/images/AgentesIA/ficha-agente-modelo.png)

Los modelos de Claude se ofrecen con distintos niveles de **esfuerzo**: *low*, *medium*, *high*, *xhigh* y *max*. Con más esfuerzo, el modelo piensa más antes de contestar: acierta más en lo difícil, pero tarda más y cuesta más.

| Modelo | Para qué |
|---|---|
| **Claude Sonnet**, esfuerzo bajo o medio | Los agentes del ERP: buen equilibrio entre acierto, velocidad y coste |
| **Claude Haiku** | Tareas sencillas, cuando importa más el coste |
| **Claude Opus** | Lo más complejo |
| **GPT-5.4 mini, GPT-5.5, GPT-6…** | Si tu empresa trabaja con OpenAI. GPT-5.4 mini es rápido y económico |

## Qué modelo traen los agentes

- **En una instalación nueva**, todos los agentes nacen con **Claude**, así que solo hace falta la clave de Anthropic: los del chat con **Claude Sonnet** (esfuerzo medio), y los asistentes de las pantallas y AHORAMind con **Claude Haiku** (esfuerzo bajo).
- **Al actualizar**, cada agente **conserva el modelo que ya tenía**, salvo si es uno que OpenAI ha retirado o retira pronto (ver más abajo).
- **Hugo y Amanda**, que llegan nuevos, vienen con Claude Sonnet.

!!! warning "Si solo tienes clave de OpenAI"
    Al actualizar, tus agentes siguen con su modelo de OpenAI, pero **Hugo y Amanda** llegan con Claude. Tienes dos opciones: añadir la clave de Anthropic (`AI_TOKEN_ANTHROPIC`) o pulsar **Recomendados de OpenAI** en **Configuración de IA**.

## Modelos retirados por OpenAI

OpenAI apaga sus modelos antiguos y, desde ese día, un agente que los use deja de contestar. Por eso el ERP ya no ofrece estos:

- GPT-3.5 Turbo, GPT-4 Turbo, GPT-4.1 y GPT-4o, con sus versiones mini y nano;
- GPT-5, GPT-5 mini y GPT-5 nano, con todas sus variantes;
- o3 y o4-mini.

Al actualizar, una sola vez, los agentes que usaban uno de ellos pasan a **GPT-5.4 mini**, con la misma clave de OpenAI. Después puedes cambiarles el modelo en su ficha cuando quieras.
