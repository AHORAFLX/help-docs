# Building and Deploying with Mike

Learn how to manage versioned documentation deployments using Mike.

## Overview

Mike is a version management tool for MkDocs that allows you to maintain multiple versions of your documentation. It:

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

## Deploying New Versions

### Deploy a new version

To deploy a new version of your documentation:

```bash
mike deploy <version> <alias>
```

**Example**: Deploy version 1.0.0 as latest:

```bash
mike deploy 1.0.0 latest
```

This command:

- Builds your documentation
- Creates/updates version 1.0.0 in `gh-pages` branch
- Assigns the "latest" alias to this version
- Commits changes (but doesn't push)

### Deploy and update default version

To deploy and set as the default version (shown when users first visit):

```bash
mike deploy <version> <alias> --update-aliases
```

**Example**:

```bash
mike deploy 2.0.0 latest --update-aliases
```

## Updating Existing Versions

### Update version content

To rebuild and update an existing version:

```bash
mike deploy <version> --update-aliases
```

**Example**: 

Update version 1.0.0:

```bash
mike deploy 1.0.0 --update-aliases
```

!!! tip
    Use `--update-aliases` to keep existing aliases intact when updating.

### Change version aliases

Reassign aliases to different versions:

```bash
mike alias <version> <new-alias>
```

**Example**: Move "latest" alias to version 2.0.0:

```bash
mike alias 2.0.0 latest
```

## Deleting Versions

### Delete a specific version

To remove a version from deployment:

```bash
mike delete <version>
```

**Example**: Delete version 0.9.0:

```bash
mike delete 0.9.0
```

### Delete multiple versions

Delete several versions at once:

```bash
mike delete <version1> <version2> <version3>
```

**Example**:

```bash
mike delete 0.8.0 0.9.0 1.0.0-beta
```

!!! warning
    Deletion is immediate and removes the version from the `gh-pages` branch. Always verify before deleting.

## Managing Versions

### List all versions

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

### Set default version

Set which version users see by default:

```bash
mike set-default <version>
```

**Example**: 

Set version 2.0.0 as default:

```bash
mike set-default 2.0.0
```

## Understanding the gh-pages Branch

### Where versions are stored

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
