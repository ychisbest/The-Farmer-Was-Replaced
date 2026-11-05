---
title: "The Farmer Was Replaced mit VS Code: externer Editor und File Watcher"
description: "VS Code für The Farmer Was Replaced: wo die .py-Dateien liegen, IntelliSense über __builtins__.py, File Watcher aktivieren und warum neue Dateien ein Neuladen brauchen."
date: 2026-11-05
---

Der Editor im Spiel reicht, aber lange Skripte schreibt man bequemer in **VS Code**. Das Spiel unterstützt das offiziell (Seite **External Editor** in der Spiel-Doku).

## So funktioniert es

- Jedes Code-Fenster wird als **`.py`-Datei** im Spielstand-Ordner gespeichert.
- Jeder Spielstand enthält **`__builtins__.py`** mit den Spielfunktionen — für Autovervollständigung.
- Die Sprache ist **Python-ähnlich**, nicht echtes Python.
- **`import`-Zeilen ignoriert das Spiel** — sie helfen nur dem Editor.

## Schritte

1. Im Spiel **Load → Open Folder**. Unter Windows meist `C:\Users\<du>\AppData\LocalLow\TheFarmerWasReplaced\TheFarmerWasReplaced\Saves\<Spielstand>`.
2. In VS Code **Datei → Ordner öffnen** und genau diesen Ordner wählen; **Python**-Erweiterung installieren.
3. In den **Options** des Spiels **File Watcher** aktivieren.

## Neue Dateien

File Watcher übernimmt nur Änderungen an bestehenden Dateien. Neue Dateien zuerst im Spiel anlegen oder den Spielstand über Load neu laden. **Nicht** vorher speichern — sonst können extern erstellte Dateien verloren gehen.

## FAQ

**Geht VS Code mit dem Spiel?** Ja, Spielstand-Ordner öffnen und File Watcher einschalten.

**Warum erscheint meine neue Datei nicht?** Erst im Spiel anlegen oder neu laden.

## Verwandte Seiten

- [Basis-Codes](/de/basic-codes/)
- [The Miner Was Replaced](/de/blog/the-miner-was-replaced/)
