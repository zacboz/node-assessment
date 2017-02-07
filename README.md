# Node Assessment

## setup
1. Run `npm install` to install testing dependencies.
2. Create a file called `server.js`. All your server code and endpoints should be in this file.
3. Create a file called `userCtrl.js`. You will write your endpoints and export each one from this file.

## Users Module
You will be using the users module in your test. It is located in the file `users.js`

The users module is intended to be your way of controlling the data.
Do not make any changes to this file. Make sure you only use
`users.js` to make all your changes to the data.

A user has the following keys and values:

```
id: number
first_name: string
last_name: string
email: string
gender: string,
language: string,
age: number,
city: string,
state: string,
type: string,
favorites: array of strings
```

The users module has the following methods:

#### Add
* Add a properly formatted user.
* This will throw an exception if the user is improperly formatted!
* Will automatically add an id and return the new user object, with the id.
So don't put an id on a new user!

#### findOne
* Takes in a key and a value
* Returns the first user where the key matches the value
* Example:
```
users.findOne('id', 1) // User object with an id of 1;
```

#### find
* Takes in a key and a value
* Like findOne but it will return all matching users as an array
* If it only finds one user it will still return an array.

#### remove
* Takes in a key and a value
* Like find but will remove all matching users.

## User Controller
1. Get All Users.
..*Write a function called readAll that will get all users from the users module and send it with a status 200.
2. Get User By Id.
..*Write a function called findUserById that will use a user id from the request parameters to find the user with that id and send that user's information back with a status 200. If there is no user with that ID, it should send back a status 404.
3. Get All Admin Users.
..*Write a function called getAdmins which will find all users with a type of 'admin', and send them back with status 200.
4. Get All Non Admin Users (regular users)
..*Write a function called getNonAdmins which will find all users who do not have a type of 'admin' and send them back with status 200.
5. Get All users with specified favorites.
..*The function getUsersByFavorites will use the favorites array provided in the request body and use it to find all users with one of those favorites in their favorites array. Send back those users with a status 200.
6. Get all users with age under given age.
..*Write a function, getUsersByAgeLimit, that will find all users under the age provided in the request parameters and send those users back with a status 200.
7. Get User By Last Name.
..*Write a function called findUserByQuery. If there is a query in the request for lastName, the function will use a last name from the request query object and find the user with that last name. Make sure that the search is case-insensitive. If the user is found (or an array of users), send it back with a status 200; if not, send back status 404.
8. Get User By Email.
..*Adjust findUserByQuery to search for a user by email, if the request contains the query 'email'. Again, it will send back that found user with a status 200, or if not found, a status 404.
9. Add new user.
..*Write a function, createUser, that will add a user from the request body to the users module. Make sure the user is formatted correctly (as shown above), or the users module will give you an error. Remember, the users module will generate an id itself, so you don't have to. Send back the new user (with automatically generated id) with a status 200.
10. Update user by ID.
..*Write a function called updateUser which will find a user by the id in the request parameters, then update it, changing only those properties sent in the request body. Send back the updated user with a status 200.
11. Delete a user by ID.
..*Your function, removeUser, should find a user by the id in the request parameters, then use the user module's remove functionality to delete the user. Send back a status 200 when successful.

## Running Tests

Tests can be run automatically. After setup, run `npm test` to check tests.

If you want, you can have tests run in watch mode, where tests will run again after files change.
Run `npm test -- --watch` for watch mode.

## About the testing software

The testing software runs automatically. It will test your code endpoint by endpoint
and piece by piece. It is important that you name your module methods and files exactly according to the instructions.

A lot of times a failing test indicates something wrong with your code. Students are naturally suspicious of the testing software.
If you think there is something wrong with the testing software, ask a mentor to look at your answer.
A mentor can tell you whether the testing software is wrong or whether you are, but cannot tell you the answer.

If you find a test that is not working correctly, or that you think is testing incorrectly, please create an issue on Github.
