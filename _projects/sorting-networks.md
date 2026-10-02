---
layout: page
title: Sorting Network Optimisation
description: Constructing and optimising sorting networks — a three-phase algorithms project.
img: assets/img/sorting_network.png
importance: 3
category: academic
---

A first-semester algorithms project on **sorting networks** — fixed
comparator circuits that sort any input of a given size — and the problem of
making them smaller and faster.

Split across three phases: first building correct networks and verifying them,
then generating and testing candidates, and finally optimising them down
through a series of pruning techniques (point pruning, vector pruning,
comparator reduction) to cut the number of comparators while preserving
correctness. The optimisation side is what made it interesting — it's a real
search-and-prune problem, the kind of combinatorial optimisation I keep being
drawn to.

Written in Python as a group project, forming the basis for the individual
first-semester exam. Built with Valdemar R. and Hlynur Æ. G.

[View the code on GitHub](https://github.com/Azur3X/Azur3X-projects/tree/main/Python/sdu-project)
