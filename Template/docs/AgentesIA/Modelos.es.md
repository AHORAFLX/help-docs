# Modelos de IA: Claude y OpenAI

Cada agente del ERP trabaja con un **modelo de IA**, que es el que entiende lo que le pides y decide qué herramientas usar. Puedes usar modelos de dos proveedores:

- **Anthropic**: los modelos **Claude** (Haiku, Sonnet, Opus…);
- **OpenAI**: los modelos **GPT** (GPT-4.1, GPT-5…).

Cada agente tiene el suyo, así que puedes combinarlos: por ejemplo, Claude para los agentes que más trabajan y un modelo más económico para los que solo consultan.

## Las claves de cada proveedor

Cada proveedor necesita su clave. Se guardan en la configuración general del ERP:

| Proveedor | Parámetro | Dónde se saca la clave |
|---|---|---|
| OpenAI | <fh-copy>AI_TOKEN</fh-copy> | platform.openai.com/api-keys |
| Anthropic | <fh-copy>AI_TOKEN_ANTHROPIC</fh-copy> | console.anthropic.com (empieza por `sk-ant-`) |

Solo hace falta la clave de los proveedores cuyos modelos uses.

!!! tip "El chat te la pide"
    Si abres el chat de un agente y falta la clave del proveedor de su modelo, la pantalla de configuración del chat te dice qué clave necesita, de qué proveedor y dónde sacarla, y la guarda en su parámetro.

![El chat pide la clave de Anthropic que falta](../docs_assets/images/AgentesIA/modelos-clave.png)

### Pasarela de Anthropic (opcional)

Si tu empresa accede a los modelos de Claude a través de una pasarela propia en lugar de directamente, indica su dirección en <fh-copy>AI_URL_ANTHROPIC</fh-copy>. Si lo dejas vacío, se usa la de Anthropic.

## Cambiar el modelo de un agente

El modelo se elige en la **ficha del agente**, en el campo **Modelo IA**. Los cambios llegan solos a la API en menos de un minuto.

![Modelo en la ficha del agente](../docs_assets/images/AgentesIA/ficha-agente-modelo.png)

Los modelos de Claude se ofrecen con distintos niveles de **esfuerzo**: *low*, *medium*, *high*, *xhigh* y *max*. Con más esfuerzo, el modelo piensa más antes de contestar: acierta más en lo difícil, pero tarda más y cuesta más.

| Modelo | Para qué |
|---|---|
| **Claude Sonnet**, esfuerzo bajo o medio | Los agentes del ERP: buen equilibrio entre acierto, velocidad y coste |
| **Claude Haiku** | Tareas sencillas, cuando importa más el coste |
| **Claude Opus** | Lo más complejo |
| **GPT-4.1, GPT-5…** | Si tu empresa trabaja con OpenAI |

## Qué modelo traen los agentes

- **En una instalación nueva**, los agentes estándar nacen con **Claude Sonnet** (esfuerzo medio).
- **Al actualizar**, cada agente **conserva el modelo que ya tenía**: el ERP no cambia el modelo de tus agentes.
- **Hugo y Amanda**, que llegan nuevos, vienen con Claude Sonnet.

!!! warning "Si solo tienes clave de OpenAI"
    Al actualizar, tus agentes siguen con su modelo de OpenAI, pero **Hugo y Amanda** llegan con Claude. Tienes dos opciones: añadir la clave de Anthropic (`AI_TOKEN_ANTHROPIC`) o cambiarles el modelo a uno de OpenAI en su ficha.
