## Theory Assignment: `Chapter - 06 Exploring the world` 

###  1. What is a Microservice?
  Microservice Architecture is an architectural style that structures the application as a collection of services which are independently deployable, based on Separation of Concern (SoC),  loosely coupled, owned by small teams, highly maintainable and testable , communicating through lightweight protocols (APIs). The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

  Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Examples : Netflix became one of the first high-profile companies to successfully migrate from a monolith to a cloud-based microservices architecture in 2009. 

### 2. What is  Monolith architecture? 
A Monolith architecture is a traditional model of a software program, which is built as a unified unit
that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing 
network with one code base that couples all of the business concerns together. To make a change to this sort of application
requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side 
interface. This makes updates restrictive and time-consuming. means we are not dividing software into small, well-defined modules,
we use every services like, database, server or a UI of the application, in one Application file.

### 3. What is the difference between Monolith and Microservice?

With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

### 4. Why do we need a useEffect Hook?
`useEffect` Hook is used to synchronize a component with the external system. 

  ```
  useEffect(setup, dependencies?)
  ```
  where :
  `setup` - is a function wuth the Effect's logic. 
   
  `dependencies` - List of values that the setup function will depend on. 

### 5. What is Optional Chaining?
he optional chaining `(?.)` operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null`, it returns `undefined` instead of throwing an error.

The `?.` operator is like the `. chaining operator`, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

*Uses of Optional chaining* : 
1. Exploring the content (nested properties) of an object before accessing its deeply nested sub-porperties. 
2. By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj?.prop is not null or undefined before attempting to access its sub-porperties obj?.prop?.subprop
3. Optional chaining cannot be used on a non-declared root object, but can be used with a root object with value undefined.
Eg : const obj = undefined ; ---> This is possible 
But undeclaredVar?.prop; ---> This throws ref error

### 6. What is Shimmer UI?
From a user experience (UX) perspective, the most important thing is to show your users that loading is taking place. One popular approach to communicate to users that data is loading is to display a chrome color with a shimmer animation over the shapes that approximate the type of content that is loading. Earlier, page loaders were used where a loading progress bar might be displayed before the page is rendered. But, that approach was not that UX friendly. So, Shimmer was introduced.

Shimmer can be skeleton to the actual layout that will be displayed before the data fetch. This will make the user understand what type of layout is loading.
### 7. What is the difference between JS expression and JS statement

`JS Expression` - A js expression produces a value. A number, string,ternary conditions (return true or false), math opertions and array map method (returns new array) are all examples of js expression. 

```
1. "Sagar" -> String is a valid expression 

2. 1234    -> Number is a valid expression 

3. (isLoggedIn) ? "Logout" : "Login"    -> Ternary operator returning value is a valid expression

4. [1,2,3,4].map(num => num*2)  -> array map function is a valid expression which returns a new array after transformation

5. (1+2+3)   -> math operation is a valid expression

```

`JS Statement` - A js statement just executes/performs an action but does not return/produce a value. A variable assignment, if condition (with no return) and for loops are examples of js statement. 

```
1. console.log("This is a js statement")  -> This does not return any value, just prints the content on screen.

2. let name = "Sagar";  -> Variable assigment is a statement 

3. if(true){
    console.log("true"); 
  } else {
    console.log("true"); 
  }   -> This does not return any value

4. for(let i=0; i< 5; i++) {
    arr.push(i);
  } 

```

Having said that, we can't put any js code inside {} in jsx of React. Only `js expressions` can be enclosed within {} of jsx. 

### 8. What is Conditional Rendering, explain with a code example
Your components will often need to display different things depending on different conditions. In React, you can `conditionally render` JSX using JavaScript syntax like `if statements`, `&&`, and `? :` operators.

We will understand all types of conditional rendering using an example from our code. I have used a error-container to display the `error message` if the errorMsg state is true, else error-container is not displayed. 


- `if statements` : With if statement, the above example goes like 

{ if(errorMsg) {
    (<div className="error-container" id="error">
      <span className="error-msg" id="error-msg">{errorMsg}</span>
    </div> )
  } 
}

- `&&` operator : if the condition is true, display the right-side code else display nothing.

{ errorMsg && 
  <div className="error-container" id="error">
    <span className="error-msg" id="error-msg">{errorMsg}</span>
  </div> 
}

- `? :` operator - If allRestaurants is empty, then showrender Shimmer Component else render RestaurantCard Components 

{ allRestaurants?.length === 0 ? (<Shimmer />) : 
    <div className="restaurant-container">
      {filteredRestaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    }

    ### 9. What is CORS?

 CORS stands for Cross-Origin Resource Sharing. In current microservices-based server and client communication, where the services are deployed in different servers, machines, different port numbers, it's very important to share resources between them. 
 
 CORS is a HTTP - header based mechanism that allows server to indicate any cross origin (origin different from server's origin like scheme, port or domain) from which browser should allow loading resources. 

 `How CORS is done ?` Browser first sends a `preflight` request (header tha tcontains HTTP method and headers in the actual request) to the server sharing cross-origin resource to check if the server will permit the actual request. 

  Example : 

  http://localhost:1234 ----> https://www.swiggy.com/mapi/restaurants/list 
 
  Fetch API follow `same-origin` policy which means that a web app using fetch API can only request resources in the same origin, unless the response from other origins includes the right headers ( the server still must opt-in using Access-Control-Allow-Origin to share the response with the script.)

  - Simple requests do not need to send a preflight request before sending actual request. 

  - Unlike simple requests, for "preflighted" requests the browser first sends an HTTP request using the `OPTIONS` method to the resource on the other origin, in order to determine if the actual request is safe to send. Such cross-origin requests are preflighted since they may have implications for user data.

### 10. What is async and await? 

Async/await are keywords to make a normal function behave like a asynchornous funtion. 

`async` function always returns a promise, any values are automatically wrapped inside a resolved promise. 

`await` keyword makes javascript wait until the promise settles, and return its result. await cannot be used in a non-async function.  


For example : Let's try to write a function getRestaurants() to fetch restaurant data from a public API. 

First, let's try to write it with `Promise chaining` : fetch(url) returns a promise (resolve or reject), which can be consumed by the `then` (success) handler or `catch` (error) handler 

```
function getRestaurants() {
  fetch(url).then((data)=>{data.json()})
    .then((json)=>{
    console.log(json); 
  }).catch((err)=>{
    console.log(err);
  })
}
```


Using `async` and `await` : await waits until fetch(url) returns a promise with the data and headers which again needs to be resolved using .json() method to get the data. If any of promise inside try block is rejected, the control jumps to catch block.

```
async function getRestaurants() {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  } catch(err) {
    console.log(err);
  }
}

```

### 11. What is the use of `const json = await data.json();` in  getRestaurants()

In seen in the above example, the fetch API call returns a promise response with header,
in order to get the data in json format, we have to resolve that promise using `data.json()`




