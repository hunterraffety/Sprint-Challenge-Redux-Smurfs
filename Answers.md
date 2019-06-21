1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Things like .map, .reduce, .filter

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are the things we send out with an action type and along with what we want to do (payloads). Reducers create a flow of those actions and based on which action is called, dictate the results based off of that and spit something thing out (reducing many into one) and can touch state. The store is the source of our state. Everything has to work around it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state wraps up the entire app. Components can hold their own state that may be modified independently of the bigger/global state.

1.  What is middleware?
    Middleware provides extra functionality between when we send something out and then bring it back. We can manipulate things that are being passed around based on middleware. It also helps us with async things. It's like a gatekeeper that says, "Ok, I'm done, go ahead and do soemthign else." next() is a big player here.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk allows you to put functions inside of functions to act as go-betweens and direct actions based on that. Allows for async stuff within our action creators. Thanks Dan.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect.
