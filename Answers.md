1. What problem does the context API help solve?

It solves prop drilling. It allows us to store data on an object and share that data with 
any components in our App.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store: Object that holds the data of our application. Because the state of the app is stored in a single object that is immutable. 

Actions: Events that gives the store data. Action types (descriptions of the action or payload of information being sent to a store), and action creators(functions that return actions).

Reducers: Pure functions that take a current state of an application, copy it, and then returns a new state without mutating the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is stored in the store and is shared to all areas and layers of the application.
This state is best used with an application that has the potential scale to a larger project or already is. 
Component state, is state that is used in only that single component and possibly it's children. This is best used for smaller applications.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk extends actions and allows them to handle asynchronous requests.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think my favorite is redux.