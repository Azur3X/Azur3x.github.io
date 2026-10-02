---
layout: page
title: Pac-Man
description: A full Pac-Man game in Java — built around clean OOP design, with pathfinding AI for the ghosts.
img: assets/img/pacman.png
importance: 2
category: academic
---

A complete Pac-Man implementation in Java, built as a group project for the
DM575 Object-Oriented Programming course at SDU. The focus was on getting the
design right rather than just making it run: a model–view–controller
separation, ghosts driven by their own pathfinding (breadth-first search to
hunt, a separate flee strategy when vulnerable), and collision handling built
as interchangeable strategy classes rather than tangled conditionals.

Across ~40 classes it ends up a practical exercise in the OOP principles the
course was about — encapsulation, polymorphism, and programming to interfaces
(`IPathFinder`, `ICollisionChecker`) so behaviours can be swapped without
touching the rest of the system.

A group project, built with Nikolaj R. M. and Valdemar R.

[View the code on GitHub](https://github.com/Azur3X/Azur3X-projects/tree/main/OOP/PacManNew)




