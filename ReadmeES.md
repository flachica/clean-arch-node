# Aplicando Arquitectura limpia de Robert C. Martin a una API construida en Node

Ejemplo para aplicar los principios de Arquitectura limpia. Nótese que existen cuestiones a ser mejoradas. Cualquier aporte será bienvenido.

Este servidor publica dos endpoints:

`/animals` en el puerto `3000` --> Con tres ejemplos de animales cargados desde memoria
`/fruits`  en el puerto `3001` --> Con tres ejemplos de frutas cargados desde memoria

## Características principales

* Los endpoints pueden ser servidos con Express o con Fastify según se ejecute `node details/indexExpress.js` o  `node details/indexFastify.js`
* Cada endpoint puede ser servido por un puerto distinto. Con ello simulamos el concepto de microservicio. Cada uno de ellos corre en un hilo distinto y por tanto podría ser ejecutado de forma independiente con configuraciones de servidor diferenciadas. 
* Solo he implementado un tipo de repositorio. Los datos son servidos siempre desde memoria
* No sigo estrictamente las capas o carpetas sugeridas por "Arquitectura limpia". He preferido agrupar por Entidad (animales y frutas) pues es lo más importante del sistema. En cada carpeta siempre encontraríamos "Adaptadores" que hacen de puente con la ruta publicada en el servidor y el "Repositorio" o fuente de datos. Al añadir más entidades no tendríamos que saltar de carpeta en carpeta si tuvieramos que ampliar alguna de las clases anteriores

## Estructura

  * `abstract`: A modo de microframework. Contine clases que serán extendidas en details o en domain
     
    * `details`: Abstracciones de los detalles. Según "Uncle Bob" los detalles se relacionan con la tecnología y no con el núcleo del sistema. A saber: Base de datos, servidor http, frameworks, etc
    * `domain`: Abstracciones del dominio. Clases "padre" que serán extendidas con las concreciones del núcleo del sistema.
  * `details`: Clases que implementan los detalles técnicos del sistema
  * `domain`: Clases del núcleo del sistema. El dominio se relaciona con las entidades y casos de uso que modelan nuestro sistema.