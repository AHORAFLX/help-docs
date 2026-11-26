# Agents with Internet search

An agent can **search the Internet** to fill in what isn't in the ERP: the details of a new supplier, a company's registered address, a regulation… Each agent has it turned on or off separately, and it can be limited to specific sites.

By default, agents do **not** search the Internet. The exception is **Oswald** (creditor invoices): in new installations he comes with it turned on, limited to company information sites, so he can fill in the details of a new supplier. When updating from an earlier version it isn't turned on for any agent: you turn it on in the agent's record, with a model that can search.

!!! warning "Only with models that can search"
    The **Claude** models (Anthropic) and the OpenAI models served through the Responses API (the ones whose description says *Responses API*) can search the Internet. The other OpenAI models, such as GPT-5.2, cannot: if an agent uses one of them, change its model first.

## Turning it on

There are two ways, and both warn you about the risks (see below) and ask for confirmation before turning it on.

### From the agent's record

In the agent's record, check **Puede buscar en Internet** (Can search the Internet) and, if you want to limit it, type the sites in **Solo en los sitios** (Only on these sites), separated by commas.

![Agent record with Internet search](../docs_assets/images/AgentesIA/ficha-agente-internet.png)

### From AI configuration

In **Administración > Configuración de IA** (AI configuration), **Agentes** (Agents) tab, check **Internet** on the agent's row and type the sites in **Solo en los sitios**. All the agents are in view there. The screen assistants don't search the Internet, so it isn't allowed for them.

## Risks you should know about

1. **What it searches for leaves the company.** The search is performed by the AI provider: if the agent searches with customer names, tax IDs or amounts, that data goes outside. Be careful with personal data.
2. **A website may try to manipulate the agent.** A page may contain text written to trick it. If the agent can also create or change things in the ERP, the user still confirms every change, but it needs watching.
3. **What it finds may be false or out of date.** The agent has to say where it got it from, and the user has to check it before saving it.
4. **Each search costs extra**, with at most 3 per answer.

!!! tip "Limit it to a few sites"
    Narrowing the search to specific sites reduces all four risks. For company data, for example: <fh-copy>einforma.com, infocif.es, empresia.es, axesor.es</fh-copy>

## How you notice it in the conversation

When the agent uses the Internet, it says so and cites where it got each piece of data, so you can check it before saving it.

![Oswald looks up a new supplier's tax details on the Internet and cites his sources](../docs_assets/images/AgentesIA/oswald-internet.png)
