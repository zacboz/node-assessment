import test from 'ava';
import users from '../users';
import userData from '../userData';
import testUsers from './support/testUsers';
import _ from 'lodash';

test('will get all users if find is invoked without any arguments', t => {
  t.plan(2);

  let result = users.findOne();

  t.true(Array.isArray(result));
  t.deepEqual(result[0], userData[0]);
})

test('will find a user by key and value', t => {
  t.plan(3);


  let result = users.findOne('id', 3);

  t.false(Array.isArray(result));
  t.true(typeof result === 'object');

  t.deepEqual(result, userData[2]);
})

test('will return null if nothing is found', t => {
  t.plan(1);
  let result = users.findOne('foo', 'bar');

  t.falsy(result);
})

test('will add a user', t => {
  let testUser = testUsers.getNewUser();

  let result = users.add(testUser);


  t.truthy(result.id);
})

test('will reject an invalid user with an invalid key', t => {
  let testUser = testUsers.getNewUser();

  testUser.foo = 'bar';

  let result = t.throws(() => {
    users.add(testUser);
  })


  t.regex(result, /^Error/);
  t.regex(result, /User should not have foo/);
})

test('will reject an invalid user missing a key', t => {
  let testUser = testUsers.getNewUser();

  delete testUser.first_name;

  let result = t.throws(() => {
    users.add(testUser)
  })

  t.regex(result, /^Error/)
  t.regex(result, /Expected user to have first_name\./)
})

test('will remove user by id', t => {
  t.plan(1);
  users.remove('id', 1);

  let result = users.findOne('id', 1);

  t.falsy(result);
})

test('will not remove any users if none match', t => {
  let l = users.findOne().length;

  users.remove('foo', 'bar');

  t.is(users.findOne().length, l);

  t.not(users.findOne().length, 0);
})