# Agentes con búsqueda en Internet

Un agente puede **buscar en Internet** para completar lo que no está en el ERP: los datos de un proveedor nuevo, la dirección fiscal de una empresa, una normativa… Cada agente lo tiene activado o no por separado, y se puede limitar a unos sitios concretos.

Por defecto, los agentes **no** buscan en Internet. La excepción es **Oswald** (facturas de acreedor): en las instalaciones nuevas nace con Internet activado, limitado a sitios de información de empresas, para completar los datos de un proveedor nuevo. Al actualizar desde una versión anterior no se activa en ningún agente: se enciende en su ficha, con un modelo que sepa buscar.

!!! warning "Solo con modelos que saben buscar"
    Buscan en Internet los modelos de **Claude** (Anthropic) y los de OpenAI por la API de Responses (los que en su descripción dicen *Responses API*). Los demás de OpenAI, como GPT-5.2, no saben buscar: Amanda no lo enciende en un agente con uno de ellos y te dice que le cambies antes el modelo en su ficha.

## Activarlo

Hay dos maneras.

### Desde la ficha del agente

En la ficha del agente, marca **Puede buscar en Internet** y, si quieres limitarlo, escribe los sitios en **Solo en los sitios**, separados por comas.

![Ficha del agente con la búsqueda en Internet](../docs_assets/images/AgentesIA/ficha-agente-internet.png)

### Pidiéndoselo a Amanda

> Deja que Selina busque en Internet, solo en einforma.com e infocif.es.

Antes de activarlo, Amanda te explica los riesgos y espera tu sí.

![Amanda explica los riesgos antes de activar Internet](../docs_assets/images/AgentesIA/amanda-internet.png)

Para quitarlo: *«que Selina ya no busque en Internet»*.

## Riesgos que conviene conocer

1. **Lo que busca sale de la empresa.** La búsqueda la hace el proveedor de IA: si el agente busca con nombres de clientes, NIF o importes, esos datos salen fuera. Cuidado con los datos personales.
2. **Una web puede intentar manipular al agente.** Una página puede traer texto escrito para engañarle. Si el agente además puede crear o cambiar cosas en el ERP, cada cambio lo sigue confirmando el usuario, pero hay que vigilarlo.
3. **Lo que encuentra puede ser falso o estar desactualizado.** El agente tiene que decir de dónde lo saca, y el usuario comprobarlo antes de grabarlo.
4. **Cada búsqueda cuesta aparte**, como mucho 3 por respuesta.

!!! tip "Limítalo a unos sitios"
    Acotar la búsqueda a unos sitios concretos reduce los cuatro riesgos. Para datos de empresas, por ejemplo: <fh-copy>einforma.com, infocif.es, empresia.es, axesor.es</fh-copy>

## Una regla que no se salta

Un agente preparado por Amanda o por Hugo **solo puede buscar en Internet si su agente de partida también puede**. Si se le quita al agente de partida, lo pierden también todos los agentes preparados a partir de él. Un agente sin agente de partida no puede buscar en Internet.

## Cómo se nota en la conversación

Cuando el agente usa Internet, lo dice y cita de dónde ha sacado cada dato, para que puedas comprobarlo antes de grabarlo.

![Oswald busca en Internet los datos fiscales de un proveedor nuevo y cita sus fuentes](../docs_assets/images/AgentesIA/oswald-internet.png)
