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