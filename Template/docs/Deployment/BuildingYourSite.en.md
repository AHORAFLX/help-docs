# Building and Deploying with Mike

Learn how to manage versioned documentation deployments using Mike.

## Overview

Mike is the version management tool that will generate the documentation site, all in HTML so that this branch can be directly uploaded to the server, within the `gh-pages` branch.

1. Builds documentation for specific versions
2. Manages multiple versions simultaneously
3. Stores versions in the `gh-pages` branch
4. Automatically commits changes (but never pushes)
5. Provides version selection for users

!!! important "Git Branch Storage"
    All deployed versions are stored in the **`gh-pages`** branch of your repository. Mike automatically creates and manages this branch.

!!! warning "Manual Push Required"
    Mike commits changes to the `gh-pages` branch but **never pushes automatically**. You must push manually to publish your changes.

## Installation

Install Mike using pip:

```bash
pip install mike
```

## Deploying a new version

To deploy a new version of your documentation:

```bash
mike deploy --update-aliases <version> latest
mike set-default <version>
```

**Example**: Deploy version 1.0 as latest:

```bash
mike deploy --update-aliases 1.0 latest
mike set-default 1.0
```

- The first command creates the new version and assigns the "latest" alias to identify it as the current version
- The second command sets it as the default, ensuring users see this version when visiting the base URL

## Updating existing versions

To update an existing version:

```bash
mike deploy --update <version>
```

**Example**: 

Update version 1.0.0:

```bash
mike deploy --update 1.0
```

## Deleting Versions

### Delete a specific version

To remove a version from deployment:

```bash
mike delete <version>
```

**Example**: 

Delete version 1.2:

```bash
mike delete 1.2
```

### Delete multiple versions

Delete several versions at once:

```bash
mike delete <version1> <version2> <version3>
```

**Example**:

Delete versions 1.2, 1.3 and 1.4

```bash
mike delete 1.2 1.3 1.4
```

## List all versions

View all deployed versions:

```bash
mike list
```

Output example:
```
1.0.0 [latest]
1.1.0
2.0.0 [stable]
```

## Understanding the gh-pages Branch

Mike stores all versions in the **`gh-pages`** branch of your repository as html files that will be deploy the docs website with it's version selector already implemented:

```
gh-pages branch
├── 1.0.0/
│   ├── index.html
│   ├── assets/
│   └── ...
├── 1.1.0/
│   ├── index.html
│   ├── assets/
│   └── ...
├── 2.0.0/
│   ├── index.html
│   ├── assets/
│   └── ...
└── versions.json    # Version metadata
```

## Common Issues

### Mike not found

**Error**: 

`mike: command not found`

**Solution**:

```bash
pip install mike
```

### Permission denied on gh-pages

**Error**: 

`Permission denied when pushing to gh-pages`

**Solution**:

- Ensure you have write access to the repository
- Check your Git credentials

### Versions not showing

**Issue**: 

Deployed versions don't appear on the site

**Solution**:

1. Verify you pushed the `gh-pages` branch:
   ```bash
   git push origin gh-pages
   ```
2. Check GitHub Pages is enabled in repository settings
3. Ensure GitHub Pages is set to use `gh-pages` branch

## Next steps

- [Troubleshooting](../Reference/Troubleshooting.md) - Solve common deployment issues
