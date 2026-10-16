---
title: "Mehrere Drohnen – Megafarm-Code für The Farmer Was Replaced"
description: "Mehrere Drohnen nutzen: Megafarm freischalten, spawn_drone, max_drones, wait_for und ein Copy-Paste-Spaltenmuster für die Farm."
date: 2026-10-16
---

Nach dem Unlock von **Megafarm** farmst du nicht mehr mit einer Drohne, sondern mit einer Flotte. Diese Seite ist der Guide zu **mehreren Drohnen** in *The Farmer Was Replaced*: was der Unlock gibt, wie `spawn_drone` arbeitet, und ein Muster für Kürbis-, Baum- oder Polyculture-Skripte.

## Zuerst Megafarm freischalten

Megafarm ermöglicht mehr als eine Drohne. Upgrades erhöhen das Limit. Ohne Unlock gibt es kein `spawn_drone`, jeder Crop-Skript bleibt single-threaded.

Nützliche Helfer danach:

- `spawn_drone(function, *args)` — Drohne spawnen, die `function` ausführt
- `num_drones()` — wie viele leben
- `max_drones()` — wie viele erlaubt sind
- `wait_for(drone)` — warten bis fertig; Rückgabewert
- `has_finished(drone)` — nicht-blockierend

## So arbeitet spawn_drone

Übergib das **Funktionsobjekt**, keinen Aufruf:

```python
# Correct
spawn_drone(harvest_column)

# Wrong
spawn_drone(harvest_column())
```

Die neue Drohne erscheint auf derselben Kachel wie die Eltern und startet die Funktion. Extra-Argumente danach werden in den Aufruf kopiert. Kehrt die Funktion zurück, verschwindet die Drohne. Drohnen kollidieren nicht.

Am Limit macht `spawn_drone` nichts und liefert `None`. Sicheres Muster:

```python
if not spawn_drone(task):
    task()
```

Es gibt keine besondere „Haupt“-Drohne. Jede kann weitere spawnen; jede lebende zählt zu `max_drones()`.

## Code für mehrere Drohnen: eine Spalte je Drohne

Häufiges Megafarm-Muster: Die Eltern gehen ostwärts über die Farm und spawnen pro Spalte einen Worker. Jeder Worker farmt Nord–Süd (ein Pass oder endlos).

```python
def harvest_column():
    size = get_world_size()
    for i in range(size):
        if can_harvest():
            harvest()
        move(North)

clear()
while True:
    while num_drones() < max_drones():
        if spawn_drone(harvest_column):
            move(East)
        else:
            break
    harvest_column()
    move(East)
```

Ersetze den Körper von `harvest_column` durch Plant-/Water-/Fertilize-Logik. Bei Kürbissen braucht jede Drohne feste Spalten und eine **eigene** Bad-Tile-Liste – Drohnen teilen Globals nicht wie normales Python.

## Phasen mit wait_for synchronisieren

Wenn alle erst fertig pflanzen müssen, bevor jemand erntet (Riesenkürbis-Merge, Kaktus-Sortierung), Handles behalten und warten:

```python
def plant_column():
    size = get_world_size()
    for i in range(size):
        if get_ground_type() != Grounds.Soil:
            till()
        plant(Entities.Pumpkin)
        move(North)

handles = []
size = get_world_size()
for x in range(size - 1):
    h = spawn_drone(plant_column)
    if h:
        handles.append(h)
    else:
        plant_column()
    move(East)

plant_column()

for h in handles:
    wait_for(h)
```

## Tipps, die Stunden sparen

- **Zwischen Spawns bewegen.** Ohne Bewegung stapeln sich Worker auf einer Kachel.
- **Keine gemeinsame Bad-Liste** für Kürbis-Tote. Jede Drohne ihren Sektor.
- **Viele kleine Jobs schlagen einen Riesenjob** bei Labyrinthen: mehrere kleine statt eines riesigen.
- Kombinieren mit [Kürbis](/de/codes/pumpkin-code/), [Baum](/de/codes/tree-code/), [Polyculture](/de/blog/polyculture-code/), [Labyrinth](/de/codes/maze-code/).

## Bezug zu Polyculture und Kürbis

Bei [Polyculture](/de/blog/polyculture-code/) beschleunigen mehrere Drohnen Spalten-Sweeps; Companion-Dictionaries vorsichtig über Argumente/Sektoren. Beim [Kürbis](/de/codes/pumpkin-code/) keine geteilte Dead-Liste. Megafarm hebt Crop-Regeln nicht auf – es parallelisiert nur.

## FAQ

**Warum liefert spawn_drone None?** Du hast schon `max_drones()` lebende Drohnen inkl. Eltern.

**Teilen Drohnen Variablen?** Behandle jedes Programm als getrennt. Argumente und `wait_for`, nicht eine globale Liste von allen.

**Können Spawn-Drohnen weitere spawnen?** Ja. Jede lebende zählt zum Cap.

**Wohin danach?** [Kürbis](/de/codes/pumpkin-code/) und [Polyculture](/de/blog/polyculture-code/) skalieren oder [Tutorial](/de/tutorial/) für Sprachbasics.
