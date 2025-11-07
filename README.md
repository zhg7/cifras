[<img width="16" height="11" alt="es" alt="README español" src="https://github.com/user-attachments/assets/0d656660-90f4-4d18-af50-476fe3e05d2c" />](https://github.com/zhg7/cifras/blob/main/README.es.md) [Español](https://github.com/zhg7/cifras/blob/main/README.es.md)

# <img src="https://github.com/zhg7/cifras/blob/main/game/assets/img/logo.svg" width="48px"></img> Cifras
Cifras is a mental math game for two players based on the Spanish TV show [*Cifras y letras*](https://es.wikipedia.org/wiki/Cifras_y_letras).

## Game logic
Six random numbers (from 1 to 10, 25, 50, 75 and 100) are generated along with a target number (from 101 to 999). Players must perform arithmetic operations with these numbers and get a result that is equal to or as close as possible to the target number. Each player has 1 minute to perform the operations.

The winner is the player who obtains the exact target number or, if not possible, the player who comes closest to it.

## Game rules
1. Numbers cannot be reused.
2. Only the result of the last operation performed is taken into account.
3. Negative results or results with decimals are not allowed.
4. No points will be awarded for the ranking if no operation is performed.

## How to play
First, players must enter their names and can optionally choose a colour. Next, they will have to manually generate the six numbers to start the game.

On desktop browsers, operations are performed by dragging and dropping numbers and operators. On mobile devices, players must tap on the desired element and tap again where they want to drop it.

![BrSDpvj](https://github.com/user-attachments/assets/9eea3e47-ecf8-41d4-8bfe-645ec9507ea9)

The numbers are **swappable**, meaning that we can drop one on top of another and the one that was in that place will move to the position that the other one had. In the case of the operator, it will be replaced by the new one we drop.

As soon as the three spaces in the operations area are occupied, the corresponding operation will be executed automatically.

## Scoring system
Players can check their points in the ranking (in descending order).
* 10 points if the exact target number is obtained.
* 1 point less for each number difference between the result and the target (a maximum of 9 points can be lost).
