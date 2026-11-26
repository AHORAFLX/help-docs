# Selina - Purchasing Agent

![Selina](../docs_assets/images/AgentesIA/selina-avatar.png){ width="96" align=right }

Selina is the agent for the **purchasing cycle**: supplier orders, delivery notes and invoices, suppliers and items. You ask her in plain language and she answers with the ERP's real data, draws you a chart, opens documents for you and, if you ask her to, creates delivery notes, invoices or updates documents.

> Hola, ¿en qué puedo ayudarte hoy? (Hi, how can I help you today?)

She's meant for the purchasing department, procurement managers and financial management. You'll find her in the chat's list of agents (see [ERP AI agents](Introduccion.md)).

## What she can do

| You ask her for… | Selina… |
|---|---|
| A query | Searches the purchasing data and gives you the answer or the list |
| A chart | Draws it in the chat, as vertical or horizontal bars |
| To open or print | Opens or prints a document, a supplier, an item or a filtered collection |
| To create a delivery note or an invoice | Generates the delivery note or the invoice for the supplier orders and delivery notes you tell her |
| To update | Updates supplier delivery notes and invoices |
| To create a record | Creates suppliers and items |

Selina works **with your user**: she only sees the suppliers, series and warehouses you have access to in the ERP.

## Queries and charts

She sees supplier orders with their lines, supplier delivery notes and invoices (including creditor invoices), suppliers with their contacts, items with their stock per warehouse, and the purchasing series. Some examples:

