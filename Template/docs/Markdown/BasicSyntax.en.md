# Basic Markdown Syntax

Markdown is a lightweight markup language that lets you write formatted content using a simple, readable syntax. This guide covers the essential elements you need to create professional documentation.

## Headings

Headings organize your content into hierarchical sections:

```markdown
# Level 2 heading
## Level 3 heading
## Level 4 heading
```

Level 1 (`#`) is generally reserved for the document title, which is displayed in the navigation bar.
{ .fh-info-card }

## Text formatting

## Basic emphasis

```markdown
**Bold text**
*Italic text*
***Bold and italic text***
~~Strikethrough text~~
`Inline code`
```

**Result:**

* **Bold text**
* *Italic text*
* ***Bold and italic text***
* ~~Strikethrough text~~
* `Inline code`

## Paragraphs and line breaks

To create a new paragraph, leave a blank line between two blocks of text.

For a line break without starting a new paragraph, end the line with two spaces.

## Lists

## Unordered lists

```markdown
- First item
- Second item
  - Sub-item 1
  - Sub-item 2
- Third item
```

**Result:**

* First item
* Second item

  * Sub-item 1
  * Sub-item 2
* Third item

## Ordered lists

```markdown
1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
```

**Result:**

1. First step
2. Second step
3. Third step

   1. Sub-step A
   2. Sub-step B

## Links

```markdown
[Go to another document](../OtherFolder/OtherSection.en.md)
[Link text](https://www.example.com)
```

Internal links are case-sensitive and spaces are converted to hyphens.
{ .fh-warning-card }

## Images

```markdown
![Alt text](/path/to/image.png)
![Image with title](/path/to/image.png "Image title")
```

**Example:**

![Logo](/docs_assets/images/logos/AHORA-white.svg){ width="300" style="filter: brightness(0) saturate(100%) invert(100%) sepia(10%) saturate(5563%) hue-rotate(305deg) brightness(105%) contrast(81%);" }

## Code blocks

## Inline code

Use single backticks:

`const hello = 'code'` produces `const hello = 'code'`

## Code blocks

Use three backticks followed by the language:

````markdown
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```
````

**Result:**

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

Supported languages: `python`, `javascript`, `java`, `csharp`, `sql`, `bash`, `json`, `xml`, `yaml`, etc.

## Blockquotes

Use the `>` symbol to create quotes:

```markdown
> This is a quote.
> It can have multiple lines.
>
> And multiple paragraphs.
```

**Result:**

> This is a quote.
> It can have multiple lines.
>
> And multiple paragraphs.

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
```

**Result:**

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |

## Column alignment

```markdown
| Left     | Center | Right   |
|:---------|:------:|--------:|
| Text     | Text   | Text    |
```

**Result:**

| Left        | Center |       Right |
| :---------- | :----: | ----------: |
| Sample text |  Text  | Sample text |

## Horizontal rules

Create visual separators with three or more hyphens:

```markdown
---
```

**Result:**

---

## Task lists

```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task
```

**Result:**

* [x] Completed task
* [ ] Pending task
* [ ] Another pending task

## Escaping special characters

If you need to show a Markdown special character literally, use a backslash `\`:

```markdown
\* This asterisk won’t create a list
\# This won’t be a heading
```

**Result:**

* This asterisk won’t create a list
# This won’t be a heading

## Embedded HTML

Markdown allows you to use HTML when you need more control:

```html
<div style="background-color: #88e7c3; padding: 10px;">
  <p>Custom HTML content</p>
</div>
```

**Result:**

<div style="background-color: #88e7c3; padding: 10px;">
  <p>Custom HTML content</p>
</div>

## Next steps

Now that you know the basic syntax, learn about:

* [Advanced Markdown elements](AdvancedElements.en.md) — Extensions and additional features
* [Custom styles and components](../Styles/CustomComponents.en.md) — Special visual elements
* [Writing best practices](../BestPractices/EffectiveWriting.en.md) — Tips for clear content

With this foundation, you can now create complete and professional documentation.