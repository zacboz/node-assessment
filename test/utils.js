import test from 'ava';
import {validateUser} from '../utils';
import users from '../userData.json';
import _ from 'lodash';

test('will validate a good user', t => {
  t.plan(1);
  let testUser = _.cloneDeep(users[0]);
  delete testUser.id;
  
  t.true(validateUser(testUser));
})

test('will invalidate improper users', t => {
  t.plan(1);
  let testUser = _.cloneDeep(users[0]);

  testUser.favorites = '';

  t.throws(() => {
    validateUser(testUser)
  });

})

test('Will invalidate if there is an id', t => {
  t.plan(1);

  t.throws(() => {
    validateUser(users[0])
  })
})