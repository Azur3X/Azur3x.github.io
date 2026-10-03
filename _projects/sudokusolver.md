---
layout: page
title: Sudoku Solver
description: This is my Sudoku Solver, made using constraint programming and machine learning
img: assets/img/Sudoku.png
importance: 1
category: academic
related_publications: false
---

## The first iteration

My Sudoku Solver project began with an interest in applying theory learned in my introductory AI course. The problem can be solved directly using three nested for-loops to iterate over the rows, columns, and numbers, resulting in an \(O(n^3)\) runtime. To improve efficiency, I explored constraint programming as an alternative approach.

Constraint programming is a paradigm for solving combinatorial problems by defining variables and constraints that must be satisfied. Sudoku itself is inherently a constraint problem: it is a number puzzle on a 9x9 grid where each row, each column, and each 3x3 subgrid must contain unique numbers from 1 to 9 without repetition.

<!-- Example image for the first iteration -->
<div class="row justify-content-center">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/Sudoku_iteration1.png" title="Sudoku Solver First Iteration" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

The solver uses the Python `constraint` library to model the Sudoku. Each cell is treated as a variable with a domain of possible values. Known cells have a fixed domain containing only that value. The Sudoku rules are encoded as "all different" constraints on rows, columns, and 3x3 boxes.

Using the `Problem` class, the solver represents variables and constraints and calls `getSolution()` to find a valid solution. The output is formatted into a readable Sudoku grid with clear separation of 3x3 boxes.

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/Sudoku_terminal.png" title="CSP solver output in the terminal" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Initially, the solver required the Sudoku grid to be hardcoded. I later improved it by adding an input method where the user can provide the Sudoku puzzle line by line, using 0 or a dot to represent blank spaces.

This first iteration of my Sudoku Solver can be found on my [GitHub](https://github.com/Azur3X/Azur3X-projects/tree/main/AI/CSP).

---

## The second iteration

In the second iteration, I aimed to improve ease of use. Manually typing a Sudoku grid is slow and testing multiple puzzles is time-consuming. To address this, I adopted a machine learning approach and trained a model to detect digits from grayscale images.

Using TensorFlow and Keras, I trained the model with the MNIST dataset, which consists of handwritten digits. This enabled me to input an image of a Sudoku puzzle to the program. By reusing the constraint programming implementation from the first iteration, I could solve puzzles from images.

The machine learning model faced challenges correctly detecting the Sudoku grid, likely due to my limited experience with machine learning best practices. I anticipate improving this after completing my introduction to machine learning course.

The code for the second iteration can be found on my [GitHub](https://github.com/Azur3X/Azur3X-projects/tree/main/Python/SudokuML).

{%comment%}
<!-- Example GIF for the second iteration -->
<div class="row justify-content-center">
  <div class="col-sm-6 mt-3">
    <img src="/assets/img/SudokuML_demo.gif" alt="Sudoku Solver Machine Learning Demo" class="img-fluid rounded z-depth-1" />
  </div>
</div>
{%endcomment%}
---

## The third iteration

The third iteration sought to complete the vision of reading a Sudoku from an image. By using `rg1990`’s implementation of a Sudoku reader, my solver worked as intended.

To use this version, the user must train their own model. The process is straightforward: install required libraries using the provided requirements file, then run the `train.py` script to generate a model, which the main program uses to solve Sudokus from images.

The code for the third iteration can be found on my [GitHub](https://github.com/Azur3X/Azur3X-projects/tree/main/Python/SudokuSolver).

---

## The last iteration

The last iteration aimed to port the solver to a mobile device, allowing users to take a picture of any Sudoku and solve it on the go. The idea was to use Cython, a compiler that translates Python code into C code, making it possible to port the program to an Android app.

I encountered issues with Cython and Python 3 compatibility, which would require significant rewriting of the program. As a result, I have shelved this project for now and may revisit it in the future.

The code for the last iteration can be found on my [GitHub](https://github.com/Azur3X/Azur3X-projects/tree/main/Python/SudokuPhone).

---

This is one of my earlier projects, and it shows — the machine learning attempts
came before I had any formal ML background, which is exactly why they were the
rough part. Revisiting it with what I've since learned is still on my list.

