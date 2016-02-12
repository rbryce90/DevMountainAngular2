##Angular Day 2

##Services
  What is a service?
    Universal component across the module.
    Services are created for a single purpose.
  What is a singleton?
    Universal component across the module.
  What is a service's purpose?
    Data store, universal information, shared methods,
    bridge between controllers, business logic, ajax
  How does its purpose differ from a controller?
    Controller interacts with DOM and that's it!
  How can two controllers talk to each other?
    Through a service.
  How do services and controllers communicate?
    Injecting a service into a controller.
    The `this` keyword makes stuff on the service public.
  How can you create your own service?
    `angular.module("moduleName").service("serviceName", function(){})`
  What are some built in Angular services?
    They start with `$`
      `$http`, `$q`, `$timeout`, `$interval`
    You can inject these into your controllers or other services.
  Factory vs Service
    These have the same purpose.
    Service uses `this` keyword, factory returns an object.
  Service (Factory) vs Provider
    Providers are not the same thing.
