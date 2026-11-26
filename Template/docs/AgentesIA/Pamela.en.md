# Pamela - Treasury Agent

![Pamela](../docs_assets/images/AgentesIA/pamela-tarjeta.png){ width="160" align=right }

Pamela is the **treasury** agent: collections, payments, due dates, remittances and banks. You ask her in your own words what you're owed, what you owe or what's falling due, and she answers with the data in your ERP. She also records collections and payments, prepares collection remittances and opens in the ERP whatever you need to see.

> Hola, ¿qué quieres revisar de tesorería? (Hi, what would you like to review in treasury?)

She's designed for whoever handles the company's treasury, administration or finance. You'll find her in the chat's list of agents.

Pamela doesn't handle journal entries, VAT or tax forms: that's [Bárbara](Barbara.md)'s job.

## What she can do for you

### Query

Pamela queries the ERP's real data before giving you a figure or a list.

| You ask her about… | For example |
|---|---|
| What a customer owes you | *«¿Cuánto me debe el cliente Martínez?»* (How much does customer Martínez owe me?) |
| What you owe a supplier | *«¿Cuánto debo a Suministros Gómez?»* (How much do I owe Suministros Gómez?) |
| Pending collections and payments | *«¿Qué pagos tengo pendientes esta semana?»* (What payments do I have pending this week?) |
| Due dates | *«Dame los vencimientos de la próxima semana»* (Give me next week's due dates) |
| A summary | *«Resumen de cobros y pagos pendientes»* (Summary of pending collections and payments) (she gives you both totals and the net balance) |
| Remittances | *«Muéstrame las remesas de cobro del último trimestre»* (Show me last quarter's collection remittances) |
| The company's bank accounts | *«¿Qué cuentas bancarias tenemos y con qué IBAN?»* (Which bank accounts do we have and with which IBAN?) |

She also makes **charts** with the data she queries: *«Gráfica de los cobros pendientes agrupados por mes»* (Chart of pending collections grouped by month), *«Gráfica de pagos pendientes por proveedor»* (Chart of pending payments by supplier).

When she shows you a list of documents, she includes their internal number. That way you can carry on with *«registra el primero»* (record the first one) or *«abre ese»* (open that one) without repeating the details.

### Open and print in the ERP

| You ask her… | Pamela… |
|---|---|
| *«Abre la cartera de pagos»* (Open the payments portfolio) | Opens the whole portfolio, unfiltered |
| *«Abre la cartera de cobros del cliente Pérez»* (Open customer Pérez's collections portfolio) | Opens the portfolio filtered by that customer |
| *«Abre la remesa de ayer»* (Open yesterday's remittance) | Finds the remittance and opens it |
| *«Imprime los cobros vencidos de Martínez»* (Print Martínez's overdue collections) | Prints them |

She opens and prints collections, payments, collection remittances, bank accounts, customers and suppliers, one at a time or as a list.

### Recording collections and payments

Pamela records the collection or payment of a **bill that already exists** in the portfolio:

- *«Registra el cobro de la factura 125 de Martínez»* (Record the collection of Martínez's invoice 125)
- *«Marca como pagado el vencimiento de la factura de Suministros Gómez»* (Mark the instalment of Suministros Gómez's invoice as paid)

The bill is recorded as it stands in the portfolio: you can't give her a different amount. For a partial collection or payment, do it from the ERP.

Before recording it, the ERP checks that the bill has a bank direct debit account and, for payments, that it isn't already paid. If something is missing, Pamela tells you what it is and records nothing.

### Collection remittances

- **Create a remittance**: *«Crea una remesa de cobros en el banco Sabadell»* (Create a collection remittance at Banco Sabadell). If you don't name the bank, she uses the company's first active bank account that has an IBAN. The account must have an IBAN and its bank a SWIFT code; if not, she tells you and creates nothing.
- **Add collections to a remittance**: *«Mete en esa remesa los cobros pendientes de Martínez»* (Add Martínez's pending collections to that remittance). The remittance must not have been posted yet, and each collection must be in *Recibido/Aceptado* (Received/Accepted) status, not blocked and with no payments on account. If one doesn't qualify, she tells you why.

!!! info "Collection remittances only"
    Pamela can look up payment remittances, but she doesn't create them, add bills to them, or open or print them. That's done from the ERP.

## What she asks you to confirm

**Which one, if there are several.** Invoice numbering restarts every year, so the same number can exist in several years or series. If your request matches more than one document, or several customers or suppliers with similar names, Pamela shows you the candidates and waits for you to choose. She doesn't choose herself, not even the most recent one.

!!! warning "Recording doesn't ask for a separate yes"
    Recording a collection or a payment has no confirmation step of its own: if the request is clear and there's only one bill, Pamela can record it straight away. The same applies when creating a remittance or adding a collection to one. Make sure which bill you mean before asking.

## What Pamela doesn't do

- **She doesn't create standalone collections or payments.** Collections and payments are born from invoices when they're created in the ERP. If you ask her, she explains this and offers to open the portfolio.
- **She doesn't post or unpost remittances**, doesn't remove or move a bill from a remittance, doesn't generate the bank file (SEPA, formats 19, 32 or 58) and doesn't send remittances.
- **She doesn't work with payment remittances**, except to look them up.
- **She doesn't delete or change** collections, payments or remittances.
- **She doesn't know bank balances.** She knows the company's bank accounts, not their movements. For the accounting balance of a bank account, ask [Bárbara](Barbara.md): *«¿Qué saldo tiene la 572?»* (What's the balance of 572?).
- **She doesn't make up data.** If a query returns nothing, she tells you.

## Model and keys

Pamela works with a **Claude** (Anthropic) or **OpenAI** model. In a new installation she comes with Claude Sonnet. An administrator changes the model and keys in **Administración > Configuración de IA** (AI configuration): see [AI models](Modelos.md).

By default Pamela doesn't search the Internet. To turn it on, see [Agents with Internet search](Internet.md).
