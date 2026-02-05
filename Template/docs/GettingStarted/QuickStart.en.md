# Quick start

This guide covers the basic steps to set up and preview the documentation site.

## Step 1: Verify Python installation

Check if Python is installed:

=== "Windows"
    ```powershell
    python --version
    ```
    
    If Python is not installed, download from [python.org](https://www.python.org/downloads/) and ensure "Add Python to PATH" is checked during installation.

=== "macOS"
    ```bash
    python3 --version
    ```
    
    If not installed, install using Homebrew:
    ```bash
    brew install python3
    ```

=== "Linux"
    ```bash
    python3 --version
    ```
    
    If not installed:
    ```bash
    sudo apt update
    sudo apt install python3 python3-pip
    ```

## Step 2: Download the template

Download the project template:

<button class="button" onclick="downloadTemplateZip()">Download ZIP</button>

Extract the ZIP file to a location where you want to work on your documentation (e.g., `C:\Projects\MyDocs` or `~/Projects/MyDocs`).

## Step 3: Install MkDocs

Open a terminal/command prompt and install MkDocs with required plugins:

```bash
pip install mkdocs mkdocs-material mkdocs-static-i18n mkdocs-glightbox pymdown-extensions
```

## Step 4: Navigate to your project

In the terminal, go to your extracted template folder:

```bash
cd path/to/your/template
```

For example:
```bash
cd C:\Projects\MyDocs\Template
```

## Step 5: Start the preview server

Run the development server:

```bash
mkdocs serve
```

You should see output like:
```
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  Documentation built in 0.52 seconds
INFO    -  [12:34:56] Serving on http://127.0.0.1:8000/
```

## Step 6: View your site

Open your browser and go to:

```
http://127.0.0.1:8000/
```

You should see the documentation homepage! The site will automatically reload whenever you save changes to any file.

## Step 7: Make your first edit

1. Open the file `docs/index.en.md` or create a new `en.md` file 
2. Modify the file as you want it
3. Save the file
4. Watch your browser automatically refresh with the change!

## Next steps

Now that you have everything working:

1. **Understand navigation** - Learn [Navigation setup](VisualStructure.md) to see how menus are generated
2. **Explore file structure** - Check [File organization](FileStructure.md) for folder structure and conventions
3. **Start writing** - Read [Basic markdown](../Components/BasicMarkdown.md) to create your first content

## Common issues

**Port already in use?**
```bash
mkdocs serve -a 127.0.0.1:8001
```

**Module not found errors?**  
Make sure you installed all dependencies:
```bash
pip install -r requirements.txt
```

If requirements.txt doesn't exist, install manually:
```bash
pip install mkdocs-material mkdocs-i18n mkdocs-glightbox
```

**Changes not showing?**  
Try the clean flag:
```bash
mkdocs serve --clean
```