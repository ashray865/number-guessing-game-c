 
# Number Guessing Game (C)

A simple console game written in C. The computer picks a random number between 1 and 100, and you keep guessing until you get it right.

## How it works

- The program picks a random number using `rand()`, seeded with the current time.
- After each guess, it tells you to go higher or lower.
- When you guess correctly, it shows how many attempts you took.

## How to run

1. Install a C compiler (GCC).
2. Compile:
```
   gcc main.c -o game
```
3. Run:
   - Linux/macOS: `./game`
   - Windows: `game.exe`

## What I practiced

- Loops (`do-while`)
- Conditionals (`if / else if / else`)
- Random numbers with `rand()` and `srand()`
- Reading user input with `scanf()`

## Known limitations / next steps

- Entering a non-number (like a letter) is not handled yet. I plan to add input validation.
- Possible additions: difficulty levels, a play-again option, a maximum number of attempts.

## Acknowledgements

I learned C from CodeWithHarry's tutorials on YouTube.