- *«Muéstrame los pedidos de proveedor pendientes»* (Show me the pending supplier orders)
- *«Dame todos los datos del pedido de proveedor 4321»* (Give me all the details of supplier order 4321)
- *«Pedidos de proveedor pendientes de facturar entre el 1 de marzo y el 30 de abril»* (Supplier orders pending invoicing between 1 March and 30 April)
- *«Total de compras del último mes, ordenado por proveedor»* (Total purchases last month, sorted by supplier)
- *«Total de compras agrupado por proveedor y artículo»* (Total purchases grouped by supplier and item)
- *«Lista las facturas de proveedor por fecha»* (List the supplier invoices by date)
- *«Dime el total de las facturas de acreedor de este mes»* (Tell me the total of this month's creditor invoices)
- *«Cuenta los artículos comprados en el último mes»* (Count the items purchased last month)
- *«¿Cuánto stock tengo del artículo TORNILLO-M8 en cada almacén?»* (How much stock do I have of item TORNILLO-M8 in each warehouse?)
- *«Genera una gráfica con las compras de cada proveedor en el último trimestre»* (Make a chart of each supplier's purchases in the last quarter)

For Selina, **pending orders** are those in status PENDIENTE (pending). If an answer also includes those in status ALBARANEADO (delivered, but pending invoicing), she tells you so.

When you ask her for a list of documents, she gives you each one's **Id**, series, number, date, status and supplier. With the Id you can then ask her to act on one from the list: *«factura el segundo»* (invoice the second one), *«abre el 29»* (open 29).

!!! tip "If the number repeats"
    Numbering restarts every year, so order 5 can exist in several years or series. If you give her a number that matches several documents, Selina shows you all of them and asks which one you mean. She doesn't choose.

The delivery note number and the invoice number **that come from the supplier** aren't the document's Id in the ERP. Selina tells them apart: you can search by them, and she uses the Id to act.

Selina doesn't show you the SQL query she used, but if you ask for it she gives it to you.

## Opening and printing

Selina opens in the ERP a **supplier order**, **delivery note** or **invoice**, a **supplier** or an **item**, or a **collection** of any of them with the filter you tell her. She also prints them.

- *«Abre los proveedores de tipo Nacional»* (Open the suppliers of type Nacional, domestic)
- *«Abre las facturas de proveedor del tercer trimestre de 2024»* (Open the supplier invoices from the third quarter of 2024)
- *«Abre los pedidos del proveedor EXTRANJERO»* (Open the orders of supplier EXTRANJERO)
- *«Imprime el pedido de proveedor 4321»* (Print supplier order 4321)

If you give her a name instead of a code, she looks it up first. To open a single record, the details have to identify only one; if not, she asks you.

## Creating delivery notes, invoicing and updating

Selina follows the ERP's purchasing cycle. In purchasing, documents carry the supplier's details, so sometimes she asks you for them before doing anything:

| Action | On what | What she asks you for |
|---|---|---|
| **Create the delivery note** for an order | Orders in status PENDIENTE | The delivery note's date. The supplier's delivery note number is optional |
| **Invoice** an order | Orders in status PENDIENTE, with no delivery notes | The supplier's invoice number. The invoice always gets today's date |
| **Invoice** a delivery note | Delivery notes that aren't invoiced | The supplier's invoice number and the invoice date |
| **Update** a delivery note | Delivery notes in status ALBARAN (delivery note) | Nothing |
| **Update** an invoice | Invoices in status FACTURA NO ACTUALIZADA (invoice not updated) | Nothing. The supplier must have a tax ID (NIF) |

If any detail is missing, she asks you for all of it in a single message. She never makes up a supplier's invoice or delivery note number.

She tells you the result document by document: the Id of the delivery note or invoice she generated or, if one failed, the reason.

- *«Albaranea el pedido de proveedor 12 con fecha de hoy y albarán del proveedor AB-778»* (Create the delivery note for supplier order 12, dated today, with supplier delivery note AB-778)
- *«Factura el albarán 34: es la factura F-2026-118 del proveedor, del 20 de noviembre»* (Invoice delivery note 34: it's the supplier's invoice F-2026-118, dated 20 November)
- *«Actualiza las facturas de proveedor de esta semana»* (Update this week's supplier invoices)

!!! warning "Each document, its own number"
    Each supplier delivery note and invoice has **its own number**. If you want to process several at once, Selina can't give them all the same one: she'll ask you for each one's number or process them one by one.

!!! warning "One document per order or delivery note"
    Selina generates one delivery note per order and one invoice per delivery note. She **doesn't group** several orders into one delivery note or several delivery notes into one invoice, and she doesn't split a document into several. Do that from the ERP.

## Creating suppliers and items

- *«Crea el proveedor FICTICIO con NIF B12345674»* (Create supplier FICTICIO with tax ID B12345674)
- *«Crea el artículo TORNILLO-M8, tornillo inoxidable de métrica 8»* (Create item TORNILLO-M8, stainless steel M8 screw)

For a **supplier** she needs at least the name and the tax ID (NIF). If you don't tell her the type, she creates it as Nacional (domestic); it can also be Comunitario (EU), Extranjero (foreign) or Sujeto pasivo (reverse charge). She leaves empty any details you don't give her: she doesn't make them up. If there's already a supplier with that tax ID, she doesn't create another one: she tells you which one it is.

For an **item** she needs the code and the description. If you don't give her the code, she asks you for it or suggests one based on the description.

When she's done she gives you the code of the new record, but she doesn't open it: ask her if you want to see it.

## What she asks you to confirm

| If you ask her to… | Selina… |
|---|---|
| Create the delivery note, invoice or update **a single document** | Does it without asking, as soon as she has the details she needs |
| Do it with **several documents at once** | Shows you which ones and asks *«¿Quieres continuar?»* (Do you want to continue?) before touching anything |
| Do something with a number that exists in several years or series | Shows you the candidates and asks which one |

The confirmation is valid for those same documents and for 15 minutes. If you take longer or change the list, she asks you again.

!!! warning "With a single document, she acts"
    If you only want to know whether something can be done, say so: *«¿se puede facturar el albarán 34? Solo pregunto»* (can delivery note 34 be invoiced? I'm only asking). Selina will check its status without invoicing it. What Selina generates can't be undone from the chat.

## What Selina doesn't do

- **Batches.** She doesn't create delivery notes for or invoice orders with batch-tracked items, and she doesn't invoice or update delivery notes with unassigned batches. She tells you so: assign the batch and do the operation from the ERP.
- **Locks.** If the document or the supplier is locked, she doesn't go on. Unlock them in the ERP.
- **Invoices from suppliers without a tax ID.** The ERP doesn't update them: complete the supplier's record first.
- **Invoice date when invoicing an order.** It's always today's. If you need another date, create the order's delivery note and then invoice the delivery note, or do it from the ERP.
- **Changing or deleting.** She doesn't change the data of orders, delivery notes, invoices, suppliers or items, and doesn't delete them.
- **Other topics.** She only talks about the ERP's purchasing cycle. For sales, talk to [Bruce](Bruce.md).

Queries return at most 50 rows unless you ask for more. By default, Selina **doesn't search the Internet**: see [Agents with Internet search](Internet.md).

## Model and keys

In a new installation, Selina works with **Claude Sonnet**. She can use a Claude (Anthropic) or OpenAI model: an administrator manages the model and the providers' keys. It's all in [AI models](Modelos.md).
