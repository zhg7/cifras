# <img src="https://github.com/zhg7/cifras/blob/main/game/assets/img/logo.svg" width="48px"></img> Cifras [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/zhg7/cifras)
Cifras es un juego de cálculo mental para dos jugadores basado en el programa de televisión de [*Cifras y letras*](https://es.wikipedia.org/wiki/Cifras_y_letras).

## Requisitos 
1. Disponer de un navegador moderno, ya sea de escritorio o de móvil.
2. Tener JavaScript y la API de WebStorage habilitados.
3. Ejecutar preferiblemente la aplicación en un servidor local o remoto (por ejemplo, Live Server de VSCode). Esto es porque el WebStorage funciona por navegador y dominio, y si esta última no coincide fallará.

## Lógica del juego
Se generan **6 números aleatorios** (del 1 al 10, 25, 50, 75 y 100) junto a un **número objetivo** (del 101 al 999). Los jugadores deben realizar operaciones aritméticas con esos números y llegar a un resultado que sea igual o lo más cercano posible al número objetivo. Cada jugador tiene 1 minuto para realizar las operaciones.

Gana el que obtenga el número objetivo exacto o en caso, de que no sea posible, el que más se aproxime.

## Reglas del juego
1. Los números no se pueden reutilizar.
2. Solo se tiene en cuenta el resultado de última operación realizada.
3. No se admiten resultados negativos ni con decimales.
4. No se obtendrá ningún punto para el ranking si no se realiza ninguna operación.

## Cómo jugar
Primero, los jugadores deben introducir sus nombres y pueden, opcionalmente, elegir un color. A continuación, generarán manualmente los 6 números para dar comienzo a la partida.

En navegadores de escritorio, las operaciones se realizan arrastrando, y soltando los números y operadores. En móviles, se debe pulsar en el elemento deseado y pulsar nuevamente en donde se quiera soltar.

<img src="https://i.imgur.com/BrSDpvj.gif"></img>

Los números son **intercambiables**, es decir, podemos soltar uno encima de otro y el que estaba en ese lugar se moverá a la posición que tenía ese. En el caso del operador, será sustituido por el nuevo que soltemos.

En cuanto los tres espacios de la zona de operaciones estén ocupados se efectuará, automáticamente, la operación correspondiente.

## Sistema de puntuación
Los jugadores pueden consultar sus puntos en el ranking (ordenado descendentemente).
* 10 puntos si se obtiene el número objetivo exacto.
* 1 punto menos por cada número de diferencia entre el resultado y el objetivo —se perderán 9 como máximo—.
