# Paint
Víctor Ceballos Espinosa

## Introducción

Esta práctica tiene por objetivo principal aprender a utilizar P5.js, que es una biblioteca JavaScript que comparte con Processing el objetivo de proporcionar herramientas de programación para fines creativos.

Para ser más específicos, la práctica en cuestión consiste en implementar una versión simplificada del Paint que nos permita hacer dibujos, pudiendo cambiar el color y el tamaño del pincel.
Interfaz gráfica
Al ejecutar la aplicación, se pueden ver tres secciones claramente diferenciadas. Por un lado en la parte central tenemos el lienzo. Es en este lienzo en blanco, donde se podrán realizar los diferentes dibujos. A la izquierda de dicho lienzo, podemos encontrar el selector de colores. Por último, a la derecha del lienzo, se encuentra el menú de selección del tamaño del pincel.

Como se puede observar, se ha intentado implementar una interfaz bastante sencilla que permita al usuario fácilmente entender cómo funciona.

## Cambio de colores

Para realizar los cambios de colores, bastará con hacer click encima del color que se quiera usar. En todo momento, el usuario es capaz de comprobar que color tiene seleccionado ya que el resto presentarán ciertas transparencias. Se ha decidido implementar la selección únicamente de 4 colores.

La forma de implementar el cambio de colores es la siguiente. Cuando el usuario hace click con el ratón,  se comprueba tiene el ratón encima de la sección de selección de colores. En caso afirmativo, se llama a un método llamado updateColor. Este método comprueba que el click se ha realizado dentro de alguno de los cuadrados que representan los botones de cambio de colores. Al hacer click encima del botón de selección de algún color, se actualizan los valores de las variables red, green y blue, que controlan el color del que se dibujan los círculos en el lienzo. Adicionalmente, se actualizan las transparencias en el resto de botones de colores para que el usuario sepa qué color tiene seleccionado.

## Cambio de tamaños

Para cambiar el tamaño del pincel, se tendrá que hacer click encima de alguno de los botones en la sección de selección de tamaño. Con el objetivo de hacer la interfaz más informativa desde el punto de vista del usuario, se ha decidido marcar con un cuadro, el tamaño que está seleccionado en todo momento.

Para implementar el cambio de tamaño, se ha seguido una estrategia muy parecida a la usada en el cambio de colores. En primer lugar, cuando el usuario hacer click en la interfaz, se comprueba si tiene el ratón encima de la sección de selección de tamaño. Si esto es así, se llama al método updateSize, que se encarga de comprobar si el usuario ha hecho click encima de las zonas que pertenecen a los botones de selección de tamaño. Al hacer click en uno de estos botones, se actualiza el valor de la variable size, que se utiliza para dibujar los círculos que se van dejando al mover el ratón en el lienzo.


## Referencias

[Enunciado de la práctica](https://cv-aep.ulpgc.es/cv/ulpgctp19/pluginfile.php/182523/mod_resource/content/13/CIU_Pr_cticas.pdf)
[Documentación de P5.js](https://p5js.org/reference/)
[Repositorio de GitHub](https://github.com/victcebesp/3DSceneWithLights)
