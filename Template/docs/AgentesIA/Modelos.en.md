# AI models: Claude and OpenAI

Each ERP agent works with an **AI model**, which is what understands what you ask for and decides which tools to use. You can use models from two providers:

- **Anthropic**: the **Claude** models (Haiku, Sonnet, Opus…);
- **OpenAI**: the **GPT** models (GPT-4.1, GPT-5…).

Each agent has its own, so you can combine them: for example, Claude for the agents that work the most and a cheaper model for those that only query.

## Each provider's keys

Each provider needs its key. They're stored in the ERP's general configuration:

| Provider | Parameter | Where to get the key |
|---|---|---|
| OpenAI | <fh-copy>AI_TOKEN</fh-copy> | platform.openai.com/api-keys |
| Anthropic | <fh-copy>AI_TOKEN_ANTHROPIC</fh-copy> | console.anthropic.com (starts with `sk-ant-`) |

You only need the keys for the providers whose models you use.

!!! tip "The chat asks you for it"
    If you open an agent's chat and the key for its model's provider is missing, the chat's configuration screen tells you which key it needs, from which provider and where to get it, and saves it in its parameter.

![The chat asks for the missing Anthropic key](../docs_assets/images/AgentesIA/modelos-clave.png)

### Anthropic gateway (optional)

If your company accesses the Claude models through its own gateway instead of directly, enter its address in <fh-copy>AI_URL_ANTHROPIC</fh-copy>. If you leave it empty, Anthropic's is used.

## Changing an agent's model

The model is chosen in the **agent's record**, in the **Modelo IA** (AI model) field. Changes reach the API on their own in less than a minute.

![Model in the agent's record](../docs_assets/images/AgentesIA/ficha-agente-modelo.png)

The Claude models are offered with different levels of **effort**: *low*, *medium*, *high*, *xhigh* and *max*. With more effort, the model thinks more before answering: it gets difficult things right more often, but it takes longer and costs more.

| Model | What for |
|---|---|
| **Claude Sonnet**, low or medium effort | The ERP agents: a good balance between accuracy, speed and cost |
| **Claude Haiku** | Simple tasks, when cost matters most |
| **Claude Opus** | The most complex work |
| **GPT-4.1, GPT-5…** | If your company works with OpenAI |

## Which model the agents come with

- **In a new installation**, the standard agents start with **Claude Sonnet** (medium effort).
- **When updating**, each agent **keeps the model it already had**: the ERP doesn't change your agents' model.
- **Hugo and Amanda**, who are new, come with Claude Sonnet.

!!! warning "If you only have an OpenAI key"
    When updating, your agents keep their OpenAI model, but **Hugo and Amanda** arrive with Claude. You have two options: add the Anthropic key (`AI_TOKEN_ANTHROPIC`) or change their model to an OpenAI one in their record.
