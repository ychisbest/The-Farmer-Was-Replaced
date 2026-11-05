---
title: "The Farmer Was Replaced VS Code Setup: External Editor and File Watcher"
description: "Use VS Code with The Farmer Was Replaced: where the .py save files are, how __builtins__.py gives you IntelliSense, turning on File Watcher, and why new files need a reload."
date: 2026-11-05
---

The in-game editor is enough to finish the game, but long scripts are easier in **Visual Studio Code**. The game supports this officially: the in-game docs have an **External Editor** page. Here is the full setup.

## How it works

- The game saves every code window as a **`.py` file** in your save folder.
- Each save also contains **`__builtins__.py`** with definitions of the in-game functions (`move`, `harvest`, `can_harvest`, `measure`…), so Python IntelliSense can autocomplete them.
- The in-game language is **not real Python**, but it is close enough that Python tooling "works decently".
- The game **ignores `import` statements**, so you can add them to help VS Code find functions defined in your other files.

## Step 1: find the save folder

In the game, open **Load** and click **Open Folder**. That opens the folder of the current save.

On Windows the saves are usually under:

```
C:\Users\<you>\AppData\LocalLow\TheFarmerWasReplaced\TheFarmerWasReplaced\Saves\<save name>
```

On macOS, use the same **Open Folder** button to find the location.

## Step 2: open it in VS Code

1. In VS Code choose **File → Open Folder…** and pick the save folder itself, so `__builtins__.py` sits in the workspace.
2. Install the **Python** extension (Pylance) for autocomplete and go-to-definition.
3. Open any of your code files and type `har` — `harvest()` should autocomplete.

If you split code into files, add `from utils import *` (or similar) at the top. The game skips the import line, but VS Code now knows where your helpers come from.

## Step 3: turn on File Watcher

In the game's **Options**, enable **File Watcher**. Now every save in VS Code shows up in the game without reloading. Press execute in game to run the new version.

## Creating and deleting files

File Watcher only picks up **edits to existing files**. If you create or delete a file outside the game:

- Either create the file **in the game first**, then edit it in VS Code, or
- Use **Load** to reload the save so the new file appears.

**Warning:** don't press **Save** before **Load** after creating files externally — saving first can overwrite the folder and wipe files the game hasn't imported yet.

## Useful VS Code settings

- Turn off or relax linters (flake8, pylint): they flag game functions and features the game doesn't support.
- Use 4-space indentation, like the in-game editor.
- Keep each drone task in its own file and a small `main` file that calls them — this also works well with [multiple drones](/blog/multiple-drones/).

## FAQ

**Can I use VS Code with The Farmer Was Replaced?**
Yes. Code is stored as `.py` files; open the save folder in VS Code and enable File Watcher.

**Why doesn't my new file show up in the game?**
File Watcher only reloads existing files. Create the file in game first, or reload the save via Load.

**Is the game language real Python?**
No, it is Python-like. Most syntax matches, but not every Python feature or library is available.

**Does it work with other editors?**
Yes, any editor that edits `.py` files works; VS Code just has the best Python autocomplete.

## Related pages

- [Basic codes](/basic-codes/)
- [The Miner Was Replaced (DLC)](/blog/the-miner-was-replaced/)
- [GitHub solutions for The Farmer Was Replaced](/github/)
