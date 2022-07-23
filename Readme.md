# Applying Robert C. Martin's Clean Architecture to an API built on Node

Example to apply the principles of Clean Architecture. Note that there are issues to be improved. Any contribution will be welcome.

This server publishes two endpoints:

`/animals` on port `3000` --> With three animal examples loaded from memory
`/fruits` on port `3001` --> With three fruit examples loaded from memory

## Main features

* Endpoints can be served with Express or Fastify depending on running `node details/indexExpress.js` or `node details/indexFastify.js`
* Each endpoint can be served by a different port. With this we simulate the concept of microservice. Each one of them runs in a different thread and therefore could be executed independently with different server configurations.
* I have only implemented one type of repository. Data is always served from memory
* I don't strictly follow the layers or folders suggested by "Clean Architecture". I have preferred to group by Entity (animals and fruits) as it is the most important part of the system. In each folder we would always find "Adapters" that act as a bridge with the route published on the server and the "Repository" or data source. By adding more entities we would not have to jump from folder to folder if we had to extend any of the previous classes

## Structure

  * `abstract`: As a microframework. Contains classes that will be extended in details or in domain
     |
     * `details`: Abstractions of the details. According to "Uncle Bob" the details relate to the technology and not the core of the system. Namely: Database, http server, frameworks, etc.
     * `domain`: Domain abstractions. "Parent" classes that will be extended with the kernel concretes of the system.
  * `details`: Classes that implement the technical details of the system
  * `domain`: System core classes. The domain is related to the entities and use cases that model our system.