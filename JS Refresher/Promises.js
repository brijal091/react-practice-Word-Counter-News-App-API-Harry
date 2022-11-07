// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Here Synchronous means that the code will run line by line , while in asynchronous the code will run concurentlly. 

// When you have synchronous code, use try/catch for exception handling.

// You should use Promises only for asynchronous functions and nothing else. Do not abuse them as an error monad, that would be a waste of resources and their inherent asynchrony will make every­thing more cumbersome.

// Code For the promises example. 

// This is Normal code 
// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//       doThirdThing(newResult, function (finalResult) {
//         console.log(`Got the final result: ${finalResult}`);
//       }, failureCallback);
//     }, failureCallback);
//   }, failureCallback);
  

// Same with Promises 
// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);


// We can use then inside then again and again as many times we We want. 

// This is how it ServiceWorkerRegistration. 
function resolve(){
    console.log("Hey i am in");
}

new Promise((resolve, reject) => {
    console.log("Initial");
    resolve();
  })
  .then(() => {
    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });