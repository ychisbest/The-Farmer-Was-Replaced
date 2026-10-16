---
title: "Weird Substance farmen – Code für The Farmer Was Replaced"
description: "Weird Substance farmen: Dünger-Infektion, use_item, Starter-Loop und wie Labyrinthe es verbrauchen."
date: 2026-10-16
---

**Weird Substance** brauchst du für Hecken-Labyrinthe – und es ist selbst eine nützliche Midgame-Ressource. Diese Seite deckt **Weird-Substance-Code**, Farming und den Bezug zu Labyrinthen ab, ohne es mit der [Labyrinth-Code](/de/codes/maze-code/)-Seite zu vermischen, die heute einige dieser Suchen auffängt.

## Was Weird Substance ist

Ist eine Pflanze **infiziert** und du erntest sie, wird die Hälfte des normalen Ertrags zu `Items.Weird_Substance`. Infektion kommt von Dünger (und von Weird Substance selbst). Später: `use_item(Items.Weird_Substance, amount)` auf einem Busch spawnt ein Labyrinth.

Regeln:

- `use_item(Items.Fertilizer)` kürzt Restwachstum um 2 Sekunden **und infiziert** die Pflanze unter der Drohne.
- Ernte einer infizierten Pflanze: Hälfte wird Weird Substance.
- `use_item(Items.Weird_Substance)` auf einer Pflanze **togglt** Infektion bei ihr und Nachbarn.
- Labyrinthe: Busch pflanzen, dann `use_item(Items.Weird_Substance, n)` für n×n Heckenlabyrinth.

## Starter-Farm (Dünger-Loop)

Dünger regeneriert über Zeit (1 alle 10s Basis, verdoppelt mit Upgrades). Einfacher Heu-Loop verbraucht Dünger zum Infizieren:

```python
def farm_weird_substance(target):
    while num_items(Items.Weird_Substance) < target:
        if get_ground_type() != Grounds.Soil:
            till()
        if can_harvest():
            harvest()
        plant(Entities.Grass)
        if num_items(Items.Fertilizer) > 0:
            use_item(Items.Fertilizer)
        while not can_harvest():
            if get_water() < 0.5:
                use_item(Items.Water)
        harvest()
        move(North)

farm_weird_substance(200)
```

Nimm Gras/Heu wenn möglich: niedrige Pflanzkosten. Bäume gehen auch, wenn du schon eine [Baumfarm](/de/codes/tree-code/) hast – vor der Ernte infizieren.

## Schneller: Infektion säen, dann streuen

Dünger-Einkommen ist langsam. Viele Spieler:

1. Kleine Charge düngen/ernten für Startvorrat.
2. Auf großem Heu-/Baumfeld `use_item(Items.Weird_Substance)` auf gesunden Pflanzen, damit Infektion Nachbarn trifft.
3. Ganzes Feld ernten – Hälfte jeder infizierten Pflanze wird mehr Substance.

So infizierst du große Farmen mit weit weniger Dünger-Ticks. Plane die Platzierung als Abdeckungsmuster.

## Weird Substance und Labyrinthe

```python
plant(Entities.Bush)
n = get_world_size() * 2 ** (num_unlocked(Unlocks.Mazes) - 1)
use_item(Items.Weird_Substance, n)
```

Left-Wall-Solver und `measure()`-Schatzpfad: [Labyrinth-Code](/de/codes/maze-code/). Diese Seite bleibt beim **Farmen**.

## Wie viel puffern vor Labyrinthen

Praktische Regel: erst stabiler Farm-Loop, dann Ausgaben. Leert jedes Labyrinth den Vorrat, hungerst du ständig. Puffer aufbauen (oft einige hundert am Anfang – abhängig von Weltgröße und Maze-Upgrades), dann Hecken in Batches spawnen.

Mit [mehreren Drohnen](/de/blog/multiple-drones/) stark: viele kleine Labyrinthe oft besser als ein riesiges. Substance-Farm muss den Verbrauch halten.

## Checkliste vor dem Spawn

1. Busch unter der Drohne.
2. Genug Weird Substance für die Größe.
3. Solver klar (linke Wand frisch oder `measure()`).
4. Nach Gold-Farm wieder Infektionsloop – Feld nicht leer lassen.

## Häufige Fehler

- Sofort ernten nach Düngen, bevor die Pflanze fertig ist.
- Alles Substance in Labyrinthe stecken ohne stabile Farm.
- „Weird substance code“ auf Maze-Seiten suchen, die nie den Dünger-Loop erklären.
- Aus Versehen heilen: Weird Substance auf schon infizierter Pflanze toggelt zurück.

## FAQ

**Brauche ich es für Kürbis oder Polyculture?** Nein. Siehe [Kürbis](/de/codes/pumpkin-code/) und [Polyculture](/de/blog/polyculture-code/).

**Warum Dünger?** Zuverlässiger Weg zu ersten Infektionen. Ohne Dünger (oder Spread mit vorhandenem Substance) entsteht keins.

**Wohin danach?** [Labyrinth-Code](/de/codes/maze-code/) und [Multiple Drones](/de/blog/multiple-drones/) für schnelleres Gold.
