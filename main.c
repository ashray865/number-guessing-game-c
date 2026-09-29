#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    // Seed the random number generator using the current time
    srand(time(0));

    // Generate a random number between 1 and 100
    int randomNumber = (rand() % 100) + 1;
    int guessed;
    int no_of_guesses = 0;

    printf("=== NUMBER GUESSING GAME ===\n");

    // Loop until the user guesses the correct number
    do {
        printf("Guess the number: ");
        scanf("%d", &guessed);
        no_of_guesses++;

        if (guessed > randomNumber) {
            printf("Lower number please\n");
        } 
        else if (guessed < randomNumber) {
            printf("Higher number please\n");
        } 
        else {
            printf("Congratulations! You guessed the number in %d attempts!\n", no_of_guesses);
        }

    } while (guessed != randomNumber);

    return 0;
}
