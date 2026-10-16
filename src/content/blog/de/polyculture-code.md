---
title: "Polyculture-Code – The Farmer Was Replaced (get_companion-Guide)"
description: "Funktionierender Polyculture-Code für The Farmer Was Replaced. So arbeitet get_companion(), wo der Begleiter steht, und wie Heu, Holz und Karotten stark steigen."
date: 2026-10-16
---

**Polyculture** sorgt dafür, dass Gras, Büsche, Bäume und Karotten viel mehr geben, wenn der richtige Begleiter auf der richtigen Kachel wächst. Dieser Guide erklärt, was `get_companion()` zurückgibt, warum der naive Ansatz scheitert, und liefert Polyculture-Code zum Einfügen und Erweitern.

Wenn du die erste Farm noch aufbaust, starte mit den [Basic Codes](/de/basic-codes/) und dem [Tree-Code](/de/codes/tree-code/). Polyculture baut auf beidem auf.

## Was Polyculture macht

Jedes Gras, jeder Busch, Baum und jede Karotte kann eine **Begleiter-Präferenz** haben. Pflanzt du die gewünschte Pflanze an der exakten Position und erntest danach die Ursprungspflanze, gibt es einen großen Ertragsbonus. Vor dem Upgrade ist der Multiplikator 5, jedes Upgrade verdoppelt ihn. Damit ist Polyculture einer der stärksten Boosts für Heu, Holz und Karotten im Midgame.

Regeln für deinen Code:

- Die Präferenz ist pro Pflanze zufällig. Du kannst sie nicht vorhersagen – du musst sie lesen.
- Der Begleiter ist immer ein anderer Typ: Gras, Busch, Baum oder Karotte.
- Die angeforderte Kachel liegt innerhalb von 3 Zügen, nie auf der eigenen Kachel.
- Das Wachstumsstadium des Begleiters ist egal. Er muss nur bei der Ernte stehen.

## So arbeitet get_companion()

Stelle die Drohne auf eine Pflanze und rufe `get_companion()` auf. Das kostet einen Tick und liefert `None` (keine Präferenz) oder ein Tupel: Entitätstyp und `(x, y)`.

```python
companion = get_companion()
if companion != None:
    plant_type, (x, y) = companion
    print("Companion:", plant_type, "at", x, ",", y)
```

Ein Busch kann z. B. `(Entities.Carrot, (3, 5))` liefern: Karotte auf (3, 5) pflanzen, dann den Busch ernten – mehr Holz.

Packe die Koordinaten immer aus. Nimm nicht an, der Begleiter stehe direkt daneben. Die API garantiert nur eine Koordinate, keine Richtung.

## Warum der einfache Ansatz scheitert

Die offensichtliche Idee: Begleiter lesen, hinlaufen, pflanzen, zurück, ernten. Auf kleiner Farm geht das, verschwendet aber Bewegung. Schlimmer: Die Zielkachel kann schon eine Pflanze mit *eigener* Anfrage halten – neu pflanzen verwirft sie.

Besser: **Anfragen in einem Dictionary merken** und erfüllen, wenn der normale Sweep die Kachel erreicht. Die Drohne behält ihre Zeilenroute, Polyculture kommt fast kostenlos.

## Polyculture-Code (Sweep + Dictionary)

Diese Version überstreicht das ganze Feld. Pro Kachel zuerst prüfen, ob eine andere Pflanze hier einen Begleiter will. Wenn ja, den pflanzen. Sonst Hauptkultur pflanzen und die eigene Anfrage speichern.

```python
companions = {}  # (x, y) -> entity that should be planted there

def plant_tile(main_crop):
    pos = (get_pos_x(), get_pos_y())
    if can_harvest():
        harvest()
    if pos in companions:
        want = companions.pop(pos)
        if want == Entities.Carrot:
            if get_ground_type() != Grounds.Soil:
                till()
        plant(want)
        return
    if main_crop == Entities.Carrot:
        if get_ground_type() != Grounds.Soil:
            till()
    plant(main_crop)
    result = get_companion()
    if result != None:
        want, target = result
        if target not in companions:
            companions[target] = want

def sweep(main_crop):
    size = get_world_size()
    for i in range(size):
        for j in range(size):
            plant_tile(main_crop)
            move(North)
        move(East)

while True:
    sweep(Entities.Tree)
```

Tausche `Entities.Tree` gegen `Entities.Bush`, `Entities.Carrot` oder `Entities.Grass`. Reine Heufarmen können `plant()` oft weglassen und nur Begleiter lesen.

### Hinweise zum Code

- `companions.pop(pos)` liest und entfernt die Anfrage – jede einmal.
- `if target not in companions` verhindert Kämpfe um dieselbe Kachel.
- Karotten brauchen gepflügten Boden – der Code tillt vorher.
- Bäume neben Bäumen wachsen langsam; Begleiter helfen auch hier. Abstände: [Tree-Code](/de/codes/tree-code/).

## Polyculture mit mehreren Drohnen

Nach dem Unlock weiterer Drohnen funktioniert dasselbe Dictionary. Jede Drohne sweeped eigene Spalten; weil `companions` global geteilt ist, kann eine Anfrage von einer anderen Drohne erfüllt werden. Startspalte setzen, gleiche `plant_tile()`-Logik. Megafarm, `spawn_drone` und Spaltenmuster: [Multiple Drones](/de/blog/multiple-drones/).

## Häufige Fehler

- **Ernten bevor der Begleiter steht.** Bonus nur bei Ernte mit Begleiter vor Ort.
- **Begleiter mit Hauptkultur überschreiben.** Dictionary vor dem Default-Pflanzen prüfen.
- **Festen Offset erwarten.** `(x, y)` jedes Mal lesen.
- **Till für Karotten vergessen.** Karotten-Begleiter auf ungepflügtem Gras scheitert.

## FAQ

**Welche Pflanzen nutzen Polyculture?** Gras, Büsche, Bäume, Karotten. Kürbis, Kaktus, Sonnenblume haben eigene Mechaniken.

**Muss der Begleiter ausgewachsen sein?** Nein.

**Wie groß ist der Bonus?** Start 5×, verdoppelt sich mit jedem Polyculture-Upgrade.

**Was als Nächstes?** [Kürbis-Code](/de/codes/pumpkin-code/), [Sonnenblumen-Code](/de/codes/sunflower-code/) oder alle [Basic Codes](/de/basic-codes/).
