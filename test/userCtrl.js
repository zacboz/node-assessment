import test from 'ava';
import sinon from 'sinon';
import userCtrl from '../userCtrl.js';
import users from '../users';

let stub;
test.before(() => {

  stub = sinon.stub(users, 'find');
  stub.withArgs().returns([{id: 1, first_name: 'foo'}]);
  stub.withArgs('id', '2').returns([{id: 2, first_name: 'bar'}]);
})

test.after.always(() => {
  stub.restore();
})

test('readAll', t => {


  let results = userCtrl.readAll();
  t.true(Array.isArray(results));

  let result = results[0];

  t.truthy(result.first_name)
  t.true(typeof result.first_name === 'string');
  t.truthy(result.id);
  t.is(result.id, 1)
  t.is(result.first_name, 'foo');
})