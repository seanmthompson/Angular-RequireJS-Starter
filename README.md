# Angular-RequireJS-Starter
An opinionated starter template for RequireJS based Angular apps
The premise was built around the idea of lazy loading controllers and directives as-needed per route. This starter is based on UI-Router but can easily be swapped to utilize Angular Router as well. A foxus on this structure focuses on reusable directives that inherit scope from the parent controller. 

##Getting Started
To get started, ensure you have [Node](https://nodejs.org/en/) and [Bower](http://bower.io/) installed
```
git clone https://github.com/seanmthompson/Angular-RequireJS-Starter.git
cd Angular-RequireJS-Starter
npm install
bower install
```

###Philosophy
- Lazy loading of controllers and directives using Angular providers and RequireJS
- Focus on reusable directives rather than bloated controllers and views

Feel free to submit bugs, questions, and pull requests. 
