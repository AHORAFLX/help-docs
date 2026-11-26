# Restricting agents by security group

You can decide which users can use each AI agent, just as you do with menus, nodes or reports: with **security groups**. Each agent is one more security entity, **Agente IA** (AI agent).

## How it works

- Each user only sees in the agents panel the agents assigned to one of their security groups, and can only chat with those.
- The API checks it too: if a user tries to open the chat of an agent that isn't assigned to them, for example through a direct link, they get a message saying they have no access and receive no answer from the agent.
- Access by company and branch still applies, on top of the groups.
- The rule applies to every user, administrators included. That said, in **Administración > Configuración de IA** (Administration > AI configuration) administrators always see every agent (see [AI models](Modelos.md)).

## What comes assigned

So that nobody is left without AI, every agent comes assigned to the **GRUPOAHORA** group:

- **When updating**, the agents that already existed are assigned to GRUPOAHORA.
- **New agents**, including the ones you create, are born assigned to GRUPOAHORA.

From there, each company decides what to restrict.

!!! warning "Users outside GRUPOAHORA"
    If you have users who don't belong to GRUPOAHORA (for example, restricted users with a group of their own), they won't see any agent until you assign one to their group. Check the permissions of the **Agente IA** entity right after updating.

## Restricting an agent to some groups

This is done in **Administración > Configuración > Admon > Otros > Administración de permisos** (Administration > Configuration > Admin > Other > Permissions administration).

First, take it away from GRUPOAHORA:

1. In the **Grupos de seguridad** (Security groups) tree on the left, select **GRUPOAHORA**.
2. In **Entidad** (Entity), choose **Agente IA**. With **Ver solo permisos asignados** (Show only assigned permissions), the agents assigned to that group appear.
3. Check the agent or agents you want to restrict.
4. Click **Desasignar** (Unassign) and confirm. From then on, users who only had the agent through GRUPOAHORA no longer see it.

Then, give it to the groups that should use it:

1. In the tree on the left, select the group.
2. In **Entidad**, choose **Agente IA** and check **Ver permisos asignables** (Show assignable permissions) to see every agent.
3. Check the agents.
4. Click **Asignar** (Assign) and confirm.

The **Asignar permisos** (Assign permissions) and **Desasignar permisos** (Unassign permissions) options are also in the menu that appears when you right-click the list of agents.

!!! tip "Which groups have an agent"
    Hover over an agent in the list: you'll see which groups have it assigned.

!!! warning "An agent with no group is seen by nobody"
    If you remove an agent from all its groups, no user can use it. To open it up again, assign it back to GRUPOAHORA or to the right group.

## Things to bear in mind

- **The permission covers the whole agent, not individual data.** Whoever has access to an agent can query everything that agent queries. You can't allow some queries and deny others within the same agent.
- **Hidden columns don't carry over.** If you've hidden grid columns from a user (for example, the price of purchase lines), the agents don't take that into account. To keep that information from them, don't assign them the agents that query it.
- **Several agents can query the same information.** Before considering an area restricted, check which agents query it (see the example below).
- **Your own agents**: check which views each one queries in the **Modelo Datos** (Data model) tab of its record (see [Creating your own agent](CrearAgente.md)).

## Example: a user who must not see purchasing

With the standard data model, these agents query purchasing information. A user who must not see purchase costs or prices must not have any of them assigned:

| Agent | Purchasing information it queries |
|---|---|
| **Selina** (purchasing) | Supplier orders, delivery notes and invoices, with their lines and prices |
| **Oswald** (creditor invoices) | Supplier invoices |
| **Pamela** (treasury) | Supplier invoices |
| **Alfred** (cross-area queries) | Supplier invoices |
| **Barbara** (accounting and tax) | Accounting entries, including purchasing ones |

**Bruce** (sales) doesn't query purchase costs or prices with the standard data model, so the user can keep him if needed.

## Frequently asked questions

### Do agents query with the user's permissions or with a service's?

With the logged-in user's: queries run with their SQL Server user and their ERP session. That's why their access by company and branch applies. Security groups, on the other hand, are an ERP setting, not a SQL Server one: that's why they are checked separately, as explained on this page.

### Can I remove a user's SQL Server permission on the agents' views?

It's not a supported configuration:

- The agent loses those views or fails when querying them, instead of saying there's no access.
- It doesn't work if the user is a SQL Server administrator.
- It would have to be checked by hand on every update.

To restrict agents, use security groups.

### Does "Ocultar agente" work as a restriction?

No. **Ocultar agente** (Hide agent) removes the agent from the panel for every user at once: it's meant for withdrawing an agent your company doesn't use (see [Creating your own agent](CrearAgente.md#hiding-or-showing-an-agent-in-the-panel)). To decide who uses it, use security groups.
