# Project 2 Ironhack:

Realizado por: Chiara Boccaletti

En este segundo proyecto de Ironhack teníamos la elección entre dos proyectos:

### Un proyecto de manipulación DOM. 
Si elige este enfoque, la página web debe:

1. Tener un mínimo de 2 páginas HTML.
2. Tener contenido y estilos.
3. Incluye archivos HTML y CSS separados.
4. Puedes elegir cualquier tema que te guste (películas, programas, un portafolio, una serie de libros, etc).
5. Tu página web debe incluir tres interacciones diferentes usando manipulación DOM con tres receptores de eventos diferentes. Por ejemplo: un botón que permite al usuario escribir su nombre en un prompt y luego imprimirlo en la página web como una forma de personalización, botones para mostrar y ocultar elementos, botones para hacer cambios de color o imagen, etc.
6 .Es bueno tener: comportamiento responsivo.


### Un proyecto de un juego. 
Este enfoque también utiliza la manipulación DOM, pero incluye una implementación lógica más pesada y más programación. 
Si elige este enfoque, la página web debe:

1. Tener al menos una página HTML.
2. Mostrar instrucciones para el usuario.
3. Incluye un juego muy simple, como el que codificaste la semana pasada (adivina qué número estoy pensando).
4 .Permite al usuario realizar alguna interacción, como clics o relleno de entrada, que resulta en perder o ganar. Por ejemplo, puedes programar un juego como Wordle, un juego de memoria, un juego de clic rápido, etc.
5. Incluya el uso de al menos un setInterval o setTimeout, incluso si es para mostrar una alerta.

Yo he decidido implementar la secunda opción, o séa el juego. 

A continuación voy a describir los procesos que he implementado:

# Programa:
- index.html: esta es la página que contiene las instrucciones para el usuario, para que se familiarice con el juego. Al final de las instrucciones se presenta al usuario un botón para empezar el juego.

- game.html: representa el html con el propio juego. 

- wordle.js: es la lógica del juego. El código comienza definiendo una matriz de palabras para elegir, y selecciona una palabra aleatoria de esta matriz. Luego crea una matriz de guiones bajos con la misma longitud que la palabra elegida, que se utilizará para mostrar el progreso del jugador. El código configura los receptores de eventos para el botón de envío, que se usará para enviar las suposiciones del jugador. Cuando el jugador envía una suposición, el código comprueba si la suposición tiene la misma longitud que la palabra elegida. Si no lo hace, el código informa al jugador de la longitud de palabra requerida y disminuye el número de intentos restantes. Si el número de intentos restantes llega a cero, el juego termina y el jugador es alertado con la respuesta correcta. Si la suposición tiene la longitud correcta, el código comprueba cada letra de la suposición contra la letra correspondiente en la palabra elegida. Si una letra se adivina correctamente, se agrega a la matriz de progreso, y el número de letras correctamente adivinadas se incrementa. Si todas las letras se adivinan correctamente, el jugador gana el juego y es alertado con la respuesta correcta. Si algunas letras se adivinan incorrectamente, el código informa al jugador de los intentos restantes y disminuye el número de intentos. Si el número de intentos restantes llega a cero, el juego termina y el jugador es alertado con la respuesta correcta. 

- style.css y style-instructions: css para los dos html que utiliza flex. 
